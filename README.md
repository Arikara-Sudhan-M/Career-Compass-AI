# 🚀 Career Compass AI

### An Intelligent Degree & Career Recommendation Platform for Students

Career Compass AI is a full-stack AI-powered web application that helps students discover suitable careers based on their interests, compare career options, take career quizzes, explore career roadmaps, and receive personalized guidance from an AI career assistant.

---

## 🌐 Live Demo

Frontend:https://career-compass-ai-three.vercel.app/
Backend API:https://career-compass-ai-backend.onrender.com

---

## 📸 Project Preview

Screenshots will be added after deployment.


---

# ✨ Features

## 👤 User Authentication
- Secure user registration and login
- JWT-based authentication
- Password encryption using bcrypt

## 🎯 Career Recommendation
- Personalized career recommendations
- Explore different career paths
- View detailed career information

## 📄 Career Details
- Career descriptions
- Salary ranges
- Future demand
- Growth rates
- Work environment
- Required degrees
- Required skills
- Top recruiters

## ⚖️ Career Comparison
- Compare two careers side-by-side
- Analyze salary, demand, and growth opportunities

## 🧠 Career Quiz
- Answer personality and interest-based questions
- Receive suitable career suggestions

## 🗺 Career Roadmaps
- Step-by-step learning paths
- Required skills
- Recommended learning resources

## 🤖 AI Career Assistant
- Powered by Groq AI
- Ask career-related questions
- Get personalized AI guidance

## ❤️ Saved Careers
- Save favorite careers
- Access saved careers from the dashboard

## 🌙 Modern UI/UX
- Responsive design
- Dark and Light mode
- Mobile-friendly interface
- Smooth animations

---

# 🛠 Tech Stack

## Frontend
- React.js
- Vite
- Tailwind CSS
- React Router
- Axios
- React Toastify
- Framer Motion

## Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcryptjs
- REST API

## AI Integration
- Groq AI API

## Tools & Deployment
- Git & GitHub
- Vercel (Frontend)
- Render (Backend)

---

# 🏗 Project Architecture

```
Career-Compass-AI
│
├── client                     # React Frontend
│   ├── src
│   │   ├── pages              # Application pages
│   │   ├── components         # Reusable components
│   │   ├── routes             # Routing configuration
│   │   ├── context            # Theme management
│   │   └── config             # API configuration
│
├── server                     # Express Backend
│   ├── controllers            # Business logic
│   ├── models                 # MongoDB schemas
│   ├── routes                 # API endpoints
│   ├── services               # AI services
│   ├── scripts                # Database seed scripts
│   └── config                 # Database connection
```

---

# 🔐 Environment Variables

## Client (.env)

```
VITE_API_URL=http://localhost:5000/api
```

---

## Server (.env)

```
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret_key

GROQ_API_KEY=your_groq_api_key
```

---

# ⚙️ Installation & Setup

## 1. Clone Repository

```bash
git clone https://github.com/Arikara-Sudhan-M/Career-Compass-AI.git
```

---

## 2. Install Frontend Dependencies

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 3. Install Backend Dependencies

```bash
cd server
npm install
npm run dev
```

Backend runs on:

```
http://localhost:5000
```

---

# 🔗 API Endpoints

## Authentication
```
POST /api/auth/register
POST /api/auth/login
```

## Careers
```
GET /api/careers
GET /api/careers/:id
```

## Users
```
POST /api/users/save-career
GET /api/users/saved-careers
```

## Roadmaps
```
GET /api/roadmaps/:careerName
```

## AI Assistant
```
POST /api/ai/chat
```

---

# 📱 Responsive Design

The application is optimized for:

- 💻 Desktop
- 💻 Laptop
- 📱 Mobile
- 📟 Tablet

---

# 🚀 Future Enhancements

- AI-based career matching using personality analysis
- Career trend analytics
- Resume builder
- Career learning courses integration
- AI interview preparation assistant
- Notification system

---

# 👨‍💻 Developer

**Arikara Sudhan M**

- BE Computer Science Engineering
- Frontend Developer
- UI/UX Designer
- Full Stack Web Developer

---

# ⭐ Support

If you like this project, please give it a ⭐ on GitHub.

---

<<<<<<< HEAD
## Thank You For Visiting Career Compass AI 🚀
=======
## Thank You For Visiting Career Compass AI 🚀
>>>>>>> f273acd (Updated frontend API configuration and README)
