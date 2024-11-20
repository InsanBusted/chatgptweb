import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google'

import SessionProvider from "@/app/components/SessionProvider"
import { getServerSession } from "next-auth";
import NavMenu from "./components/NavMenu";
import { redirect } from "next/navigation";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  // Redirect jika tidak ada sesi
  if (!session || !session.user) {
    redirect("/api/auth/signin");
  }
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <SessionProvider session={session}>
          <NavMenu/>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
