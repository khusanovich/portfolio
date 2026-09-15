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
  title: "Full Stack AI Engineer | AI Integration Specialist",
  description:
    "Bringing AI innovation into real-world business solutions. Specializing in LLM-powered document intelligence, RAG systems, and production-ready AI applications.",
  openGraph: {
    type: "website",
    url: "https://fullaiengineer.com",
    title: "Full Stack AI Engineer | AI Integration Specialist",
    description:
      "Bringing AI innovation into real-world business solutions. Specializing in LLM-powered document intelligence, RAG systems, and production-ready AI applications.",
    siteName: "Asliddin Ergashev - Full AI Engineer",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Full Stack AI Engineer | AI Integration Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Full Stack AI Engineer | AI Integration Specialist",
    description:
      "Bringing AI innovation into real-world business solutions. Specializing in LLM-powered document intelligence, RAG systems, and production-ready AI applications.",
    images: ["/opengraph-image"],
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
