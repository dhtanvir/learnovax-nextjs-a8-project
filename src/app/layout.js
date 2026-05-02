import { Montserrat, Poppins, } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shard/Navbar";
import Footer from "@/components/homePage/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});


export const metadata = {
  title: " LearnovaX || Home Page",
  description: "Online Learning Platform",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${poppins.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main>
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
