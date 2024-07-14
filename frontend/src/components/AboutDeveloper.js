// src/components/AboutDeveloper.js
import React from 'react';
import { Typography, Container, Paper } from '@mui/material';

function AboutDeveloper() {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>About the Developer</Typography>
            <Paper elevation={3} style={{ padding: '16px', marginTop: '16px' }}>
                <Typography variant="body1">
                    Your bio here...
                </Typography>
            </Paper>
        </Container>
    );
}

export default AboutDeveloper;
