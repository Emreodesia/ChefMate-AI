import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Gemini API Key - environment variable'dan alınacak
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  console.error('❌ GEMINI_API_KEY environment variable bulunamadı!');
  console.error('Lütfen .env dosyasında GEMINI_API_KEY tanımlayın.');
  process.exit(1);
}

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Gemini API'ye istek gönder
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [
              {
                text: `Sen ChefMate AI, bir yemek tarifi asistanısın. Kullanıcı sana yemek tarifleri, pişirme teknikleri, malzeme önerileri ve mutfak ipuçları hakkında sorular sorabilir. 
                
                Kullanıcının sorusu: ${message}
                
                Lütfen Türkçe olarak yanıtla ve yemek tarifleri verirken detaylı malzeme listesi ve adım adım talimatlar ver. Eğer kullanıcı spesifik bir tarif istiyorsa, o tarifi detaylı bir şekilde açıkla.`
              }
            ]
          }
        ]
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    const aiResponse = response.data.candidates[0].content.parts[0].text;
    
    res.json({ 
      response: aiResponse,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error calling Gemini API:', error);
    res.status(500).json({ 
      error: 'AI servisi şu anda kullanılamıyor. Lütfen daha sonra tekrar deneyin.',
      details: error.message 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'ChefMate AI Server is running',
    timestamp: new Date().toISOString()
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'ChefMate AI Backend Server',
    version: '1.0.0',
    endpoints: {
      chat: '/api/chat',
      health: '/api/health'
    }
  });
});

app.listen(PORT, () => {
  console.log(`🚀 ChefMate AI Server running on port ${PORT}`);
  console.log(`📡 Health check: http://localhost:${PORT}/api/health`);
  console.log(`💬 Chat endpoint: http://localhost:${PORT}/api/chat`);
}); 