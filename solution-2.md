contract address :- 0x3f414a2447398cb5ebe9ad9a6cf70fbf26cc1bad
transaction url :- https://explorer.public.zkevm-test.net/tx/0xf32e36bfcf5aa9b81f5481e9e8e75d6535979123c7c5c45617a12574d8a4044e

'''sol

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC20, ERC20Burnable, Ownable{
    
    constructor() ERC20("Preetraj", "PJ"){
        _mint(msg.sender, 1000000 * 10 ** decimals());//whoever deployes the contract will own all the tokens 
    }

    function mint(address to, uint256 amount) public onlyOwner{
        _mint(to, amount);
    }
}'''
