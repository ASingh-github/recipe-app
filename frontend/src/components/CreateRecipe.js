// src/components/CreateRecipe.js
import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography, Paper, Snackbar, Alert } from '@mui/material';

function CreateRecipe() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');

    const handleSubmit = (event) => {
        event.preventDefault();

        const newRecipe = {
            name,
            description,
            ingredients: ingredients.split(',').map(item => item.trim()),
            instructions,
        };

        axios.post('http://127.0.0.1:8000/api/recipes/', newRecipe)
            .then(response => {
                console.log('Recipe created:', response.data);
                setSnackbarMessage('Recipe created successfully!');
                setSnackbarSeverity('success');
                setSnackbarOpen(true);
                // Clear the form fields
                setName('');
                setDescription('');
                setIngredients('');
                setInstructions('');
            })
            .catch(error => {
                console.error('Error creating recipe:', error);
                setSnackbarMessage('Error creating recipe. Please try again.');
                setSnackbarSeverity('error');
                setSnackbarOpen(true);
            });
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Create New Recipe</Typography>
            <Paper elevation={3} style={{ padding: '16px', marginTop: '16px' }}>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Ingredients (comma-separated)"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Instructions"
                        value={instructions}
                        onChange={(e) => setInstructions(e.target.value)}
                        fullWidth
                        margin="normal"
                        multiline
                        rows={4}
                    />
                    <Button type="submit" variant="contained" color="primary">Create Recipe</Button>
                </form>
            </Paper>
            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Container>
    );
}

export default CreateRecipe;
