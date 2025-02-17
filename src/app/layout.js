import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import RootLayout from "./RootLayout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hillborn Solutions | B2B Email Marketing List | Mailing Lists | Sales Leads",
  description:
    "Hilborn Solutions offers B2B contact data solutions for Marketing and Sales professionals across International, Healthcare, technology and Industry verticals.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
