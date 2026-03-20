# AI Freelance Proposal & Contract Generator

A lightweight AI-powered tool that transforms raw job descriptions into:
- High-quality freelance proposals  
- Smart pricing suggestions  
- Structured contract drafts  
- Risk assessments  

Built for speed, clarity, and real-world usability.

---

## 🚀 Live Demo
Frontend: https://ai-proposal-frontend.onrender.com/

Backend API: https://ai-proposal-generator-api.onrender.com/docs  

---

## 🧠 What It Does

Paste any job description and instantly generate:

### 1. Proposal
Client-focused, persuasive, ready-to-send

### 2. Pricing
Suggested range with reasoning

### 3. Contract
Basic legal structure including:
- Scope
- Timeline
- Payment terms
- Ownership

### 4. Risk Assessment
Flags potential issues like:
- Scope creep
- Vague requirements
- Unrealistic expectations

---

## 🏗️ Architecture

**Frontend**
- Next.js (React)
- Fetch API

**Backend**
- FastAPI (Python)

**AI Layer**
- OpenAI API (structured prompting)

---

## ⚙️ How It Works

1. User inputs job description  
2. Frontend sends request to FastAPI backend  
3. Backend calls OpenAI with structured prompt  
4. AI returns formatted response  
5. Frontend displays structured output  

---

## 📦 Project Structure
```
ai-proposal-gen/
├── backend/
│ ├── main.py
│ ├── ai.py
│ └── schemas.py
├── frontend/
│ └── (Next.js app)
```
---

## 🛠️ Local Setup

### Backend

cd backend
pip install -r requirements.txt
uvicorn main:app --reload


### Frontend
cd frontend
npm install
npm run dev


---

## 🔑 Environment Variables

Create a `.env` or set:
OPENAI_API_KEY=your_api_key_here


---

## ⚠️ Limitations

- Not legally binding contracts  
- Pricing is advisory, not market-validated  
- No user authentication or persistence (MVP)

---

## 🎯 Roadmap

- Structured UI (tabs for outputs)
- Export to PDF
- User profile personalization
- Proposal tone control
- Save & history feature

---

## 💡 Why This Matters

Freelancers waste time writing proposals and structuring deals.

This tool reduces that friction to seconds.

