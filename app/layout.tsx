import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "./providers/ConvexClientProvider";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VaaniQ",
  description: "Generate your podcast using AI",
  icons: {
    icon: "/icons/logo.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${manrope.className}bg-background text-foreground`}
      >
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}
