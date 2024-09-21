import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Signin from './wallet/Signin';
import Signup from './wallet/Signup';
import * as rb from 'react-bootstrap'
import { useStateContext } from '../context/Index';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const [showSignInModal, setShowSignInModal] = useState(false)
    const [showSignUpModal, setShowSignUpModal] = useState(false)
    const {connect, account, tkn1price, tkn2price, setTkn1price, setTkn2price} = useStateContext()
    const navigate = useNavigate()

    const displayAddress = (address) => {
        // Shorten the address for better UI display
        return `${address.slice(0, 6)}...${address.slice(-4)}`;
    };

    const tkn1priceSet = [602, 604, 600, 610, 605];
    const tkn2priceSet = [301, 304, 301, 295, 300];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Set up the interval to change token values every 2 seconds
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % tkn1priceSet.length;
                setTkn1price(tkn1priceSet[nextIndex]);
                setTkn2price(tkn2priceSet[nextIndex]);
                return nextIndex;
            });
        }, 2000);

        // Cleanup the interval when the component unmounts
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <AppBar position="static" style={{ backgroundColor: '#1C1C1C' }}>
                <Toolbar>
                    {/* Title */}
                    <Typography variant="h5" style={{ flexGrow: 1, color: '#EAEAEA', fontWeight: '600' }}>
                        Lending Sapphire
                    </Typography>
                    <Typography variant="p" style={{ flexGrow: 1, color: '#EAEAEA' }}>
                        {`TKN1: ${tkn1price}`}
                    </Typography>
                    <Typography variant="p" style={{ flexGrow: 1, color: '#EAEAEA' }}>
                        {`TKN2: ${tkn2price}`}
                    </Typography>

                    {/* Page Buttons */}
                    <Button color="inherit" style={{ color: '#EAEAEA', marginRight: '20px' }} onClick={() => navigate('lend')}>
                        Lend
                    </Button>
                    <Button color="inherit" style={{ color: '#EAEAEA', marginRight: '20px' }} onClick={() => navigate('loan')}>
                        Loan
                    </Button>
                    <Button color="inherit" style={{ color: '#EAEAEA', marginRight: '20px' }} onClick={() => navigate('')} >
                        Dashboard
                    </Button>

                    {/* Connect Wallet Button */}
                    <Box ml="auto">
                        {/* <Button
                            variant="outlined"
                            style={{ borderColor: '#00FF7F', color: '#00FF7F', marginLeft: 'auto' }}
                            onClick={() => setShowSignInModal(true)}
                        >
                            Sign In

                        </Button>
                        <Button
                            variant="outlined"
                            style={{ borderColor: '#00FF7F', color: '#00FF7F', marginLeft: 'auto' }}
                            onClick={() => setShowSignUpModal(true)}
                        >
                            Sign Up

                        </Button> */}
                        {/* <w3m-button /> */}
                        <Button
                            variant="outlined"
                            style={{ borderColor: '#00FF7F', color: '#00FF7F', marginLeft: 'auto' }}
                            onClick={connect}
                        >
                            {account === "" ? "Connect Wallet" : displayAddress(account)}
                        </Button>
                        {/* <Button
                            variant="outlined"
                            style={{ borderColor: '#00FF7F', color: '#00FF7F', marginLeft: 'auto' }}
                            onClick={mintTokens}
                        >
                            mint
                        </Button> */}
                        

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
                    {/* <Signup /> */}
                </rb.Modal.Body>

            </rb.Modal>
        </>
    );
};

export default Navbar;
