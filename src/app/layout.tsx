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
  metadataBase: new URL("https://fullaiengineer.com"),
  title: "Asliddin Ergashev — Full AI Engineer & Developer",
  description:
    "CS/IS student at University of Bamberg and full AI engineer. Building at the intersection of academic research, AI engineering, and technical craft.",
  openGraph: {
    type: "website",
    url: "https://fullaiengineer.com",
    title: "Asliddin Ergashev — Full AI Engineer & Developer",
    description:
      "CS/IS student at University of Bamberg and full AI engineer. Building at the intersection of academic research, AI engineering, and technical craft.",
    siteName: "Asliddin Ergashev - Full AI Engineer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asliddin Ergashev — Full AI Engineer & Developer",
    description:
      "CS/IS student and full AI engineer. Building at the intersection of AI, research, and technical craft.",
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
