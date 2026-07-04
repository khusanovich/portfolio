import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://asliddin-ergashev.com"),
  title: "Asliddin Ergashev — Student & Freelance Web Developer",
  description:
    "CS/IS student at University of Bamberg and freelance web developer. Building at the intersection of academic research and technical craft.",
  openGraph: {
    type: "website",
    url: "https://asliddin-ergashev.com",
    title: "Asliddin Ergashev — Student & Freelance Web Developer",
    description:
      "CS/IS student at University of Bamberg and freelance web developer. Building at the intersection of academic research and technical craft.",
    siteName: "Asliddin Ergashev",
  },
  twitter: {
    card: "summary",
    title: "Asliddin Ergashev — Student & Freelance Web Developer",
    description:
      "CS/IS student at University of Bamberg and freelance web developer.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} antialiased`}
    >
      <body className="bg-background text-foreground font-sans min-h-screen">
        {children}
      </body>
    </html>
  );
}
