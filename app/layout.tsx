import type { Metadata } from "next";
import localFont from "next/font/local";
import { DM_Serif_Text } from "next/font/google";
import "./globals.css";
import { clsx } from "clsx";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const dmSerifText = DM_Serif_Text({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-caption",
});

export const metadata: Metadata = {
  title: "Portfolio ~ Olivier RIVIERE",
  description: "The portfolio of Olivier RIVIERE, web developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <body
        className={clsx(
          geistSans.variable,
          geistMono.variable,
          dmSerifText.variable,
          "font-sans h-full text-primary"
        )}
        style={{
          fontFamily: "'Geist Sans', 'Geist Mono', 'DM Serif Text', sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}


