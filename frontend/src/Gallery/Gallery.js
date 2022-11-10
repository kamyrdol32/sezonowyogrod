// CSS
import './Gallery.css';

// Imports

import { ImageList, ImageListItem } from '@mui/material';

// Code
export default function Gallery() {
    return (
        <>
            {/* <ImageList
                sx={{ width: 500, height: 450 }}
                variant="quilted"
                cols={4}
                rowHeight={121}
            >
            {itemData.map((item) => (
            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
            <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
            />
            </ImageListItem>
            ))}
            </ImageList> */}

              <h1 sx={{mb:'100px'}}>Gallery</h1>
          

              
                    <img width={300} src="Images\jay-wennington-N_Y88TWmGwA-unsplash.jpg"/> 
                    <img width={300} src="Images\louis-hansel-CZiwTf4rfHY-unsplash.jpg"/>
              
           
                    <img width={300} src="Images\ciel-dKxGVeb3F2w-unsplash.jpg"/>
                    <img width={300} src="Images\mgg-vitchakorn-DDn9I5V1ubE-unsplash.jpg"/>
                    
              
                <img width={300} src="Images\pirata-studio-film-qt6b5042lrw-unsplash.jpg"/>
              
            
        </>
    );
}
