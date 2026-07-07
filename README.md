# 🤖 AI Interview Simulator

An AI-powered Full Stack Interview Preparation Platform that generates personalized interview questions from a candidate's resume, evaluates answers, and provides interview performance analytics.

🌐 **Live Demo:**  
https://ai-interview-simulator-git-main-kalyan-badiginchala-s-projects.vercel.app/

---

# 🚀 Features

### 🔐 Authentication
- User Registration
- Secure Login
- JWT Authentication
- Protected Routes
- Session Management

### 📄 Resume Management
- Upload Resume (PDF)
- Resume Parsing using PDF Parser
- Resume Storage
- Extract Skills and Experience

### 🤖 AI Interview Generation
- AI-generated interview questions
- Personalized questions based on uploaded resume
- Technical and HR questions
- Dynamic interview creation

### 🎤 Interview Module
- One-by-one question flow
- Submit answers
- Track interview progress
- Resume interrupted interviews

### 📊 AI Evaluation
- Evaluate submitted answers
- Performance scoring
- AI-generated suggestions
- Overall interview analysis

### 📚 Interview History
- View previous interviews
- View interview results
- Delete interviews
- Dashboard statistics

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- React Router
- Axios
- React Hot Toast

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- Multer
- PDF Parse
- REST API Architecture

## AI

- OpenRouter API
- Resume Analysis
- Question Generation
- Answer Evaluation

## Deployment

Frontend
- Vercel

Backend
- Render

Database
- MongoDB Atlas

Version Control
- Git
- GitHub

---

# 🏗 Project Architecture

```
React Frontend
        │
        │ REST API
        ▼
Node.js + Express Backend
        │
        ├────────► MongoDB Atlas
        │
        ├────────► Resume Upload
        │
        └────────► OpenRouter AI
```

---

# ⚙ How It Works

## Step 1

User registers and logs into the application.

↓

## Step 2

User uploads a resume in PDF format.

↓

## Step 3

Backend extracts resume content using pdf-parse.

↓

## Step 4

Resume content is sent to the AI model.

↓

## Step 5

AI generates personalized interview questions.

↓

## Step 6

Questions are stored in MongoDB.

↓

## Step 7

User answers each question.

↓

## Step 8

AI evaluates every answer.

↓

## Step 9

Overall interview score and suggestions are generated.

↓

## Step 10

Interview history is stored for future reference.

---

# 📂 Folder Structure

```
AI-Interview-Simulator
│
├── frontend
│   ├── components
│   ├── pages
│   ├── services
│   └── assets
│
├── backend
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── utils
│   └── config
│
└── README.md
```

---

# 🔑 REST API Endpoints

## Authentication

```
POST /api/auth/register

POST /api/auth/login
```

## User

```
GET /api/users/profile
```

## Resume

```
POST /api/resume/upload
```

## Questions

```
POST /api/questions/generate

GET /api/questions/:interviewId
```

## Answers

```
POST /api/answers
```

## Results

```
GET /api/results/:interviewId
```

## Interview

```
GET /api/interviews

PATCH /api/interviews/:id/submit

DELETE /api/interviews/:id
```

---

# 💻 Installation

Clone Repository

```
git clone https://github.com/krisnakalyan25-eng/AI-Interview-Simulator.git
```

Backend

```
cd backend

npm install

npm start
```

Frontend

```
cd frontend

npm install

npm run dev
```

---

# Environment Variables

Backend

```
PORT=

MONGO_URI=

JWT_SECRET=

OPENROUTER_API_KEY=
```

---

# Deployment

Frontend

Vercel

Backend

Render

Database

MongoDB Atlas

---

# Skills Demonstrated

- Full Stack Development
- React.js
- Node.js
- Express.js
- MongoDB
- REST API Development
- JWT Authentication
- PDF Processing
- AI API Integration
- CRUD Operations
- File Upload
- Protected Routes
- Git
- GitHub
- Deployment
- Responsive UI Design

---

# Future Improvements

- Voice-based interviews
- Video interview support
- AI speech evaluation
- Company-specific interview mode
- Admin dashboard
- Email notifications
- Resume version history
- Dark mode
- Multi-language support

---

# Author

**Kalyan Badiginchala**

GitHub

https://github.com/krisnakalyan25-eng

---

⭐ If you like this project, don't forget to star the repository.
