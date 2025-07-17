# ChefMate AI - AI-Powered Recipe Assistant

<img width="847" height="654" alt="123" src="https://github.com/user-attachments/assets/898e054b-b49d-45ba-94f3-4505c460dfc5" />


ChefMate AI is a modern web application that provides recipes, cooking techniques, and kitchen tips using Gemini AI technology.

## 🚀 Features

- 🤖 **AI-Powered Chat**: Real-time recipe assistant with Gemini AI
- 🍳 **Detailed Recipes**: Ingredient lists and step-by-step instructions
- 🌍 **World Cuisine**: Recipes from different cultures
- 💡 **Kitchen Tips**: Cooking techniques and tricks
- 📱 **Modern UI**: Responsive and user-friendly interface

## 🛠️ Installation

### Requirements
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone the project**
```bash
git clone <repository-url>
cd ChefMate-AI
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
Create a `.env` file:
```env
GEMINI_API_KEY=your_gemini_api_key_here
PORT=3001
```

4. **Start the application**

**Frontend Only (Development):**
```bash
npm run dev
```

**Backend Server Only:**
```bash
npm run server
```

**Frontend + Backend (Recommended):**
```bash
npm run dev:full
```

## 📡 API Endpoints

### Chat Endpoint
- **URL**: `POST /api/chat`
- **Body**: `{ "message": "user message" }`
- **Response**: `{ "response": "AI response", "timestamp": "..." }`

### Health Check
- **URL**: `GET /api/health`
- **Response**: `{ "status": "OK", "message": "..." }`

## 🎯 Usage

1. After starting the application, go to `http://localhost:5173`
2. Ask questions about recipes, cooking techniques, or kitchen tips in the chat section
3. The AI assistant will provide detailed responses

## 🔧 Technologies

- **Frontend**: Vue.js 3, Vite
- **Backend**: Node.js, Express.js
- **AI**: Google Gemini API
- **Styling**: CSS3, Custom animations

## 📝 Example Questions

- "How do you make Carbonara?"
- "What are rice cooking techniques?"
- "How do you make pizza dough at home?"
- "Can you give me fish cooking tips?"
- "Can you suggest dessert recipes?"

## 🔒 Security

- API keys are securely stored using environment variables
- CORS settings are configured
- Input validation is available

## 🐛 Troubleshooting

### Backend connection error
- Make sure the backend server is running (`npm run server`)
- Check that port 3001 is available

### API key error
- Check that the correct API key is in the `.env` file
- Verify that your Gemini API key is valid

## 📄 License

This project is licensed under the MIT license.

---

**ChefMate AI** - AI by your side in the kitchen! 🍳🤖
