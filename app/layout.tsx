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

const GeometricBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

    {/* Grille de points */}
    <div
      className="absolute inset-0 opacity-[0.15]"
      style={{
        backgroundImage: `radial-gradient(circle, hsl(213 95% 65% / 0.5) 1px, transparent 1px)`,
        backgroundSize: "32px 32px",
      }}
    />

    {/* Blob bleu électrique — haut droite */}
    <div
      className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.07]"
      style={{
        background: "radial-gradient(circle, hsl(213 95% 65%) 0%, transparent 70%)",
      }}
    />

    {/* Blob bleu plus froid — bas gauche */}
    <div
      className="absolute -bottom-60 -left-40 w-[500px] h-[500px] rounded-full opacity-[0.05]"
      style={{
        background: "radial-gradient(circle, hsl(222 80% 60%) 0%, transparent 70%)",
      }}
    />

    {/* Ligne horizontale décorative — séparation subtile */}
    <div className="absolute top-[35%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

  </div>
)

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
        <GeometricBackground />
        {children}
      </body>
    </html>
  );
}


