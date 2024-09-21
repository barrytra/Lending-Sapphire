import React, { useState } from 'react';
import { Box, Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useStateContext } from '../context/Index';
import EndOrder from "../components/EndOrder";
import ClaimCollateral from "../components/ClaimCollateral"

const Home = () => {
    const [activeTab, setActiveTab] = useState('lending'); // Active tab state
    const { account } = useStateContext()

    // Example data for lending and loan orders
    const lendingOrders = [
        // { id: 1, name: 'Lending Order 1', amount: '1000 USDC' },
        // { id: 2, name: 'Lending Order 2', amount: '500 DAI' },
    ];

    const loanOrders = [
        { id: 1, name: 'Loan Order 1', amount: '2000 ETH' },
        { id: 2, name: 'Loan Order 2', amount: '3000 USDT' },
    ];

    return (
        <>
            <Box
                sx={{
                    backgroundColor: '#1C1C1C',
                    color: '#EAEAEA',
                    minHeight: '75vh',
                    padding: '20px',
                }}
            >
                {account === '' ?
                    <Box>
                        <Typography variant="h2" sx={{
                            marginTop: '5rem',
                            marginBottom: '10px',
                            textAlign: 'center',
                            color: '#00FF7F'
                        }}>
                            Start Lending and Borrowing privately
                        </Typography>
                        <Typography variant="h4" sx={{ marginBottom: '10px', textAlign: 'center' }}>
                            Connect Wallet Now!
                        </Typography>
                    </Box>
                    :
                    <>

                        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                            <Button
                                variant={activeTab === 'lending' ? 'contained' : 'outlined'}
                                onClick={() => setActiveTab('lending')}
                                sx={{
                                    color: activeTab === 'lending' ? '#000' : '#00FF7F',
                                    backgroundColor: activeTab === 'lending' ? '#00FF7F' : 'transparent',
                                    marginRight: '10px',
                                }}
                            >
                                Lending Orders
                            </Button>
                            <Button
                                variant={activeTab === 'loan' ? 'contained' : 'outlined'}
                                onClick={() => setActiveTab('loan')}
                                sx={{
                                    color: activeTab === 'loan' ? '#000' : '#00FF7F',
                                    backgroundColor: activeTab === 'loan' ? '#00FF7F' : 'transparent',
                                }}
                            >
                                Loan Orders
                            </Button>
                        </Box>

                        {/* Orders Display */}
                        <Box>
                            <Typography variant="h6" sx={{ marginBottom: '10px', textAlign: 'center' }}>
                                {activeTab === 'lending' ? 'Lending Orders' : 'Loan Orders'}
                            </Typography>

                            {/* Order Table */}
                            <TableContainer component={Paper} sx={{ backgroundColor: '#2A2A2A', color: '#EAEAEA' }}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ color: '#EAEAEA' }}>Order ID</TableCell>
                                            <TableCell sx={{ color: '#EAEAEA' }}>Order Name</TableCell>
                                            <TableCell sx={{ color: '#EAEAEA' }}>Amount</TableCell>
                                            <TableCell></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {activeTab === 'lending'
                                            ? (lendingOrders.length > 0 ? lendingOrders.map((order) => (
                                                <TableRow key={order.id}>
                                                    <TableCell sx={{ color: '#EAEAEA' }}>{order.id}</TableCell>
                                                    <TableCell sx={{ color: '#EAEAEA' }}>{order.name}</TableCell>
                                                    <TableCell sx={{ color: '#EAEAEA' }}>{order.amount}</TableCell>
                                                </TableRow>
                                            ))
                                                :
                                                <Typography variant="h6" sx={{
                                                    marginBottom: '10px', textAlign: 'center'}}>
                                                    You don't have any active orders yet
                                                </Typography>
                                            )
                                            : (loanOrders.length > 0 ? loanOrders.map((order) => (
                                                <TableRow key={order.id}>
                                                    <TableCell sx={{ color: '#EAEAEA' }}>{order.id}</TableCell>
                                                    <TableCell sx={{ color: '#EAEAEA' }}>{order.name}</TableCell>
                                                    <TableCell sx={{ color: '#EAEAEA' }}>{order.amount}</TableCell>
                                                    <TableCell sx={{ textAlign: 'center' }}>
                                                        <EndOrder props={order}/>
                                                        <ClaimCollateral props={order} />
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                                :
                                                <Typography variant="h6" sx={{
                                                    marginBottom: '10px', textAlign: 'center'}}>
                                                    You don't have any active orders yet
                                                </Typography>
                                            )
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    </>}
            </Box>
        </>
    );
};

export default Home;
