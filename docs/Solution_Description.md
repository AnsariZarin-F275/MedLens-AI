Solution Description:

Project Name: MedLens AI – Intelligent Emergency Triage & First Response Assistant

MedLens AI is an AI-powered web application developed under the Crisis Management, HealthTech & Emergency Response theme. The project helps users understand the urgency of their symptoms before seeking professional medical care.

The application collects user health information through a responsive multi-step medical intake form, including personal details, medical history, symptoms, pain level, body temperature, and other relevant information. This data is securely sent to a backend API built with Next.js.

The backend integrates with Google Gemini 2.5 Flash using the official @google/genai SDK. Instead of diagnosing diseases, the AI is specifically instructed to estimate the urgency of the reported symptoms, suggest possible medical conditions (non-diagnostic), recommend an appropriate medical specialist, provide general first-aid guidance, suggest next steps, and indicate whether emergency medical attention may be required. The AI response is validated before being returned to the frontend to ensure a consistent JSON structure.

The application presents the results in a professional healthcare dashboard featuring a color-coded risk indicator, emergency alerts (when applicable), specialist recommendations, first-aid guidance, timeline-based next steps, and an option to download a PDF summary for future reference.

To ensure security, the Gemini API key is stored only in server-side environment variables and is never exposed to the frontend. The application is deployed on Vercel and is fully responsive across desktop, tablet, and mobile devices.

AI Used:

Paste this separately if the form asks for AI details.

AI Model: Google Gemini 2.5 Flash

SDK: Official @google/genai

Role of AI:

Estimates medical urgency
Suggests possible conditions (non-diagnostic)
Recommends appropriate specialists
Provides general first-aid guidance
Suggests next steps
Indicates when emergency care may be appropriate

The AI is intentionally instructed not to diagnose diseases or prescribe medications, ensuring the application remains an informational decision-support tool.

Tech Stack:

Next.js 16 (App Router)
React 19
Tailwind CSS
Framer Motion
Lucide React
Next.js API Routes
Google Gemini 2.5 Flash
@google/genai SDK
jsPDF
Vercel

Innovation: 

MedLens AI goes beyond a basic chatbot by using structured AI prompting and validated JSON responses to generate a professional emergency triage report. The application focuses on estimating urgency rather than providing medical diagnoses, promoting responsible AI usage while helping users make informed decisions about seeking medical care.