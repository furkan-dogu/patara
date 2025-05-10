import { Geist, Geist_Mono, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

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

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} min-h-screen flex flex-col font-sans overflow-x-hidden`}
    >
      <Navbar />
      <main className="text-white min-h-screen bg-[#0C0C0C] p-10">
        Ana içerik
      </main>
    </div>
  );
}
