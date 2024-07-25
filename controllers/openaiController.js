const axios = require('axios');
require('dotenv').config();

const getBotResponse = async (prompt) => {
  const apiKey = process.env.OPENAI_API_KEY; 
  const url = 'https://api.openai.com/v1/chat/completions';

  if (!prompt || typeof prompt !== 'string') {
    throw new Error('Invalid prompt');
  }

  try {
    const response = await axios.post(
      url,
      {
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'user', content: prompt }
        ],
        max_tokens: 20,
        temperature: 0.5,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
      }
    );

    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.error('Error al obtener respuesta del bot:', error.response?.data || error.message);
    throw new Error(`Error al obtener respuesta del bot: ${error.response?.data?.error?.message || error.message}`);
  }
};

module.exports = { getBotResponse };
