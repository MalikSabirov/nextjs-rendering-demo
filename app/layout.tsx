import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nextjs rendering demo",
  description: "Description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <nav style={{ padding: '10px', marginBottom: '20px' }}>
          <Link href="/csr" style={{marginRight: '16px'}}>CSR</Link>
          <Link href="/ssr" style={{marginRight: '16px'}}>SSR</Link>
          <Link href="/ssg" style={{marginRight: '16px'}}>SSG</Link>
          <Link href="/isr" style={{marginRight: '16px'}}>ISR</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
