import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LightWork",
  description: "Final Audit App by Rocky & Sean",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        
      </head>
      
      <body className={inter.className}>{children}</body>
    </html>
  );
}
