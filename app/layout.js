import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yugandhara Strategic Holdings Pvt. Ltd.",
  description: "Yugandhara Strategic Holdings Pvt. Ltd.",
  ogimage: "https://res.cloudinary.com/dqbwa8i3y/image/upload/v1723978854/Yuga/logo_imcnpq.svg",
  image: "https://res.cloudinary.com/dqbwa8i3y/image/upload/v1723978854/Yuga/logo_imcnpq.svg",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-white">
      
      <body className={inter.className}>{children}</body>
    </html>
  );
}
