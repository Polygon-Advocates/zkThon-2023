Contract Address :-0xd38a264838213f51029aa9cfdd1320974e35dfb9
transaction URL :-https://explorer.public.zkevm-test.net/tx/0x744b352e4cdcaf637ff8daca7a5372a2e912e8d917f2fe3a557d90d897d9c09a

'''SOL

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SainiToken is ERC20, ERC20Burnable, Ownable{
    
    constructor() ERC20("Yash", "YS"){
        _mint(msg.sender, 1000000 * 10 ** decimals());//whoever deployes the contract will own all the tokens 
    }

    function mint(address to, uint256 amount) public onlyOwner{
        _mint(to, amount);
    }
}

'''
