import type { Metadata } from "next";
//import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./header";

//const inter = Inter({ subsets: ["latin"] });
// className={inter.className}

export const metadata: Metadata = {
  title: "Public State Advocacy",
  description: "Public State Advocacy is a builder-centric movement focused on advocacy and best practices for decentralized communities through a number of avenues, each pursued in parallel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
      

        {children}
      </body>
    </html>
  );
}
