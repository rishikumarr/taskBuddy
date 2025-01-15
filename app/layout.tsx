import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Task Buddy",
  description: "Your Perfect Partner for Productivity!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}>
          <div className="min-h-svh flex flex-col items-center justify-center bg-gradient-to-b from-slate-200 to-slate-400">
            {children}
          </div>
      </body>
    </html>
  );
}
