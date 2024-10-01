import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "./components/Nav";
import { LayoutTransition } from "./components/layoutTransition";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Haley Smith Portfolio",
  description: "Portfolio detailing the Frontend development work of Haley Smith",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="dark:bg-gray-900 dark:bg-gradient-to-t">
        <main className="flex min-h-screen flex-col items-center justify-between p-12 sm:p-24">
          <Nav />
          <LayoutTransition
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
          {children}
        </LayoutTransition>
          
        </main>
      </body>
    </html>
  );
}
