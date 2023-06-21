const express = require("express");

const ctrl = require("../../controllers/contacts");

const { validateBody, isValidId } = require("../../middlewares");

const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:contactId", isValidId, ctrl.getById);

router.post("/", validateBody(schemas.addSchema), ctrl.add);

router.delete("/:contactId", isValidId, ctrl.delBiId);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.addSchema, "Missing fields"),
  ctrl.updateBiId
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(schemas.updateFavorite, "Missing field favorite"),
  ctrl.updateStatus
);

module.exports = router;
