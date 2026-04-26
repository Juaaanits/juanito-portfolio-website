import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import type React from "react";
import ClientLayout from "./ClientLayout";

export const metadata: Metadata = {
  title: {
    default: "Juanito M. Ramos II | Cloud Engineer",
    template: "%s | Juanito M. Ramos II",
  },
  description:
    "Senior Software Engineer specializing in backend development with Python, FastAPI, and cloud solutions.",
  keywords: [
    "Software Engineer",
    "Python Developer",
    "FastAPI",
    "GraphQL",
    "Backend Development",
    "Juanito M. Ramos II",
  ],
  authors: [{ name: "Juanito M. Ramos II" }],
  creator: "Juanito M. Ramos II",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://juanitomramosii.com",
    title: "Juanito M. Ramos II | Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in backend development with Python, FastAPI, and cloud solutions.",
    siteName: "Juanito M. Ramos II Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juanito M. Ramos II | Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in backend development with Python, FastAPI, and cloud solutions.",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ClientLayout>{children}</ClientLayout>;
}

import "./globals.css";
