import React, { useContext, createContext, useEffect, useState } from 'react';
import { ethers } from "ethers";
import token1ABI from '../ABI/token1abi.json'
import token2ABI from '../ABI/token2abi.json'

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    const [account, setAccount] = useState('')
    const contractAddress = '0x6c9bC906eD5371CF39D6861B1C103c3ae4102c87'
    const token1Contract = '0xA9623c34517256e29e89FD15F840dA2e78A34dCf'
    const token2Contract = '0xA5Bc167931bFAFd5FBF9c84488531300404Fc353'

    const connect = async () => {
        if (typeof window.ethereum !== "undefined") {
            const { ethereum } = window;
            try {
                await ethereum.request({ method: "eth_requestAccounts" })
            } catch (error) {
                console.log(error)
            }

            const accounts = await ethereum.request({ method: "eth_accounts" })
            console.log(accounts)
            window.location.reload(false);
        } else {
            alert("Please install MetaMask");
        }
    }

    const mintTokens = async (e) => {
        e.preventDefault()

        const { ethereum } = window;
        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            // const contract1 = new ethers.Contract(token1Contract, token1ABI, signer);
            const contract2 = new ethers.Contract(token2Contract, token2ABI, signer);

            // await contract1.mint(account, 100000)
            await contract2.mint(account, 100000)

        }

        // else console.log("HEERE")
    }

    const Address = async () => {
        const { ethereum } = window;
        if (!ethereum) {
            console.log("Make sure you have metamask!");
            return;
        } else {
            console.log("We have the ethereum object", ethereum);
        }
        const accounts = await ethereum.request({ method: "eth_accounts" });
        const chain = await window.ethereum.request({ method: "eth_chainId" });
        let chainId = chain;
        console.log("chain ID:", chain);
        console.log("global Chain Id:", chainId);
        if (accounts.length !== 0) {
            setAccount(accounts[0]);
            console.log("Found an authorized account:", accounts);

        } else {
            console.log("No authorized account found");
        }
    }

    useEffect(() => {
        Address();
        console.log(account);
    }, [])


    return (
        <StateContext.Provider
            value={{
                account,
                connect,
                contractAddress,
                token1Contract,
                token2Contract,
                mintTokens

            }}
        >
            {children}
        </StateContext.Provider>
    )
}


export const useStateContext = () => useContext(StateContext);