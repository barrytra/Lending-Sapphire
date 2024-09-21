// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Token1.sol";
import "./Token2.sol";
contract LendingBorrowing {

    Token1 private collateralTokenContract;  // The ERC20 token used as collateral
    Token2 private loanTokenContract;

    address private collateralTokenAddress; // The ERC20 token used as collateral
    address private loanTokenAddress;

    uint256 private interestRate;
    uint dec = 10**18;
    struct Loan {
        // address borrower;
        // address lender;
        uint256 loanAmount;
        uint256 collateralAmount;
        uint256 startTime;
        bool active;
    }

    mapping(address => Loan) public loans; // Map lender address to loan information

    constructor(address _collateralToken, address _loanToken, uint256 _interestRate) {
        collateralTokenContract = Token1(_collateralToken); // Set the token used for collateral
        loanTokenContract = Token2(_loanToken);
        interestRate = _interestRate;
        collateralTokenAddress = _collateralToken;
        loanTokenAddress = _loanToken;
    }

    //deposit into token2 pool, the loan pool
    function deposit(uint256 _amount) public {
        // loanTokenContract._mint( , _amount);
        loanTokenContract.transferTokens(msg.sender, loanTokenAddress, _amount);
    }

    function getLoan(uint256 _collateralAmount, uint256 _loanAmount) public {
        require(loanTokenContract.balanceOf(loanTokenAddress) >= _loanAmount*dec, "Insufficient liquidity");
        loanTokenContract.transferTokens(address(loanTokenAddress), msg.sender, _loanAmount);
        collateralTokenContract.transferTokens(msg.sender, address(collateralTokenAddress), _collateralAmount);
        loans[msg.sender] = Loan({
            loanAmount: _loanAmount*dec,
            collateralAmount: _collateralAmount*dec,
            startTime: block.timestamp,
            active: true
        });
    }

    function repayLoan() public{
        Loan storage l = loans[msg.sender];
        require(loans[msg.sender].active == true, "loan not active");
        uint256 repaymentAmount = l.loanAmount + (block.timestamp - l.startTime)/10;
        loanTokenContract.transferTokens(msg.sender, loanTokenAddress, repaymentAmount);
    }

    // Lender can claim collateral if borrower defaults
    function claimCollateral() public {
        Loan storage loan = loans[msg.sender];
        require(loan.active == true, "loan is still active");

        // Transfer collateral to lender
        collateralTokenContract.transferTokens(address(collateralTokenAddress), msg.sender, loan.collateralAmount);
        loan.active = false;
    }

    function autoLiquidate() public {
        loans[msg.sender].active = false;
    }
}

