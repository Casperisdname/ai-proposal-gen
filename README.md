
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
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

>>>>>>> 993ec5a2671342ab38387388131a973e5b74448a
