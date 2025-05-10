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

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} min-h-screen flex flex-col font-sans overflow-x-hidden bg-[#0C0C0C]`}
    >
      <Navbar />
      <main className="flex-grow w-full">{children}</main>
    </div>
  );
}
