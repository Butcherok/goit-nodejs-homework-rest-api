const express = require('express');

const router = express.Router();

const ctrl = require('../../controllers');

const { validateBody, authenticate, upload } = require('../../middlewares');

const { userSchemas } = require('../../models');

router.post(
  '/register',
  validateBody(userSchemas.registerSchema),
  ctrl.register
);

router.get('/verify/:verificationToken', ctrl.verifyEmail);

router.post(
  '/verify',
  validateBody(userSchemas.emailSchema),
  ctrl.resendVerifyEmail
);

router.post('/login', validateBody(userSchemas.loginSchema), ctrl.login);

router.get('/current', authenticate, ctrl.getCurrent);

router.post('/logout', authenticate, ctrl.logout);

router.patch(
  '/avatars',
  authenticate,
  upload.single('avatar'),
  ctrl.updateAvatar
);

module.exports = router;
