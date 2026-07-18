MedLens AI
Intelligent Emergency Triage & First Response Assistant

Theme 3 – Crisis Management, HealthTech & Emergency Response

1. Introduction

Medical emergencies often begin with uncertainty. Many people experience symptoms but are unsure whether they require immediate emergency care, an urgent doctor's consultation, or simple home monitoring.

This uncertainty can delay treatment, increase anxiety, and place additional pressure on healthcare systems through unnecessary emergency visits. In many regions, especially where medical professionals are not immediately available, individuals lack access to quick preliminary guidance regarding the urgency of their symptoms.

MedLens AI addresses this challenge by providing an AI-powered symptom assessment system that helps users better understand the seriousness of their condition before seeking professional medical care.

The application is designed only as an informational decision-support tool and does not replace qualified healthcare professionals.

2. Problem Statement

Millions of people struggle to determine whether their symptoms require immediate medical attention.

Common challenges include:

Lack of immediate medical guidance
Long waiting times in hospitals
Panic caused by limited medical knowledge
Difficulty identifying the appropriate specialist
Delayed medical decisions
Overcrowding of emergency departments because of non-emergency cases

People frequently search the internet for symptoms, where information is often incomplete, contradictory, or unreliable.

There is a need for an accessible system that can quickly estimate urgency and guide users toward appropriate medical action while clearly encouraging professional healthcare consultation whenever necessary.

3. Proposed Solution

MedLens AI is an AI-powered emergency triage assistant built using Next.js and Google Gemini.

The system collects medical information through a structured multi-step intake form.

The submitted information includes:

Age
Gender
Height
Weight
Existing medical conditions
Current medications
Allergies
Current symptoms
Duration of symptoms
Pain level
Body temperature
Breathing difficulty
Chest pain

This information is securely sent to the backend, where Google Gemini analyzes the medical context.

Instead of diagnosing diseases, the AI estimates the urgency level and generates structured recommendations that help users understand what actions they should consider next.

4. AI Approach

The core intelligence of MedLens AI is powered by Google Gemini 2.5 Flash through the official Google GenAI SDK.

The backend sends carefully structured medical information to Gemini using a safety-focused prompt.

The AI is explicitly instructed not to provide medical diagnoses.

Instead, it provides:

Estimated risk level
Estimated urgency
Possible medical conditions (non-diagnostic)
Recommended medical specialist
General first-aid guidance
Suggested next steps
Emergency recommendation when appropriate
Informational medical disclaimer

The response is validated before being returned to the frontend.

5. Features

MedLens AI currently provides:

Responsive healthcare web interface
Multi-step symptom collection form
AI-powered emergency triage
Risk estimation
Urgency estimation
Possible condition suggestions
Specialist recommendation
First-aid guidance
Next-step recommendations
Downloadable PDF medical summary
Secure backend AI integration
6. Technology Stack

Frontend

Next.js
React
Tailwind CSS
Framer Motion
Lucide React

Backend

Next.js API Routes

Artificial Intelligence

Google Gemini 2.5 Flash
Google GenAI SDK

Deployment

Vercel
7. Security

Security was considered throughout the development process.

The Gemini API key is stored securely using environment variables.

The frontend never receives the API key.

All AI communication occurs only through secure backend API routes.

Sensitive credentials are excluded from GitHub using .gitignore.

8. Expected Impact

MedLens AI aims to provide users with quick preliminary guidance during uncertain medical situations.

Potential benefits include:

Better awareness of symptom severity
Faster decision-making
Reduced unnecessary hospital visits
Improved understanding of when emergency care is appropriate
Better guidance toward suitable healthcare specialists

The application is intended as an informational support tool that encourages users to seek professional medical advice whenever required.

9. Limitations

MedLens AI is not a medical diagnosis system.

The application:

Does not replace doctors.
Does not prescribe medicines.
Does not guarantee medical accuracy.
Does not provide emergency services.

Users experiencing severe symptoms should immediately contact local emergency medical services.

10. Conclusion

MedLens AI demonstrates how artificial intelligence can improve healthcare accessibility by helping users better understand the urgency of their symptoms before consulting medical professionals.

By combining a structured medical intake process with Google Gemini's reasoning capabilities, the application delivers fast, organized, and responsible informational guidance while maintaining user safety through strict non-diagnostic AI instructions.