Contract Address :-0xb6bd54627e9656bd0daf18f546e2ee3907ef277e 
transaction URL :-https://explorer.public.zkevm-test.net/tx/0x64abfd15200e3b26e582079e84a6bc9337305ea20594f06ab44343e41eb981f4

''' SOL

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract OurToken is ERC20, ERC20Burnable, Ownable{
    
    constructor() ERC20("Divya", "DG"){
        _mint(msg.sender, 1000000 * 10 ** decimals());//whoever deployes the contract will own all the tokens 
    }

    function mint(address to, uint256 amount) public onlyOwner{
        _mint(to, amount);
    }
}

'''
