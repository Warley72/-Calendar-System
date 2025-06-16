import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "../styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
  variable: "--font-poppins",           
})

export const metadata: Metadata = {
  title: "Agendamento",
  description: "Agenda o seu horario",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
