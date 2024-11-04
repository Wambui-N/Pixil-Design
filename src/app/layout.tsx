import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const brule = localFont({
  src: "./fonts/Brule-Medium.otf",
  variable: "--font-brule",
  weight: "500",
});

const satoshi = localFont({
  src: [
    {
      path: "./fonts/Satoshi-Regular.otf",
      weight: "400",
    },
    {
      path: "./fonts/Satoshi-Medium.otf",
      weight: "500",
    },
    {
      path: "./fonts/Satoshi-Bold.otf",
      weight: "700",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pixil Designs",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} ${brule.variable}`}>
        {children}
      </body>
    </html>
  );
}
