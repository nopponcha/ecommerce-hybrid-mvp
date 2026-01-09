const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/auth.middleware');
const controller = require('../controllers/user.controller');

router.get('/me', authMiddleware, controller.getMe);

module.exports = router;
