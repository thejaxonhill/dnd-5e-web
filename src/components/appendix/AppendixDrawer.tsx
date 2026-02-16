"use client"

import {Box, Button, Drawer, IconButton, Typography} from "@mui/material";
import AppendixSidebar from "@/components/appendix/AppendixSidebar";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import {useState} from "react";

const AppendixDrawer = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <>

            <Button startIcon={<MenuOpenIcon />} onClick={handleDrawerToggle}>
                Appendix Menu
            </Button>
            <Drawer
                variant="temporary"
                anchor="left"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: 280,
                    },
                }}
            >
                <Box sx={{
                    p: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottom: 1,
                    borderColor: 'divider',
                    bgcolor: 'background.paper'
                }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        Appendix
                    </Typography>
                    <IconButton onClick={handleDrawerToggle} size="small">
                        <MenuOpenIcon sx={{ transform: 'rotate(180deg)' }} />
                    </IconButton>
                </Box>
                <AppendixSidebar isMobile onItemClick={handleDrawerToggle} sx={{ width: '100%', height: '100%' }} />
            </Drawer>
        </>

    );
};

export default AppendixDrawer;
