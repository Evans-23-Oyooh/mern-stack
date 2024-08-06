import { Metadata } from "next";
import "./globals.css";
import Navbar from "../../components/Navbar";
import Footer  from "../../components/Footer"; // Importing as named export

export const metadata: Metadata = {
  title: "vans-link car-renting app/vans-link softwares",
  description: "Car renting application ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
