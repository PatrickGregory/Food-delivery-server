const express = require('express');
const { registerController, authController, loginController, verifyotpController } = require('../controller/userRoutes');
const protect = require('../middleware/authMiddleware');
router = express.Router();

router.post('/register', registerController)
router.post('/get-user',protect,authController)
router.post('/login',loginController)
router.post('/verify-otp',verifyotpController)

module.exports = router;