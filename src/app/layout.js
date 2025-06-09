import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/src/common/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
   preload: false,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
   preload: false,
});

export const metadata = {
  title: "Dr.Samkari",
  description: "Dr.SAM is website",
  icons: {
    icon: "/favicon11.ico",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
