import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Navbar = () => {
    return (
        <AppBar position="static" style={{ backgroundColor: '#1C1C1C' }}>
            <Toolbar>
                {/* Title */}
                <Typography variant="h6" style={{ flexGrow: 1, color: '#EAEAEA' }}>
                    Dark Pool App
                </Typography>

                {/* Page Buttons */}
                <Button color="inherit" style={{ color: '#EAEAEA', marginRight: '20px' }}>
                    Lend
                </Button>
                <Button color="inherit" style={{ color: '#EAEAEA', marginRight: '20px' }}>
                    Loan
                </Button>
                <Button color="inherit" style={{ color: '#EAEAEA', marginRight: '20px' }}>
                    Dashboard
                </Button>

                {/* Connect Wallet Button */}
                <Box ml="auto">
                    <Button
                        variant="outlined"
                        style={{ borderColor: '#00FF7F', color: '#00FF7F', marginLeft: 'auto' }}
                    >
                        Connect Wallet
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
