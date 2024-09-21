import React from "react";
import { useState } from 'react';
// import ContractABI from "../ABI.json"
import { ethers } from "ethers";
import { Link } from "react-router-dom"
import "./Loan.css"
import ContractABI from "../ABI/abi.json"
import { useStateContext } from "../context/Index";



export default function Loan() {
    const [inputs, setInputs] = useState({});
    const { contractAddress, token1Contract, token2Contract, tkn1price, tkn2price } = useStateContext()
    const [isAutomaticWithdraw, setIsAutomaticWithdraw] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true); 
    const onChangeCheckBox = (e) => {
        setIsAutomaticWithdraw(e.target.checked);
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));

        // Check if the loan amount is less than 90% of the collateral
        if (name === "amount" && inputs.collateral) {
            const collateral = parseFloat(inputs.collateral);
            const loanAmount = parseFloat(value);
            if (loanAmount < 0.9 * collateral * tkn1price / tkn2price) {
                setIsButtonDisabled(false); // Enable the button
            } else {
                setIsButtonDisabled(true); // Disable the button
            }
        }

        // Also check when collateral value changes
        if (name === "collateral" && inputs.amount) {
            const collateral = parseFloat(value);
            const loanAmount = parseFloat(inputs.amount);
            if (loanAmount < 0.9 * collateral * tkn1price / tkn2price) {
                setIsButtonDisabled(false); // Enable the button
            } else {
                setIsButtonDisabled(true); // Disable the button
            }
        }
    };

    const calculatedCondition = inputs.collateral
        ? `TKN2 value <= ${(0.9 * inputs.collateral * tkn1price / tkn2price).toFixed(2)}`
        : "TKN2 value <= 0.9*(TKN1 value)*(TKN1 price)/(TKN2 price)";


    const func = async (e) => {
        e.preventDefault()
        // console.log(inputs)

        const { ethereum } = window;
        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(contractAddress, ContractABI, signer);
            try {
                await contract.getLoan(inputs.collateral, inputs.amount);
            }
            catch (error) {
                alert("Transaction failed, Pls check your balance of collateral")
                return
            }
        }

        else console.log("HEERE")
    }

    return (
        <div className="div">
            <div className="heading">Take a Loan</div>
            <div className="formDiv">
                <form className="components">
                    <label className="label">Enter your collateral (TKN 1)
                        <input
                            className="input"
                            type="number"
                            name="collateral"
                            value={inputs.collateral || ""}
                            onChange={handleChange}
                        />
                    </label>
                    <label className="label">Enter your loan amount (TKN 2)
                        <input
                            className="input"
                            type="number"
                            name="amount"
                            value={inputs.amount || ""}
                            onChange={handleChange}
                        />
                    </label>
                    <p>Tkn2 value should be less than 90%of tkn1 value </p>
                    <div className="condition-text">
                        {calculatedCondition}
                    </div>

                    <input
                        className={!isButtonDisabled ? "submit" : "disable"}
                        type="submit"
                        onClick={func}
                        value="Take Loan"
                        disabled={isButtonDisabled}  // Disable the button based on the condition
                    />
                </form>
            </div>
        </div>

    )
}