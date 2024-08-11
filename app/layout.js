import { Inter } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/main-header/main-header";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TechWave",
  description: "Elevate your tech experience with our curated selection",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" bg-neutral-950" id= {inter.className}>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
