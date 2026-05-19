import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/global/navbar";
import Footer from "@/components/global/footer";



export const metadata = {
  title: "Bhagvat Pipe",
  description: "Plumbing services in Ahmedabad",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`bg-[#8a29660e]`}
    >
      <body className="">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
