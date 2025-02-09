import type { Metadata } from "next";
import { Poppins } from 'next/font/google';

import '@/style/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const lato = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Macelleria Paiano",
  description: "La migliore macelleria tradizionale con carni selezionate di alta qualità",
  keywords: ["macelleria", "carne", "macelleria paiano", "prodotti locali"],
  authors: [{ name: "Macelleria Paiano" }],
  creator: "Macelleria Paiano",
  metadataBase: new URL('https://macelleriapaiano.it'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body
        className={`${lato.className} min-h-screen flex flex-col relative`}
        suppressHydrationWarning
      >
        <Header />
        <main className="flex-grow pt-14">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
