import type { Metadata } from "next";
import "./styles/global.css";

export const metadata: Metadata = {
  title: "Dictionary",
  description: "A simple dictionary app built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
