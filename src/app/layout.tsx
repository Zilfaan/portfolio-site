import "./globals.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Zilfaan Zaki Sulfikhan | Portfolio",
  description:
    "Developer Portfolio of Zilfaan Zaki Sulfikhan, showcasing projects, skills, and experience.",
  verification: {
    google: "tUVw69zBaATq0Yt5PYRsPB5DENUcGrkEBJb_Utwi40Y",
  },
  applicationName: "Zilfaan Portfolio",
  keywords: [
    "Zilfaan Zaki Sulfikhan",
    "Zilfaan",
    "Zaki",
    "Sulfikhan",
    "Portfolio",
    "Developer",
    "Game",
    "Computer Science",
  ],
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Zilfaan Zaki Sulfikhan" }],
  creator: "Zilfaan Zaki Sulfikhan",
  openGraph: {
    title: "Zilfaan Zaki Sulfikhan | Portfolio",
    description:
      "Developer Portfolio of Zilfaan Zaki Sulfikhan, showcasing projects, skills, and experience.",
    url: "https://zilfaan.space",
    siteName: "Zilfaan Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-950 text-gray-100 font-sans">
        <ThemeProvider disableTransitionOnChange>
          <Navbar />
          <main className="mx-auto">{children}</main>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
