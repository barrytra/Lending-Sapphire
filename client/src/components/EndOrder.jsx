import React, { useState } from 'react'
import * as rb from "react-bootstrap"
import { Button } from '@mui/material'
import ContractABI from "../ABI/abi.json"
import { useStateContext } from "../context/Index";
import { ethers } from "ethers";

const EndOrder = (props) => {
    const [showConfirmModal, setShowConfirmModal] = useState()
    const { contractAddress } = useStateContext()

    const func = async (e) => {
        e.preventDefault()
        // console.log(inputs)

        const { ethereum } = window;
        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(contractAddress, ContractABI, signer);
            try {
                await contract.repayyLoan();
            }
            catch (error) {
                console.log(error)
                alert("Transaction failed, Pls check your balance")
                return
            }
        }

        else console.log("HEERE")
    }

    return (
        <div>
            <Button
                varient='contained'
                onClick={() => setShowConfirmModal(true)}
                sx={{
                    color: '#00FF7F',
                    backgroundColor: 'transparent',
                }}
            >
                Repay Loan
            </Button>
            {showConfirmModal && <rb.Modal
                show={showConfirmModal}
                animation={true}
                backdrop="static"
                centered={true}
                onHide={() => setShowConfirmModal(false)}
            >
                <rb.Modal.Header closeButton>
                </rb.Modal.Header>
                <rb.Modal.Body>
                    <Button
                        variant={'contained'}
                        onClick={func}
                        sx={{
                            color: '#000',
                            backgroundColor: '#00FF7F',
                            marginRight: '10px',
                        }}
                    >
                        Confirm
                    </Button>
                </rb.Modal.Body>
            </rb.Modal>}

        </div>
    )
}

export default EndOrder