import type { Metadata } from "next";
import { Share_Tech_Mono, Space_Grotesk, VT323 } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans"
});

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display"
});

const shareTechMono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  title: "Beinganie | Learn AI, IoT & Robotics for Free",
  description:
    "Beinganie is a free educational platform to learn AI, IoT, and Robotics from beginner to engineer level with interactive labs and open-source tools."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${vt323.variable} ${shareTechMono.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
