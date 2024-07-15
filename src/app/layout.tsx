import type { Metadata } from "next";
import "./globals.css";
import { roboto } from "./font/font";

export const metadata: Metadata = {
  title: "TasKing",
  description: "Prioritize your world with tasks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>{children}</body>
    </html>
  );
}
