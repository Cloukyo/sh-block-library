import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SH Block Library",
  description: "Private internal Elementor block library for SH Digital Marketing.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
