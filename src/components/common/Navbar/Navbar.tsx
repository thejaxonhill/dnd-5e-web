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
import {navItems} from "@/ts/common";
import Link, {DarkModeSwitch} from "@/components/common";
import Image from "next/image"
import icon from "@/images/Icon2-192x192.png"

const Navbar = () => {
    const theme = useTheme()
    const isXs = useMediaQuery(theme.breakpoints.down('sm'));
    const [open, setOpen] = useState(false)

    const closeDialog = () => setOpen(false)

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
                    <DarkModeSwitch/>
                </Toolbar>
            </AppBar>
            <Toolbar/>
            <Drawer open={open} sx={{width: '100vw'}}>
                <Toolbar sx={{
                    justifyContent: isXs ? 'flex-end' : 'space-between',
                    width: isXs ? '100vw' : undefined
                }}>
                    <Link href='/' onClick={closeDialog}>
                        <Image
                            src={icon}
                            alt="Icon"
                            fill={isXs}
                            objectFit='contain'
                            style={!isXs ? {
                                width: 64,
                                height: 'auto'
                            } : undefined}
                        />
                    </Link>
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