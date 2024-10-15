import React from "react";
import type { Metadata } from "next";
import "@styles/globals.css";
import { Roboto } from 'next/font/google';
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import CSSBaseline from "@mui/material/CssBaseline";
import AuthProvider from "./context/AuthProvider";
import theme from "@app/theme";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: "OMS - IO",
  description: "Operations Management System - International Operations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>
        <main className="app">
          <ThemeProvider theme={theme}>
            <CSSBaseline />
            <AuthProvider>
              {children}
            </AuthProvider>
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
