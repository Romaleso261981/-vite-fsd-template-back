const express = require("express");
const { productsController } = require("../../controllers");
const { ctrlWrapper } = require("../../middlewares/ctrlWrapper");

const authRouter = express.Router();

authRouter.get(
  "/all_products_group",
  ctrlWrapper(productsController.getAllProductsGroup)
);
authRouter.get("/all_kozirki", ctrlWrapper(productsController.getAllKozirki));
authRouter.get(
  "/all_zabori",
  ctrlWrapper(productsController.getAllKovaniZabori)
);
authRouter.get("/all_grati", ctrlWrapper(productsController.getAllKovaniGrati));
authRouter.get(
  "/all_gate_corrugated_board",
  ctrlWrapper(productsController.getAllGateWithCorrugatedBoard)
);
authRouter.get(
  "/all_elite_gates",
  ctrlWrapper(productsController.getAllEliteIronGates)
);

module.exports = authRouter;
