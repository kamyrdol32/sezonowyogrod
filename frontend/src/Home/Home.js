import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import TableFooter from '@mui/material/TableFooter';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';


export default function Home() {

  const pages = ['Galeria', 'Sklep', 'Menu','Rezerwacja'];
  const settings = ['Profile', 'Logout'];


  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  const photo = [
    {
      img: 'jonathan-borba-uB7q7aipU2o-unsplash.jpg',
      title: 'Hands',
    },
    {
      img: 'chris-liverani-oCsaxvGCehM-unsplash.jpg',
      title: 'Restaurant',
    }, 
  ];

  return (
    <>
     <AppBar position="static" style={{background: 'black'}}>
      <Box>
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
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
            LOGO
          </Typography>

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
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
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
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, mr: 2}}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/4.jpg" />
              </IconButton>
            </Tooltip>
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
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
    <Box sx={{mt: 7, mr: 5, ml: 5}}>
    <Grid container spacing={2}>
        <Grid xs={4} sx={{p: 4}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque urna mi, vestibulum ut rutrum eget, lacinia a velit. Nullam hendrerit mi at diam pretium convallis. Vivamus commodo est nisi, ac semper ante vestibulum at. Quisque condimentum sed tellus at hendrerit. Aenean erat dolor, interdum eget dictum vitae, porta sit amet mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi sit amet interdum odio. Suspendisse ut massa elementum, gravida lorem ut, auctor metus. Etiam aliquet mauris ex, vel mattis mi viverra ac. Nam semper risus eu quam convallis tincidunt. Morbi rhoncus neque ligula, sit amet tempus lectus sagittis eu. Pellentesque tincidunt dapibus orci, vitae tristique mi pellentesque vel. Fusce sit amet ultrices magna. Aenean euismod id erat sed malesuada. Ut sit amet lacinia tellus. In ullamcorper sodales mauris, sit amet posuere tortor.
        </Grid>
        <Grid xs={5}>
           <ImageList >
            {photo.map((item) => (
              <ImageListItem key={item.img} sx={{width: 300,height: 300}}>
                <img
                  src={`${item.img}`}        
                  alt={item.title}
                  
                />
              </ImageListItem>
            ))}
          </ImageList>  
        </Grid>
      </Grid> 
    </Box>
      
  </> 
  );
  };
  
