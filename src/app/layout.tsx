import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import MainNavbar from "@/components/common/main-navbar";
import PageUpButton from "@/components/common/page-up-button";
import WButton from "@/components/common/wpp-button";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import I18NClietProvider from "@/components/providers/i18n-client-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Deccore Serigrafia",
  description: "Deccore Serigrafia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <I18NClietProvider>
          <Header />
          <MainNavbar />
          {children}
          <Footer />
          <WButton />
          <PageUpButton />
        </I18NClietProvider>
      </body>
    </html>
  );
}
