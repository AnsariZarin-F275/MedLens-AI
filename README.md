# 🚑 MedLens AI – Intelligent Emergency Triage & First Response Assistant

MedLens AI is an AI-powered emergency triage assistant designed to help users understand the urgency of their symptoms before seeking medical care. It analyzes user-provided health information using Google Gemini AI and provides risk assessment, possible conditions (non-diagnostic), first-aid guidance, recommended specialists, and suggested next steps.

> **Disclaimer:** MedLens AI is for informational purposes only and is **not** a substitute for professional medical advice, diagnosis, or emergency medical services.

---

## 🌍 Live Demo

https://med-lens-ai-zarin.vercel.app/

---

## 💻 GitHub Repository

https://github.com/AnsariZarin-F275/MedLens-AI

---

# 🎯 Problem Statement

During emergencies, many people struggle to decide whether their symptoms require immediate medical attention or can wait for a routine consultation. Access to healthcare professionals may be delayed due to geographical limitations, overcrowded hospitals, or lack of awareness.

MedLens AI helps bridge this gap by providing AI-powered symptom assessment that estimates urgency, recommends the appropriate healthcare specialist, offers general first-aid guidance, and advises when emergency care may be necessary.

---

# ✨ Features

- AI-powered symptom analysis using Google Gemini
- Multi-step medical intake form
- Emergency risk assessment
- Urgency estimation
- Suggested possible conditions (non-diagnostic)
- Recommended medical specialist
- General first-aid guidance
- Next-step recommendations
- PDF report generation
- Responsive design
- Secure server-side AI integration

---

# 🤖 AI Workflow

User Input

↓

Medical Intake Form

↓

Next.js API Route

↓

Google Gemini API

↓

Structured JSON Response

↓

Results Dashboard

↓

Downloadable PDF Report

---

# 🛠 Tech Stack

### Frontend

- Next.js 16
- React 19
- Tailwind CSS
- Framer Motion
- Lucide React

### Backend

- Next.js API Routes

### AI

- Google Gemini 2.5 Flash
- @google/genai SDK

### PDF

- jsPDF

### Deployment

- Vercel

---

# 🔒 Security

- API key stored securely in `.env.local`
- Gemini accessed only from the backend
- No API keys exposed to the frontend
- Environment variables excluded from Git

---

# 📂 Project Structure

```
app/
components/
lib/
public/
README.md
package.json
```

---

# 🚀 Local Setup

Clone the repository

```bash
git clone https://github.com/AnsariZarin-F275/MedLens-AI.git
```

Install dependencies

```bash
npm install
```

Create a `.env.local` file

```
GEMINI_API_KEY=YOUR_API_KEY
```

Run the application

```bash
npm run dev
```

---

# 📸 Screenshots

(Add screenshots here before final submission.)

![-Landing Page](docs/screenshots/landing-page.png)
![-Analyze Symptoms](docs/screenshots/analyze-page.png)
![-Results Dashboard](docs/screenshots/results-page.png)
![PDF Report](docs/screenshots/pdf-report.png)

---

# 🚀 Future Improvements

- Multilingual support
- Voice symptom input
- Medical image analysis
- Hospital locator integration
- Emergency contact integration
- Offline support

---

# 👩‍💻 Author

**Zarin Fatima Ansari**

LinkedIn:
https://www.linkedin.com/in/zarin-fatima/

GitHub:
https://github.com/AnsariZarin-F275

---

## 📄 License

This project was developed for the **Idea2Impact 2026 Online AI Hackathon**.