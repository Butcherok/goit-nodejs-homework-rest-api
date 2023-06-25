const express = require("express");

const ctrl = require("../../controllers");

const { validateBody, isValidId, authenticate } = require("../../middlewares");

const { contactSchemas } = require("../../models");

const router = express.Router();

router.get("/", authenticate, ctrl.getAll);

router.get("/:contactId", authenticate, isValidId, ctrl.getById);

router.post(
  "/",
  authenticate,
  validateBody(contactSchemas.addSchema),
  ctrl.add
);

router.delete("/:contactId", authenticate, isValidId, ctrl.delBiId);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(contactSchemas.addSchema, "Missing fields"),
  ctrl.updateBiId
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(contactSchemas.updateFavorite, "Missing field favorite"),
  ctrl.updateStatus
);

module.exports = router;
