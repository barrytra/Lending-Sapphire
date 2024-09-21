import React from "react";
import { useState } from 'react';
// import ContractABI from "../ABI.json"
import { ethers } from "ethers";
import { Link } from "react-router-dom"
import "./Loan.css"


export default function Loan() {
    const [inputs, setInputs] = useState({});

    const [isAutomaticWithdraw, setIsAutomaticWithdraw] = useState(false);
    const onChangeCheckBox = (e) => {
        setIsAutomaticWithdraw(e.target.checked);
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const contractAddress = "0x037d942fC7074Fb3d46CDDCF13BA035d0246b7BD";

    const func = async (e) => {
        e.preventDefault()
        // console.log(inputs)

        const { ethereum } = window;
        // if (ethereum) {
        //     const provider = new ethers.providers.Web3Provider(ethereum);
        //     const signer = provider.getSigner();
        //     const contract = new ethers.Contract(contractAddress, ContractABI, signer);

        //     if (isAutomaticWithdraw) {
        //         await contract.deposit(inputs.amount, inputs.withdrawAmount, 0, true);
        //     }
        //     else {
        //         await contract.deposit(inputs.amount, 0, 0, true);
        //     }

        // }

        // else console.log("HEERE")
    }

    return (
        <div className="div">
            <div className="heading">Take a Loan</div>
            <div className="formDiv">
                <form className="components">
                    <label className="label">Enter your collateral
                        <input
                            className="input"
                            type="number"
                            name="amount"
                            value={inputs.amount || ""}
                            onChange={handleChange}
                        />
                    </label>
                    <label className="label">Enter your loan amount
                        <input
                            className="input"
                            type="number"
                            name="amount"
                            value={inputs.amount || ""}
                            onChange={handleChange}
                        />
                    </label>
                    {/* <div className="div1">
                        <input type="checkbox" value={isAutomaticWithdraw} onChange={onChangeCheckBox} />
                        {(!isAutomaticWithdraw) && <label className="label" for="vehicle1">automatic withdrawal</label>}
                        {isAutomaticWithdraw && (
                            <label className="label"> Amount for automatic withdrawal(VTEST):
                                <input
                                    className="input"
                                    type="number"
                                    name="withdrawAmount"
                                    value={inputs.withdrawAmount || ""}
                                    onChange={handleChange}
                                />
                            </label>
                        )}
                    </div> */}

                    <input className="submit" type="submit" onClick={func}value="Take Loan" />
                </form>
            </div>
        </div>

    )
}