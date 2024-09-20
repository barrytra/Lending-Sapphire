import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#1C1C1C',
                color: '#EAEAEA',
                padding: '20px',
                textAlign: 'center',
                position: 'relative',
                bottom: 0,
                width: '100%',
            }}
        >
            {/* Footer Content */}
            <Typography variant="body2" style={{ marginBottom: '10px' }}>
                © 2024 Dark Pool App. All rights reserved.
            </Typography>

            {/* Links */}
            <Box>
                <Link href="/privacy-policy" color="inherit" underline="hover" sx={{ mx: 2 }}>
                    Privacy Policy
                </Link>
                <Link href="/terms" color="inherit" underline="hover" sx={{ mx: 2 }}>
                    Terms of Service
                </Link>
                <Link href="/contact" color="inherit" underline="hover" sx={{ mx: 2 }}>
                    Contact Us
                </Link>
            </Box>
        </Box>
    );
};

export default Footer;
