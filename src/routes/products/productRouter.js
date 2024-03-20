const express = require("express");
const { productsController } = require("../../controllers");
const { ctrlWrapper } = require("../../middlewares/ctrlWrapper");

const authRouter = express.Router();

authRouter.get(
  "/all_products_group",
  ctrlWrapper(productsController.getAllProductsGroup)
);
authRouter.get(
  "/all_products_group",
  ctrlWrapper(productsController.getAllKozirki)
);
authRouter.get(
  "/all_kovani_zabori",
  ctrlWrapper(productsController.getAllKovaniZabori)
);
authRouter.get(
  "/all_kovani_grati",
  ctrlWrapper(productsController.getAllKovaniGrati)
);
authRouter.get(
  "/all_gate_with_corrugated_board",
  ctrlWrapper(productsController.getAllGateWithCorrugatedBoard)
);
authRouter.get(
  "/all_elite_iron_gates",
  ctrlWrapper(productsController.getAllEliteIronGates)
);

module.exports = authRouter;
