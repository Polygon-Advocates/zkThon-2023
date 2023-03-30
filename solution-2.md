transaction url:- https://explorer.public.zkevm-test.net/tx/0x230570dac7c315483a0a316aa7fe1cb09ffc40d54d94047af6cbb19348f5c259

'''sol

// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

import "@openzeppelin/contracts/access/Ownable.sol";

contract zkOurToken is ERC20, ERC20Burnable, Ownable{
    
    constructor() ERC20("Yuvraj", "YP"){
        _mint(msg.sender, 1000000 * 10 ** decimals());//whoever deployes the contract will own all the tokens 
    }

    function mint(address to, uint256 amount) public onlyOwner{
        _mint(to, amount);
    }
}
'''
