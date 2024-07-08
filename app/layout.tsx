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
        <video autoPlay muted loop id="myVideo" className="absolute top-[6rem] left-0">
          <source src="light.mp4" type="video/mp4" />
        </video>
        <Header />
        {children}
      </body>
    </html>
  );
}
