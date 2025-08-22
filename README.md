# CodeSavant-AI  

## 🚀 Project Overview  
CodeSavant-AI is an **AI-powered code review platform** built on the **MERN stack** with **Google Gemini AI** integration.  
It now comes with **Google OAuth Login/Signup** so developers can securely sign in with just one click.  

The app processes code via APIs in **real-time** – **no database storage** is used.  

---

## 🛠️ Tech Stack  
- **Frontend:** React.js (Vite)  
- **Backend:** Node.js, Express.js  
- **AI Integration:** Google Gemini AI  
- **Authentication:** Google OAuth 2.0 + JWT  
- **API-Based Data Flow** (No DB required)  

---

## ✨ Features  
- 🔑 **Google OAuth Login/Signup** (JWT-based, DB-less).  
- 🤖 **AI-Powered Code Review** using Gemini AI.  
- ⚡ **Real-time analysis** via API.  
- 🎨 **User-friendly UI** built with React.js.  
- 🔒 **Protected API Routes** with JWT middleware.  

---

## 🏗️ Installation & Setup  

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/Aanandshukla02/CodeSavant-AI.git
cd CodeSavant-AI
````

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/` (example below):

```env
PORT=8000
CLIENT_ORIGIN=http://localhost:5173
JWT_SECRET=super_long_random_string
SESSION_SECRET=another_secret
GOOGLE_CLIENT_ID=your_google_client_id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_PATH=/auth/google/callback
```

Run backend:

```bash
npx nodemon
```

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file inside `frontend/`:

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
2. Create a new **OAuth 2.0 Client ID** (type: *Web Application*).
3. Add Authorized Redirect URI:

   ```
   http://localhost:8000/auth/google/callback
   ```
4. Copy **Client ID** & **Client Secret** → add to backend `.env`.

---

## 📌 Usage

1. Open frontend at `http://localhost:5173`.
2. Click **Continue with Google** to login.
3. Paste code snippet → **Submit for review**.
4. Get **AI-generated feedback** instantly.

---

## 📷 Screenshots

<img width="1710" height="1112" alt="Screenshot 1" src="https://github.com/user-attachments/assets/0b4f86fa-5c28-426d-b4ec-0e64544966c6" />  

<img width="1710" height="1112" alt="Screenshot 2" src="https://github.com/user-attachments/assets/7be5cc13-c023-4b02-b3ce-0c32517d60e7" />  

<img width="1710" height="1112" alt="Screenshot 3" src="https://github.com/user-attachments/assets/0b296ff1-1dce-49d8-a61c-9d40b524abec" />  

<img width="1710" height="1112" alt="Screenshot 4" src="https://github.com/user-attachments/assets/9ea51aac-d7ec-4622-90c3-a26a6e7bbf38" />  

<img width="1710" height="1112" alt="Screenshot 5" src="https://github.com/user-attachments/assets/92daecf5-a778-4db1-9ed9-d4a5347aa0c9" />  

---

## 📜 License

This project is open-source under the **MIT License**.

---

💡 Developed with ❤️ by [Aanand Shukla](https://github.com/Aanandshukla02) 🚀

