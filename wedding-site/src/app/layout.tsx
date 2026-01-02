import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Playfair_Display, Lato } from 'next/font/google';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-serif',
});

const lato = Lato({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata = {
  title: "Jaime & Hank's Wedding",
  description: "Join us in celebrating our special day!",
};

export default function RootLayout({
   children,
  }: {
     children: React.ReactNode; 
  }) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body className="bg-background min-h-screen flex flex-col font-sans">
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}