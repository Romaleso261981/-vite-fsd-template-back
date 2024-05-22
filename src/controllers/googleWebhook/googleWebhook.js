const axios = require("axios");

const TELEGRAM_BOT_TOKEN = "7077738581:AAEqoAWJvox6ouc6foEcZNLTNWO6N8MSaNw";
const TELEGRAM_CHAT_ID = "-1001682516809";

async function googleWebhook(req, res) {
  try {
    const requestData = req.body;
    console.log("Request data:", requestData);

    // Витягування необхідних даних з тіла запиту (згідно з ТЗ)
    const {
      utmSource,
      utmMedium,
      utmCampaign,
      utmTerm,
      utmContent,
      fbp,
      fbc,
      ipAddress,
      userAgent
    } = requestData;

    // Формування повідомлення для Telegram
    const message = `
      UTM Source: ${utmSource}
      UTM Medium: ${utmMedium}
      UTM Campaign: ${utmCampaign}
      UTM Term: ${utmTerm}
      UTM Content: ${utmContent}
      FBP: ${fbp}
      FBC: ${fbc}
      IP Address: ${ipAddress}
      User Agent: ${userAgent}
    `;

    // Надсилання повідомлення до Telegram
    await axios.post(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        chat_id: TELEGRAM_CHAT_ID,
        text: message
      }
    );

    // Запис даних до таблиці BigQuery
    // await bigquery.dataset(datasetId).table(tableId).insert([requestData]);

    res.status(200).send("Data received and processed successfully");
  } catch (error) {
    console.error("Error processing data:", error);
    res.status(500).send("Internal Server Error");
  }
}

module.exports = googleWebhook;
