import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCategory } from '../../redux/slices/productSlice';

export default function CategoryCard({ cat }) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handelFilter = ()=>{
      dispatch(setCategory(cat.name))
      navigate(`/products/${encodeURIComponent(cat.name)}`)
    }
    return (
    <Card sx={{ position: 'relative', borderRadius: 2 }}>
      <CardActionArea onClick={handelFilter}>
        <CardMedia
          component="img"
          height="200"
          image={cat.image}
          alt={cat.name}
          sx={{height:"300px" , objectFit:"cover"}}
        />
        <CardContent>
          <Typography variant="h5" component="div" sx={{textAlign:"center"}}>
            {cat.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
