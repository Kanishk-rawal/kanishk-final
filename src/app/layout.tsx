import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kanishk Rawal —  Full Stack Developer Portfolio",
  description: "High-performance scrollytelling personal portfolio website featuring smooth canvas animations, interactive 3D elements, and modern frontend architecture.",
  keywords: ["Creative Developer", "Frontend Engineer", "Next.js 14", "Scrollytelling", "Framer Motion", "WebGL", "Canvas"],
  authors: [{ name: "Kanishk Rawal" }],
  openGraph: {
    title: "Kanishk Rawal — Full Stack Developer",
    description: "High-performance scrollytelling personal portfolio website featuring smooth canvas animations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full dark antialiased`}
    >
      <body className="min-h-full bg-[#121212] text-gray-100 selection:bg-sky-500/30 selection:text-white flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
