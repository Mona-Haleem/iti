import React from 'react'
import {Typography, ImageList, ImageListItem, ImageListItemBar, useMediaQuery} from '@mui/material';


const itemData = [
    {
      img: '/assets/sofa.png',
      title: 'Ready to Ship Upholstery',
    },
    {
      img: '/assets/dining.png',
      title: 'Dining',
    },
    {
      img: '/assets/beds.png',
      title: 'Storage Beds',
    },
    {
      img: '/assets/lightning.png',
      title: 'Lightning',
    },
    {
      img: '/assets/tables.png',
      title: 'Accent Tables',
    },
    {
      img: '/assets/rugs.png',
      title: 'Rugs',
    },
    {
      img: '/assets/chair.png',
      title: 'Bar & Counter Stools',
    },
    {
      img: '/assets/stools.png',
      title: 'Accent Stools',
    },
    {
      img: '/assets/accessories.png',
      title: 'Accessories',
    },
    {
      img: '/assets/accentChair.png',
      title: 'Accent Chairs',
    },
    {
      img: '/assets/outdoor.png',
      title: 'Outdoor',
    },
    {
      img: '/assets/storage.png',
      title: 'Media & Storage',
    },
  ];
  
export default function Categories() {
  const isSmall = useMediaQuery("(max-width:600px)");
  const isMedium = useMediaQuery("(max-width:1000px)");
  const cols = isSmall ? 1 : isMedium ? 2 : 4;
  return (
    <>
    <Typography variant='button' component="h3" fontSize={30}>Shop by category</Typography>
    <ImageList cols={cols} gap={7}>
      {itemData.map((item) => (
        <ImageListItem key={item.img} sx={{padding:"30px",backgroundColor:"#FAFAFA"}}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
           <ImageListItemBar
            title={item.title}
            position="below"
            sx={{position:"relative",top:"20px",textAlign:"center"}}
          />
        </ImageListItem>
      ))}
    </ImageList>

    </>
    
  )
}


