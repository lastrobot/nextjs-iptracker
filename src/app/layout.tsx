import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import Providers from "./providers";
import ReactDOM from "react-dom";
import "./globals.css";
import "@pigment-css/react/styles.css";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IP tracker",
  description: "based on frontend mentor ip tracker challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          id="leaflet-css"
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin="anonymous"
        />
        <script
          id="leaflet-script"
          src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
          integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
          crossOrigin="anonymous"
          async
        />
      </head>
      <body className={rubik.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
