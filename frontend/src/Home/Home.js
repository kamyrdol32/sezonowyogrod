import * as React from 'react';
import './Home.css';
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
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';

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
      <Container>
        <Toolbar disableGutters>
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
            Sezonowy Ogród
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
      </Container>
    </AppBar>
    <div id="block">
      <h1>Sezonowy Ogród</h1>
      <Grid container direction="row" justifyContent="center" sx={{p:4}}>
          <Grid lg={3} sx={{pr:3, pt:2, pl:3, textAlign: 'justify'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque urna mi, vestibulum ut rutrum eget, lacinia a velit. Nullam hendrerit mi at diam pretium convallis. Vivamus commodo est nisi, ac semper ante vestibulum at. Quisque condimentum sed tellus at hendrerit. Aenean erat dolor, interdum eget dictum vitae, porta sit amet mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi sit amet interdum odio. Suspendisse ut massa elementum, gravida lorem ut, auctor metus. Etiam aliquet mauris ex, vel mattis mi viverra ac. Nam semper risus eu quam convallis tincidunt. Morbi rhoncus neque ligula, sit amet tempus lectus sagittis eu. Pellentesque tincidunt dapibus orci, vitae tristique mi pellentesque vel. Fusce sit amet ultrices magna. Aenean euismod id erat sed malesuada. 
          </Grid>
          <Grid>
            <ImageList>
              {photo.map((item) => (
                <ImageListItem key={item.img} sx={{width: 300}}>
                  <img
                    src={`${item.img}`}        
                    alt={item.title}        
                  />
                </ImageListItem>
              ))}
            </ImageList>  
          </Grid>
        </Grid> 
        <Grid container direction="row" justifyContent="center" sx={{backgroundColor: 'rgba(0,0,0,0.9)', color: 'white', p: 8}}>
          <Grid>
            <h3>Kontakt</h3>
            <div sx={{overflow: 'hidden', maxWidth:'100%', width:'500px' , height: '500px'}}>
              <div id="my-map-canvas" sx={{height:'100%', width:'100%', maxWidth: '100%'}}>
                <iframe sx={{height:'100%', width:'100%', border:0}} frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=Kraków,+Polska&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8">
                </iframe>
              </div>
            </div>
          </Grid>
          <Grid>
            <a href="https://www.facebook.com/"><FacebookRoundedIcon fontSize="large"/> SezonowyOgrod</a>
            <a href="https://www.instagram.com/"><InstagramIcon fontSize="large"/> SezonowyOgrod</a>
          </Grid>      
        </Grid>
    </div>
    <footer>Weronika Ścibior & Kamil Żegeń &copy; 2022</footer>
  </> 
  );   };