import "./globals.css";

export const metadata = {
  title: "MedLens AI | Emergency Triage & First Response",
  description: "AI-powered emergency triage and first response guidance.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
