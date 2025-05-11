"use client";

import { Geist, Geist_Mono, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import React, {
  useState,
  cloneElement,
  ReactElement,
} from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

interface LayoutProps {
  children: ReactElement<{ setIsConnected: (val: boolean) => void }>;
}

export default function Layout({ children }: LayoutProps) {
  const [isConnected, setIsConnected] = useState(false);

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} min-h-screen flex flex-col font-sans overflow-x-hidden bg-[#0C0C0C]`}
    >
      <Navbar isConnected={isConnected} setIsConnected={setIsConnected} />
      <main className="flex-grow w-full">
        {cloneElement(children, { setIsConnected })}
      </main>
    </div>
  );
}
