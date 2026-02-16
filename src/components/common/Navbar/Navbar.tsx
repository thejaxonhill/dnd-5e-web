"use client"

import {
    AppBar,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    useMediaQuery,
    useTheme
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from "react";
import Link, {DarkModeSwitch} from "@/components/common";

const navItems = [
    {
        name: 'Appendix',
        href: '/appendix'
    },
    {
        name: 'Character Creator',
        href: '/character-creator'
    }
]

const Navbar = () => {
    const theme = useTheme()
    const isXs = useMediaQuery(theme.breakpoints.down('sm'));
    const [open, setOpen] = useState(false)

    const closeDialog = () => setOpen(false)

    return (
        <>
            <AppBar position="sticky">
                <Toolbar sx={{justifyContent: 'space-between'}}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        onClick={() => setOpen(true)}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <DarkModeSwitch/>
                </Toolbar>
            </AppBar>
            <Drawer open={open} sx={{width: '100vw'}}>
                <Toolbar sx={{
                    justifyContent: 'flex-end',
                    width: isXs ? '100vw' : undefined
                }}>
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
                <List>
                    {navItems.map(navItem =>
                        <ListItem key={navItem.href} disablePadding>
                            <ListItemButton
                                component={Link}
                                href={navItem.href}
                                onClick={closeDialog}
                                sx={{borderRadius: 3}}
                            >
                                <ListItemText sx={{textAlign: isXs ? 'center' : undefined}}>
                                    {navItem.name}
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