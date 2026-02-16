import "./globals.css";
import React, {ReactNode} from "react";
import {GlobalThemeProvider, Navbar} from "@/components/common";
import {Container} from "@mui/material";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";
import DiceRollContainer from "@/components/common/DiceRollContainer/DiceRollContainer";

const RootLayout = ({children}: Readonly<{children: ReactNode}>) => {
    return (
        <html lang="en">
        <body>
        <AppRouterCacheProvider>
        <DiceRollContainer>
            <GlobalThemeProvider>
                <Navbar/>
                <Container>
                    {children}
                </Container>
            </GlobalThemeProvider>
        </DiceRollContainer>
        </AppRouterCacheProvider>
        </body>
        </html>
    );
}

export default RootLayout
