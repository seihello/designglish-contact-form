import type { Metadata } from "next";
import { Signika_Negative } from "next/font/google";
import "./globals.css";

const inter = Signika_Negative({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Designglish Support",
  // description: "Generated by create next app",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-primary-100 text-gray-900 ${inter.className}`}>{children}</body>
    </html>
  );
}
