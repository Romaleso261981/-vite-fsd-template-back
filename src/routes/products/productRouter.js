const express = require("express");
const { productsController } = require("../../controllers");
const { ctrlWrapper } = require("../../middlewares/ctrlWrapper");

const authRouter = express.Router();

authRouter.get(
  "/all_products_group",
  ctrlWrapper(productsController.getAllProductsGroup)
);

module.exports = authRouter;
