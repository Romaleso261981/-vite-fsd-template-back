const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { BigQuery } = require("@google-cloud/bigquery");

const authRouter = require("./routes/auth/authRouter");
const productRouter = require("./routes/products/productRouter");
const googleWebhook = require("./controllers/googleWebhook/googleWebhook");

const app = express();
app.use(cookieParser());

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

// Конфігурація BigQuery
export const bigquery = new BigQuery({
  projectId: "your_project_id",
  keyFilename: "path_to_your_service_account_key.json"
});

app.use("/auth", authRouter);
app.post("/webhook", googleWebhook);
app.use("/products", productRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
