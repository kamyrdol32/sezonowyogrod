import * as React from 'react';
import './Home.css';

import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Home() {

  const photo = [
    {
      img: 'Images/jonathan-borba-uB7q7aipU2o-unsplash.jpg',
      title: 'Hands',
    },
    {
      img: 'Images/chris-liverani-oCsaxvGCehM-unsplash.jpg',
      title: 'Restaurant',
    }, 
  ];
 
  return (
  <>
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
            <div>
              <iframe id="google_map" title="google_maps" frameborder="0" src="https://www.google.com/maps/embed/v1/search?q=Kościół+Mariacki,+plac+Mariacki,+Kraków,+Polska&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8">
              </iframe>
            </div>
          </Grid>
          <Grid>
            <a href="https://www.facebook.com/"><FacebookRoundedIcon fontSize="large"/> SezonowyOgrod</a>
            <a href="https://www.instagram.com/"><InstagramIcon fontSize="large"/> SezonowyOgrod</a>
          </Grid>      
        </Grid>
    </div>
  </> 
  );
};