// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MySWRToken is ERC20 {
   
    //Mint Token upon contract deployment, initial supply provided by contract owner
    constructor(uint256 _initialSupply) ERC20("MySWRToken", "MST") {
        _mint(msg.sender, _initialSupply);
    }
}