import type { Metadata } from "next";
import { Roboto, Road_Rage, Alatsi } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Container from "@/components/common/Container";
import Header from "@/components/common/Header";
// import font from "../../public/fonts/"

const jeju = localFont({
  src: "../../public/fonts/JejuMyeongjo-Regular.ttf",
  variable: "--font-jeju",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const alatsi = Alatsi({
  variable: "--font-alatsi",
  subsets: ["latin"],
  weight: "400",
});

const roadRage = Road_Rage({
  variable: "--font-road-rage",
  subsets: ["latin"],
  weight: "400",
});

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
      <body
        className={`${roboto.variable} ${roadRage.variable} ${jeju.variable} ${alatsi.variable} antialiased custom-gradient`}
      >
        <Container>
          <Header />
          {children}
        </Container>
      </body>
    </html>
  );
}
