// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token1 is ERC20 {
    uint dec = 10**18;
    constructor() ERC20("TKN1", "TKN1") {
        _mint(msg.sender, 1000000*dec);
    }
    function mint(address _addr, uint256 _amount) public {
        _mint(_addr, _amount*dec);
    }
    function burn(address _addr, uint256 _amount) public {
        _burn(_addr, _amount*dec);
    }
    function transferTokens(address _from, address _to, uint256 _amount) public{
        _transfer(_from, _to, _amount*dec);
    }
    //5000000000000000000000
}
