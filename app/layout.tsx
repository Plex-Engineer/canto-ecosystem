import NavBar from "@/components/navbar/navbar";
import "./globals.scss";
import type { Metadata } from "next";
import { IBM_Plex_Mono, Silkscreen } from "next/font/google";

export const metadata: Metadata = {
  title: "Canto EDC",
  description: "Canto Directory to showcase projects in the ecosystem.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
