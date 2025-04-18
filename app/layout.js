import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/Navbar"; // Adjust the path according to your folder structure
import Footer from "../components/Footer"; // Adjust the path according to your folder structure
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Wrap the content with Navbar and Footer */}
        <div className="flex flex-col min-h-screen">
          {/* Navbar - Appears at the top */}
          <Navbar />

          {/* Main content - This will render the pages inside */}
          <main className="flex-1">
            {children}
          </main>

          {/* Footer - Appears at the bottom */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
