import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { LenisProvider } from "@/components/providers/LenisProvider";
import Navbar from "@/components/shared/Navbar";
import FloatingCTA from "@/components/shared/FloatingCTA";
import Footer from "@/components/shared/Footer";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "परिवर्तन - Interact District 3292 Conference",
  description:
    "Be The Change That Saves Tomorrow - Join us for an unforgettable conference experience",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/logo.png",
        type: "image/png",
      },
    ],
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        <LenisProvider>
          <Navbar />
          {children}
          {/* Floating CTA removed as per request */}
          <Footer />
        </LenisProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
