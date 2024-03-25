import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dilley Andrade | Fullstack",
  description: "Created by Dilley Andrade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className='scroll-smooth scroll-py-16 scroll-behavior: smooth;'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
