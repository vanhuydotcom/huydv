import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const Layout = dynamic(() => import("@/components/layouts/basic-layout"));

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
