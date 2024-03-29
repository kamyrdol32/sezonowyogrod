// Imports
import './Navbar.css';
import React, {useContext} from 'react';

import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import {NavLink} from "react-router-dom";
import {Avatar, Tooltip} from "@mui/material";
import {usernameContext} from "../App.jsx";

// Code
export default function Navbar() {

    const pages = [
        {
            name: "Galeria",
            path: "/gallery"
        },
        {
            name: "Sklep",
            path: "/shop"
        },
        {
            name: "Menu",
            path: "/menu"
        },
        {
            name: "Rezerwacja",
            path: "/reservation"
        }
    ];

    const settings = [
        {
            name: "Profil",
            path: "/profile"
        },
        {
            name: "Logout",
            path: "/logout"
        }
    ];

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const {username} = useContext(usernameContext)

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    console.log(username);
    function loginSwtich() {
        if (username === '') {
            return (
                <NavLink to="/auth" key="Auth"> <Button>Logowanie</Button></NavLink>
            )
        } else {
            return (
                <>
                    {username}
                    <Tooltip title={username}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenUserMenu}
                            color="inherit"
                        >
                            <Avatar sx={{ width: 32, height: 32 }}/>
                        </IconButton>
                    </Tooltip>
                </>
            )
        }
    }

    return (
        <>
            <AppBar position="static" style={{background: 'black'}}>
                <Container>
                    <Toolbar disableGutters>
                        <NavLink to={"/"}>
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                sx={{
                                  mr: 2,
                                  display: { xs: 'none', md: 'flex' },
                                  fontFamily: 'monospace',
                                  fontWeight: 700,
                                  letterSpacing: '.3rem',
                                  color: 'inherit',
                                  textDecoration: 'none',
                                }}
                            >
                                Sezonowy Ogród
                            </Typography>
                        </NavLink>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                            {pages.map((page) => (
                                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                                    <NavLink to={page.path}>
                                        <Typography textAlign="center">{page.name}</Typography>
                                    </NavLink>
                                </MenuItem>
                            ))}
                            </Menu>
                        </Box>

                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Sezonowy Ogród
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
                            {pages.map((page) => (
                                <NavLink to={page.path} key={page.name}>
                                    <Button
                                        key={page.name}
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        {page.name}
                                    </Button>
                                </NavLink>
                            ))}
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            {loginSwtich()}
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <NavLink to={setting.path}>
                                            <Typography textAlign="center" color={"black"}>{setting.name}</Typography>
                                        </NavLink>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}
