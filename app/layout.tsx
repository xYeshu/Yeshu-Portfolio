"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLaptop, setIsLaptop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsLaptop(window.innerWidth >= 768); // Show only on screens ≥ 768px
    };

    handleResize(); // Check screen size on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <html lang="en">
      <link rel="icon" type="image/ico" sizes="16x16" href="/favicon.ico"></link>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>

      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        {isLaptop && <StarsCanvas />} {/* Render only if isLaptop is true */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
