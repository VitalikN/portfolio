import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

import { garamond } from "../utils/fonts";

export const metadata: Metadata = {
  title: "Web Studio",
  description: "Web Studio | Developer Vitalii Nozhenko",
  openGraph: {
    images: ["/favicon.ico"],
    type: "website",
  },
  metadataBase: new URL("http://localhost:3000"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={garamond.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
