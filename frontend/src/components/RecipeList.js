// src/components/RecipeList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Grid, Card, CardContent, CardMedia, Typography, Container, Paper } from '@mui/material';

function RecipeList() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/recipes/')
            .then(response => {
                console.log('Fetched Recipes:', response.data);
                setRecipes(response.data);
            })
            .catch(error => console.error('Error fetching recipes:', error));
    }, []);

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Recipe List</Typography>
            <Paper elevation={3} style={{ padding: '16px', marginTop: '16px' }}>
                {recipes.length === 0 ? (
                    <Typography>No recipes found</Typography>
                ) : (
                    <Grid container spacing={3}>
                        {recipes.map(recipe => (
                            <Grid item xs={12} sm={6} md={4} key={recipe.id}>
                                <Card>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={recipe.image} // Assuming 'image' is a field in the API response
                                        alt={recipe.name}
                                    />
                                    <CardContent>
                                        <Typography variant="h6" component={Link} to={`/recipes/${recipe.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                            {recipe.name}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            {recipe.description}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Cook Time: {recipe.cook_time} mins
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Difficulty: {recipe.difficulty}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Paper>
        </Container>
    );
}

export default RecipeList;
