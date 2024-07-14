// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme, Box } from '@mui/material';
import Navbar from './components/Navbar';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import AboutDeveloper from './components/AboutDeveloper';
import CreateRecipe from './components/CreateRecipe';
import QuickPicksBanner from './components/QuickPicksBanner';
import MostUsedBanner from './components/MostUsedBanner';

function App() {
    const [darkMode, setDarkMode] = useState(false);

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
        },
    });

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <Box display="flex" height="100vh">
                    <Box width="15%" p={2}>
                        <QuickPicksBanner />
                    </Box>
                    <Box width="70%" p={2}>
                        <Routes>
                            <Route path="/" element={<RecipeList />} />
                            <Route path="/recipes/:id" element={<RecipeDetail />} />
                            <Route path="/about" element={<AboutDeveloper />} />
                            <Route path="/create" element={<CreateRecipe />} />
                        </Routes>
                    </Box>
                    <Box width="15%" p={2}>
                        <MostUsedBanner />
                    </Box>
                </Box>
            </Router>
        </ThemeProvider>
    );
}

export default App;
