import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const WorkSans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lendsqr",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={WorkSans.className}>{children}</body>
    </html>
  );
}
