import type { Metadata } from "next";
import "@radix-ui/themes/styles.css";
import "@/styles/global.css";
import ToastProvider from "@/components/ToastProvider";

export const metadata: Metadata = {
  title: "Dictionary",
  description: "A simple dictionary app built with Next.js",
  icons: {
    icon: "/vector-webp.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <ToastProvider />
      </body>
    </html>
  );
}
