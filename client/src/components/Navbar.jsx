import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Signin from './wallet/Signin';
import Signup from './wallet/Signup';
import * as rb from 'react-bootstrap'


const Navbar = () => {
    const [showSignInModal, setShowSignInModal] = useState(false)
    const [showSignUpModal, setShowSignUpModal] = useState(false)
    return (
        <>
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
                            onClick={() => setShowSignInModal(true)}
                        >
                            Sign In

                        </Button>
                        <Button
                            variant="outlined"
                            style={{ borderColor: '#00FF7F', color: '#00FF7F', marginLeft: 'auto' }}
                            onClick={() => setShowSignInModal(true)}
                        >
                            Sign Up

                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <rb.Modal
                show={showSignInModal}
                animation={true}
                backdrop="static"
                centered={true}
                onHide={() => setShowSignInModal(false)}
            >
                <rb.Modal.Header closeButton>
                    <rb.Modal.Title>SignIn</rb.Modal.Title>
                </rb.Modal.Header>
                <rb.Modal.Body>
                    <Signin />
                </rb.Modal.Body>

            </rb.Modal>
            <rb.Modal
                show={showSignUpModal}
                animation={true}
                backdrop="static"
                centered={true}
                onHide={() => setShowSignUpModal(false)}
            >
                <rb.Modal.Header closeButton>
                    <rb.Modal.Title>SignUp</rb.Modal.Title>
                </rb.Modal.Header>
                <rb.Modal.Body>
                    <Signin />
                </rb.Modal.Body>

            </rb.Modal>
        </>
    );
};

export default Navbar;
