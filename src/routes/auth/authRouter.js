const express = require("express");
const { authController } = require("../../controllers");
const { ctrlWrapper } = require("../../middlewares/ctrlWrapper");

const authRouter = express.Router();

authRouter.post("/login", ctrlWrapper(authController.login));

authRouter.get("/logout", ctrlWrapper(authController.logout));

module.exports = authRouter;
