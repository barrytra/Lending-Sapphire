# PROJECT OVERVIEW

A private lending platform in the Oasis Sapphire blockchain that leverages on-chain and off-chain confidentiality to provide secure and private financial transactions without KYC. It simulates a dual-token setup for loans and collateral, with automated oracle price feeds facilitated by Runtime Off-Chain Logic (ROFL) in Trusted Execution Environments (TEEs). 

## SYSTEM DESIGN 
![system_design](https://github.com/user-attachments/assets/5e4b5b6e-3f47-43c5-8eb4-980cc94ca616)



## PROTOCOLS USED :-

### 1. OASIS: 
This project leverages the Oasis Sapphire blockchain to boost the security and efficiency of a private lending platform. Using EVM-compatible smart contracts and Runtime Off-Chain Logic (ROFL) within Trusted Execution Environments (TEEs), it enables dynamic loan pricing and auto-liquidation without traditional KYC. This approach ensures privacy and broadens access, making lending secure and user-friendly globally.

### 2. PYTH: 
We use Pyth to retrieve the prices of the tokens, and eventually, the prices are pushed on chain, from where they are queried by a Oracle.sol

## DESCRIPTION: 

### HOW SAPPHIRE BENEFITS OUR PLATFORM (SAPPHIRE + ROFL) ? 

This platform takes full advantage of the Oasis Sapphire blockchain to offer a secure environment for executing EVM compatible smart contracts with enhanced on-chain data confidentiality. This feature ensures that sensitive transaction details such as sender and receiver information are encrypted, allowing users to engage in lending and borrowing without compromising privacy. This shields them from common blockchain threats like front-running, where exposed transaction details could be misused by opportunistic observers.  

Moreover, we integrate off-chain confidentiality using ROFL, which significantly boosts out platform's integrity and security, when paired with Trusted Execution Environments (TEEs). This setup not only secures sensitive operations like real-time pricing feeds but also ensures the accuracy and integrity of these feeds, crucial for calculating loan values reliably. By automating financial processes such as loan issuance based on collateral and auto-liquidation protocols in a secure manner, out platform delivers tailored and responsive financial services that preserve the inherent privacy first ideals of blockchain technology.

### HOW DOES THE PLATFORM WORK ?

1. Dual token setup: Token1 is used as collateral by borrowers and Token2 is loan currency provided by liquidity providers. This is what borrowers receive when they take out a loan. 

2. Lending process: People who want to lend money, deposit Token2 into a lending pool and earn an interest rate of 6% for particular time periods. These deposits boost the total amount of money available in the pool, which is then used to provide loans to borrowers. 

3. Borrowing process: Borrowers secure a loan by depositing Token1 as collateral. Then they receive an amount of Token2 equivalent to 90% of their Token1's current market value. This price feed is fetched through real-time, secure price feeds from ROFL. Borrowers are charged an interest rate of 7% on the loan amount. 

4. Pricing and Valuation: The value of Token1 and Token2 is dynamically updated using data from ROFL, which gathers information form multiple off-chain sources to ensure accurate, tamper proof pricing (with the help of TEEs). This is critical for fair loan assessments. 

5. Repayment process: Borrowers agree to repay the borrowed Token2 plus the accrued interest. The total amount to be repaid is based on how long the loan has been outstanding. 

6. Auto-Liquidation: A system continuously checks the price ratio of Token1 to Token2. If the value of the collateral falls significantly, and the loan-to-value (LTV) ratio drops below a set threshold, auto-liquidation is triggered automatically. 

7. Security leverage: All price feeds are tamper proof, with the help of TEEs, and on-chain confidential transactions leveraged over Sapphire.

### WHAT REAL WORLD PROBLEM OUR PLATFORM INTENDS TO SOLVE ? 

1. Eliminates the need for personal identification through KYC, ensuring user transactions remain anonymous and secure.

2. Uses confidential smart contracts to keep transaction details private, preventing potential front-running and market manipulation.

3. Integrates real-time data feeds to dynamically adjust loan terms based on market conditions, protecting both lenders and borrowers from volatility.

4. Utilizes blockchain's inherent properties to offer a transparent and secure environment, reducing the risks of fraud and corruptio








