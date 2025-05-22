"use client"

import {
    AppBar,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText, Switch,
    Toolbar, useMediaQuery, useTheme
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from "react";
import {navItems} from "@/ts/common";
import Link from "next/link";

const Navbar = () => {
    const theme = useTheme()
    const isXs = useMediaQuery(theme.breakpoints.down('sm'));
    const [open, setOpen] = useState(false)

    return (
        <>
            <AppBar>
                <Toolbar sx={{justifyContent: 'space-between'}}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        onClick={() => setOpen(true)}
                    >
                       <MenuIcon/>
                    </IconButton>
                    <Switch color='secondary'/>
                </Toolbar>
            </AppBar>
            <Toolbar/>
            <Drawer open={open} sx={{width: '100vw'}}>
                <Toolbar sx={{justifyContent: 'flex-end', width: isXs ? '100vw' : undefined}}>
                    <IconButton
                        size="large"
                        edge="end"
                        color="inherit"
                        onClick={() => setOpen(false)}
                    >
                        <CloseIcon/>
                    </IconButton>
                </Toolbar>
                <Divider/>
                <List >
                    {navItems.map(navItem =>
                        <ListItem key={navItem.href} disablePadding>
                            <ListItemButton
                                component={Link}
                                href={navItem.href}
                                sx={{borderRadius: 3}}
                            >
                                <ListItemText sx={{textAlign: isXs ? 'center' : undefined}}>
                                    {navItem.title}
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                    )}
                </List>
            </Drawer>
        </>
    )
}

export default Navbar