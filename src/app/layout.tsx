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
  title: "Digital Udaan Technologies | Innovative Software Solutions",
  description:
    "Digital Udaan Technologies builds modern SaaS products including PrabandhOS for school management, mobile applications, and custom software solutions for businesses.",
  keywords: [
    "school management software",
    "PrabandhOS",
    "dairy management software",
    "mobile app development",
    "Digital Udaan Technologies",
    "SaaS",
    "custom software",
  ],
  openGraph: {
    title: "Digital Udaan Technologies | Innovative Software Solutions",
    description:
      "Modern SaaS products and custom software solutions for schools, dairy management, and more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0f] text-white">
        {children}
      </body>
    </html>
  );
}
