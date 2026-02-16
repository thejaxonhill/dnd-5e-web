"use client"

import {Box, Typography, IconButton, useTheme, useMediaQuery} from "@mui/material";
import {ReactNode, useState} from "react";
import AppendixSidebar from "@/components/appendix/AppendixSidebar";
import AppendixDrawer from "@/components/appendix/AppendixDrawer";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

interface AppendixLayoutClientProps {
    children: ReactNode;
    header?: ReactNode;
}

const AppendixLayoutClient = ({children, header}: AppendixLayoutClientProps) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box>
            {isMobile &&
                <Box sx={{my: 1}}>
                    <AppendixDrawer/>
                </Box>
            }
            {header}
            <Box sx={{display: 'flex'}}>
                {!isMobile && <AppendixSidebar />}
                {children}
            </Box>
        </Box>
    );
}

export default AppendixLayoutClient;
