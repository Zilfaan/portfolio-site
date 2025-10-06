import "./globals.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Zilfaan Zaki | Portfolio",
  description: "Developer Portfolio of Zilfaan Zaki Sulfikhan",
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
        </ThemeProvider>
      </body>
    </html>
  );
}
