// messageController.js

const { Message } = require('../models');

async function saveMessage(req, res) {
  const { content, userId } = req.body; // userId debería venir del frontend
  try {
    const message = await Message.create({
      content,
      user_id: userId, // Usar el userId proporcionado desde el frontend
      created_at: new Date()
    });

    res.status(201).json({ message: 'Mensaje guardado correctamente.', data: message });
  } catch (error) {
    console.error('Error al guardar el mensaje:', error);
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
}

const getAllMessages = async (req, res) => {
  try {
    const messages = await Message.findAll();
    res.status(200).json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ error: 'Error fetching messages' });
  }
};

module.exports = {
  saveMessage,
  getAllMessages
};
