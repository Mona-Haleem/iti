import React, { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  Button,
  MenuItem,
  Typography,
  CircularProgress,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import axiosInstance, { serverInstance } from '../../utils/axiosInstance';
import ImgUpload from '../ImgUpload';

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload';
const CLOUDINARY_UPLOAD_PRESET = 'YOUR_UPLOAD_PRESET';

const AddProduct = () => {
  const [categories, setCategories] = useState([]);
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({});

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const data = await response.json();
        setCategories([...data,"miscellaneous"]);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    };
    fetchCategories();
  }, []);

  const onSubmit = async (data) => {
    if (!imageUrl) return alert('Please upload an image first.');

    const productData = {
      title: data.title,
      price: parseFloat(data.price),
      description: data.description,
      image: imageUrl,
      category: data.category,
      quantity: parseInt(data.quantity, 10),
    };

    try {
        const response = await axiosInstance.post('/products', JSON.stringify(productData));
        alert('Prodect added sucessfully')
        navigate(`/product`)
    } catch (error) {
      console.error('Failed to add product:', error);
    }
  };
  

  const handelImgUrl = async(img_url)=>{
    setLoading(false)
    setImageUrl(img_url)
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        maxWidth: '600px',
        mx: 'auto',
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Add New Product
      </Typography>

      <TextField
        label="Title"
        {...register('title', { required: 'Title is required' })}
        error={!!errors.title}
        helperText={errors.title?.message}
      />

      <TextField
        label="Price"
        type="number"
        {...register('price', { required: 'Price is required' })}
        error={!!errors.price}
        helperText={errors.price?.message}
      />

      <TextField
        label="Description"
        multiline
        rows={4}
        {...register('description', { required: 'Description is required' })}
        error={!!errors.description}
        helperText={errors.description?.message}
      />

      <TextField
        select
        label="Category"
        {...register('category', { required: 'Category is required' })}
        error={!!errors.category}
        helperText={errors.category?.message}
        defaultValue=""
      >
        {categories.map((cat) => (
          <MenuItem key={cat} value={cat}>
            {cat}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        label="Quantity"
        type="number"
        {...register('quantity', { required: 'Quantity is required' })}
        error={!!errors.quantity}
        helperText={errors.quantity?.message}
      />

     <ImgUpload handelImgUrl={handelImgUrl} setLoading={setLoading}/>

      {loading && <CircularProgress />}

      {imageUrl && (
        <Box>
          <Typography variant="caption">Image Preview:</Typography>
          <Box component="img" src={imageUrl} alt="Preview" sx={{ width: '100%', mt: 2 }} />
        </Box>
      )}

      <Button type="submit" variant="contained" color="primary">
        Add Product
      </Button>
    </Box>
  );
};

export default AddProduct;
