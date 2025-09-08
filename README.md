
# CodeSavant-AI  

## 🚀 Project Overview  
**CodeSavant-AI** is an **AI-powered code review platform** built with **LangChain + Google Gemini LLM** and **Node.js**.  

It enables developers to get **instant AI-generated feedback** on their code in real-time — with **no database storage**.  
Authentication is handled via **Google OAuth 2.0 + JWT** for secure, one-click login.  

👉 **Live Demo:** [CodeSavant-AI](https://codesavant-ai-frontend.onrender.com)  

---

## 🛠️ Tech Stack  
- **Frontend:** React.js (Vite + Tailwind)  
- **Backend:** Node.js, Express.js  
- **AI Integration:** Google Gemini AI (via **LangChain**)  
- **Authentication:** Google OAuth 2.0 + JWT  
- **Hosting:** Render (Frontend + Backend)  
- **API-Based Data Flow:** No Database Required  

---

## ✨ Features  
- 🔑 **Google OAuth Login/Signup** (JWT-secured, no DB).  
- 🤖 **LangChain-powered AI Code Review** using Gemini LLM.  
- ⚡ **Real-time analysis & feedback** via APIs.  
- 🎨 **Modern, responsive UI** with React + Tailwind.  
- 🔒 **JWT Middleware** for protected routes.  

---

## 🏗️ Installation & Setup (Local Development)  

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/Aanandshukla02/CodeSavant-AI.git
cd CodeSavant-AI
````

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:

```env
PORT=8000
CLIENT_ORIGIN=http://localhost:5173
JWT_SECRET=super_long_random_string
SESSION_SECRET=another_secret
GOOGLE_CLIENT_ID=your_google_client_id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_PATH=/auth/google/callback
```

Run backend server:

```bash
npx nodemon
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
```

Create `.env` inside `frontend/`:

```env
VITE_BACKEND_URL=http://localhost:8000
```

Run frontend:

```bash
npm run dev
```

---

## 🔐 Google OAuth Setup

1. Go to **Google Cloud Console → APIs & Services → Credentials**.

2. Create a new **OAuth 2.0 Client ID** (Application type: *Web Application*).

3. Add Authorized Redirect URI:

   ```
   http://localhost:8000/auth/google/callback
   ```

   *(For Production: use your Render backend URL, e.g. `https://codesavant-ai-backend.onrender.com/auth/google/callback`)*

4. Copy **Client ID** & **Client Secret** → add to backend `.env`.

---

## 📌 Usage

1. Visit 👉 [CodeSavant-AI Live](https://codesavant-ai-frontend.onrender.com).
2. Click **Continue with Google** to sign in.
3. Paste your code snippet → **Submit for Review**.
4. Get **AI-powered insights & suggestions instantly** ✨.

---

## 📜 License

This project is open-source under the **MIT License**.

---

💡 Developed with ❤️ by [Aanand Shukla](https://github.com/Aanandshukla02) 🚀

