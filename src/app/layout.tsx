import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Debashree Ghosh | Strength & Running Coach",
  description:
    "Build Strength. Run Resilient. Structured hybrid strength and running coaching with Coach Debashree Ghosh.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-dark-950 text-zinc-100 antialiased selection:bg-rose-500 selection:text-white min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
