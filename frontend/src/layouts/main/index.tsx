"use client";

import React from 'react';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Header from './header';

type Props = {
    children: React.ReactNode;
};

export default function AppMainLayout({ children }: Props) {
    const theme = useTheme();

    return <Container maxWidth={'xl'} sx={{
        minHeight: '100vh',
        pb: 2,
        display: 'flex',
        flexDirection: 'column',
    }}>
        <Box sx={{
            flex: 1,
            // bgcolor: alpha(theme.palette.background.default, 0.2),
            position: 'relative',
            pt: '106px',
        }}
        >
            <Header />
            {children}
        </Box>
    </Container>
}
