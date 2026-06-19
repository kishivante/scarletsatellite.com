import type { Metadata } from "next";
import { LanguageProvider } from "../context/LanguageContext";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Scarlet Satellite",
  description: "Yüksek performanslı yazılım ve uygulama geliştirme şirketi. Her şey olsun gönlüne göre.",
  alternates: {
    canonical: 'https://www.scarletsatellite.com',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          <Navbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}