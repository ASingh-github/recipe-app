// src/components/QuickPicksBanner.js
import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Paper } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const sampleRecipes = [
    { id: 1, name: 'Chocolate Chip Cookies', image: '/path/to/cookie.jpg' },
    { id: 2, name: 'Spaghetti Bolognese', image: '/path/to/spaghetti.jpg' },
    // Add more sample recipes
];

function QuickPicksBanner() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <Paper elevation={3} style={{ height: '100%', padding: '16px' }}>
            <Typography variant="h6" align="center">Quick Picks</Typography>
            <Slider {...settings}>
                {sampleRecipes.map(recipe => (
                    <Box key={recipe.id} textAlign="center">
                        <img src={recipe.image} alt={recipe.name} style={{ width: '100%', height: 'auto' }} />
                        <Typography variant="body1">{recipe.name}</Typography>
                    </Box>
                ))}
            </Slider>
        </Paper>
    );
}

export default QuickPicksBanner;
