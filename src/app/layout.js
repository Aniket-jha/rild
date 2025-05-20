import { Inter } from "next/font/google";
import "./globals.css";
import Hotjar from "@hotjar/browser";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
 
  
  
  return (
    <html lang="en">
     
    
      <link rel="icon" href="./favicon.png" sizes="any" />
      <link
  rel="apple-touch-icon"
  href="./favicon.png"
  type="image/png"
  sizes="any"
    />
      <body className={inter.className}>{children}</body>
      
      
 
    </html>
  );
}
