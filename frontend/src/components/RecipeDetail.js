// src/components/RecipeDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Typography, Container, List, ListItem, ListItemText, Paper } from '@mui/material';

function RecipeDetail() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/recipes/${id}/`)
            .then(response => setRecipe(response.data))
            .catch(error => console.error(error));
    }, [id]);

    if (!recipe) return <Typography>Loading...</Typography>;

    return (
        <Container>
            <Typography variant="h4" gutterBottom>{recipe.name}</Typography>
            <Typography variant="body1" gutterBottom>{recipe.description}</Typography>
            <Paper elevation={3} style={{ padding: '16px', marginTop: '16px' }}>
                <Typography variant="h6">Ingredients</Typography>
                <List>
                    {recipe.ingredients.map((ingredient, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={ingredient} />
                        </ListItem>
                    ))}
                </List>
            </Paper>
            <Paper elevation={3} style={{ padding: '16px', marginTop: '16px' }}>
                <Typography variant="h6">Instructions</Typography>
                <Typography variant="body1">{recipe.instructions}</Typography>
            </Paper>
        </Container>
    );
}

export default RecipeDetail;
