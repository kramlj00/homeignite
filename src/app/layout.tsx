import localFont from "next/font/local";
import "./globals.css";
import MainNavigation from "@/components/main-navigation";
import Footer from "@/components/footer";
import metadataConfig from "@/lib/metadata";
import { AOSInit } from "../../aos";

const gotham = localFont({
  src: "./fonts/gotham-book.woff",
  variable: "--font-gotham",
  weight: "100 900",
});

const gothamBold = localFont({
  src: "./fonts/gotham-bold.woff",
  variable: "--font-gotham-bold",
  weight: "700",
});

const gothamMedium = localFont({
  src: "./fonts/gotham-medium.woff",
  variable: "--font-gotham-medium",
  weight: "500",
});

const gothamLight = localFont({
  src: "./fonts/gotham-light.woff",
  variable: "--font-gotham-light",
  weight: "300",
});

export const metadata = metadataConfig;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AOSInit />
      <body
        className={`${gotham.variable} ${gothamBold.variable} ${gothamMedium.variable} ${gothamLight.variable} antialiased relative`}
      >
        <MainNavigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
