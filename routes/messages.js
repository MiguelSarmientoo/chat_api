const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

router.get('/messages', messageController.getAllMessages);
router.post('/guardarMensaje', messageController.saveMessage);

module.exports = router;
