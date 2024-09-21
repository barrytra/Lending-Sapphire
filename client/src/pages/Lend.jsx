import React from "react";
import { useState } from 'react';
// import ContractABI from "../ABI.json"
import { ethers } from "ethers";
import { Link } from "react-router-dom"
import "./Lend.css"
import ContractABI from "../ABI/abi.json"
import { useStateContext } from "../context/Index";

export default function Lend() {
    const [inputs, setInputs] = useState({});
    const { contractAddress, token1Contract, token2Contract } = useStateContext()
    const [isAutomaticWithdraw, setIsAutomaticWithdraw] = useState(false);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const func = async (e) => {
        e.preventDefault()
        // console.log(inputs)

        const { ethereum } = window;
        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(contractAddress, ContractABI, signer);
            try{
            await contract.deposit(inputs.amount);
            }
            catch(error){
                alert("Transaction failed, Pls check your balance")
                return
            }
        }

        else console.log("HEERE")
    }

    return (
        <div className="div">
            <div className="heading">Lend your tokens</div>
            <div className="formDiv">
                <form className="components">
                    <label className="label">enter the Amount to lend:
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
                    <p>Note: You will get interest at 4% PA</p>

                    <input className="submit" type="submit" onClick={func} value="Lend" />
                </form>
            </div>
        </div>

    )
}