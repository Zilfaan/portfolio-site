import "./globals.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

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
    <html lang="en">
      <body className="bg-gray-950 text-gray-100 font-sans">
        <Navbar />
        <main className="mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
