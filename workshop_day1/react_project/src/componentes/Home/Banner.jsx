import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, IconButton, Container } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const carouselItems = [
  {
    image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
    title: 'Discover the Latest Trends',
    subtitle: 'Stay ahead with our newest arrivals.',
  },
  {
    image: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
    title: 'Innovative Gadgets',
    subtitle: 'Explore cutting-edge technology products.',
  },
  {
    image: 'https://i.imgur.com/BG8J0Fj.jpg',
    title: 'Ride in Style',
    subtitle: 'Explore our collection of high-performance bicycles designed for comfort and adventure.',
  },
];

const Banner = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  return (
    <Box sx={{ position: 'relative', overflow: 'hidden', mb: 4 }}>
      {carouselItems.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: index === currentSlide ? 'block' : 'none',
            backgroundImage: `url(${item.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '80vh',
            color: '#fff',
            textAlign: 'center',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              background: 'rgba(0,0,0,0.5)',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              px: 2,
            }}
          >
            <Container>
              <Typography variant="h3" gutterBottom sx={{ color: '#fff', fontWeight: 'bold' }}>
                {item.title}
              </Typography>
              <Typography variant="h6" gutterBottom sx={{ color: '#ddd' }}>
                {item.subtitle}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate('/products')}
                sx={{ mt: 2 }}
              >
                Shop Now
              </Button>
            </Container>
          </Box>
        </Box>
      ))}

      {/* Navigation Buttons */}
      <IconButton
        onClick={handlePrev}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '20px',
          transform: 'translateY(-50%)',
          color: '#fff',
          backgroundColor: 'rgba(0,0,0,0.3)',
          '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.5)',
          },
        }}
      >
        <ArrowBackIos />
      </IconButton>
      <IconButton
        onClick={handleNext}
        sx={{
          position: 'absolute',
          top: '50%',
          right: '20px',
          transform: 'translateY(-50%)',
          color: '#fff',
          backgroundColor: 'rgba(0,0,0,0.3)',
          '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.5)',
          },
        }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default Banner;
