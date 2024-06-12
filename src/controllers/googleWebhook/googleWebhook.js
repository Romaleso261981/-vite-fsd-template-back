const axios = require("axios");
const { bigquery } = require("../../app");

const TELEGRAM_BOT_TOKEN = "7077738581:AAEqoAWJvox6ouc6foEcZNLTNWO6N8MSaNw";
const TELEGRAM_CHAT_ID = "-1001682516809";
const MEASUREMENT_ID = "716781908.1676204597"; // Вставте свій Measurement ID

// Ім'я набору даних і таблиці в BigQuery
const datasetId = "your_dataset_id";
const tableId = "your_table_id";

// Функція для отримання значення ga_session_id з cookie
function getGaSessionId(req) {
  const cookieName = "_ga_" + MEASUREMENT_ID.replace("G-", "");
  if (req.cookies[cookieName]) {
    const parts = req.cookies[cookieName].split(".");
    return parts[2] || null;
  }
  return null;
}

// Функція для отримання значення ga_pseudo_id з cookie
function getGaPseudoId(req) {
  console.log("req.cookies", req.cookies); // Додайте це для налагодження

  const cookieName = "_ga";
  if (req.cookies[cookieName]) {
    const parts = req.cookies[cookieName].split(".");
    return parts[2] + "." + parts[3];
  }
  return null;
}

async function googleWebhook(req, res) {
  try {
    const requestData = req.body;
    console.log("Request data:", requestData);

    // Отримання значень ga_session_id і ga_pseudo_id з cookie
    const ga_session_id = getGaSessionId(req);
    const ga_pseudo_id = getGaPseudoId(req);

    // Витягування необхідних даних з тіла запиту (згідно з ТЗ)
    const {
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      utm_content,
      fbp,
      fbc,
      ip_address,
      user_agent
    } = requestData;

    // Формування повідомлення для Telegram
    const message = `
      UTM Source: ${utm_source}
      UTM Medium: ${utm_medium}
      UTM Campaign: ${utm_campaign}
      UTM Term: ${utm_term}
      UTM Content: ${utm_content}
      FBP: ${fbp}
      FBC: ${fbc}
      IP Address: ${ip_address}
      User Agent: ${user_agent}
      GA Session ID: ${ga_session_id}
      GA Pseudo ID: ${ga_pseudo_id}
    `;

    // Запис даних до таблиці BigQuery
    await bigquery
      .dataset(datasetId)
      .table(tableId)
      .insert([
        {
          ...requestData,
          ga_session_id,
          ga_pseudo_id
        }
      ]);

    // Надсилання повідомлення до Telegram
    await axios.post(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        chat_id: TELEGRAM_CHAT_ID,
        text: message
      }
    );

    // Запис даних до таблиці BigQuery
    await bigquery.dataset(datasetId).table(tableId).insert([requestData]);

    res.status(200).send("Data received and processed successfully");
  } catch (error) {
    console.error("Error processing data:", error);
    res.status(500).send("Internal Server Error");
  }
}

module.exports = googleWebhook;
