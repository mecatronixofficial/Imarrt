import type { Metadata } from 'next';
import { Dancing_Script, Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '500', '600','700'],
  variable: '--font-dancing',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'iMarrt – Premium Readymade Garments | Tirupur',
  description:
    'iMarrt is a retailer, exporter & supplier of premium readymade garments from Tirupur, Tamil Nadu — serving brands across 35+ countries.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${dancingScript.variable}`}>
      <body>{children}</body>
    </html>
  );
}
