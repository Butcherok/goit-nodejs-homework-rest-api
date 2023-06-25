const express = require("express");

const ctrl = require("../../controllers");

const { validateBody, isValidId, authenticate } = require("../../middlewares");

const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", authenticate, ctrl.getAll);

router.get("/:contactId", authenticate, isValidId, ctrl.getById);

router.post("/", authenticate, validateBody(schemas.addSchema), ctrl.add);

router.delete("/:contactId", authenticate, isValidId, ctrl.delBiId);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(schemas.addSchema, "Missing fields"),
  ctrl.updateBiId
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.updateFavorite, "Missing field favorite"),
  ctrl.updateStatus
);

module.exports = router;
