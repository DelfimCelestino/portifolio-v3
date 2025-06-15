import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";


const space_grotest = Space_Grotesk({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Delfim Celestino | Desenvolvedor",
  description: "Portfolio de Delfim Celestino - Desenvolvedor apaixonado por criar soluções centradas no usuário",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${space_grotest.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
