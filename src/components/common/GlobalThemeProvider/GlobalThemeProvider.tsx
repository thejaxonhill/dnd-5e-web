"use client"

import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {createContext, ReactNode, useContext, useEffect, useMemo, useState} from "react";
import {Roboto_Slab} from "next/font/google";

const robotoSlab = Roboto_Slab({
    variable: "--font-roboto-mono",
    subsets: ["latin"],
});

type ThemeMode = "light" | "dark"

interface ThemeContextType {
    mode: ThemeMode
    toggleColorMode: () => void
}

const ThemeContext = createContext<ThemeContextType>({
    mode: "light",
    toggleColorMode: () => {
    },
})

export const useThemeMode = () => useContext(ThemeContext)

// Example D&D-inspired colors
const dndRed = '#b71c1c';       // Deep red, reminiscent of D&D logo
const dndGold = '#ffd700';      // Gold, for highlights and accents
const dndParchment = '#f8f5e4'; // Light parchment background
const dndInk = '#2d2d2d';       // Dark ink for text

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: dndRed,
        },
        secondary: {
            main: dndGold,
        },
        background: {
            default: dndParchment,
            paper: '#fffefa', // Slightly off-white for cards/panels
        },
        text: {
            primary: dndInk,
            secondary: '#5c4326', // Muted brown for secondary text
        },
        divider: '#e0c68e', // Gold-tinted divider
    },
    typography: {
        fontFamily: robotoSlab.style.fontFamily, // Fantasy-inspired font
        h1: {fontWeight: 700},
        h2: {fontWeight: 700},
        h3: {fontWeight: 700},
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: dndGold,
        },
        secondary: {
            main: dndRed,
        },
        background: {
            default: '#1a1a1a', // Deep, near-black for immersion
            paper: '#23201a',   // Dark brown for cards/panels
        },
        text: {
            primary: '#fffbe6', // Parchment-like text
            secondary: '#ffd700', // Gold highlights
        },
        divider: '#3b2c14', // Dark brown divider
    },
    typography: {
        fontFamily: robotoSlab.style.fontFamily,
        h1: {fontWeight: 700},
        h2: {fontWeight: 700},
        h3: {fontWeight: 700},
    },
});

export type GlobalThemeProviderProps = {
    children: ReactNode
}

const GlobalThemeProvider = ({children}: GlobalThemeProviderProps) => {
    const [mode, setMode] = useState<ThemeMode>("light")

    useEffect(() => {
        // Load saved theme preference from localStorage
        const savedMode = localStorage.getItem("theme-mode") as ThemeMode
        if (savedMode) {
            setMode(savedMode)
        } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
            // Use system preference as fallback
            setMode("dark")
        }
    }, [])

    const colorMode = useMemo(
        () => ({
            mode,
            toggleColorMode: () => {
                const newMode = mode === "light" ? "dark" : "light"
                setMode(newMode)
                localStorage.setItem("theme-mode", newMode)
            },
        }),
        [mode],
    )

    const theme = useMemo(() => mode === 'dark' ? darkTheme : lightTheme, [mode])

    return (
        <ThemeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

export default GlobalThemeProvider