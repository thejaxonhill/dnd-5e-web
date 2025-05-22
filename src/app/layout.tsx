import "./globals.css";
import React, {ReactNode} from "react";
import {GlobalThemeProvider, Navbar} from "@/components/common";
import {Container} from "@mui/material";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
      <html lang="en">
          <body>
              <GlobalThemeProvider>
                  <Navbar/>
                  <Container>
                      {children}
                  </Container>
              </GlobalThemeProvider>
          </body>
      </html>
  );
}
