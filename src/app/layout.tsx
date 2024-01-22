import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({subsets: ["latin"], weight: "400"});

export const metadata: Metadata = {
  title: "Portfolio Thomas Stephan",
  description: "Portfolio Thomas Stephan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={roboto.className + " container mx-auto max-w-6xl px-4 relative"}>{children}</body>
    </html>
  );
}
