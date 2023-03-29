Contract Address - 0x5fe651334a46d6a2cb3d7a5c0b9ee408cb8d7f73

Transaction URL - https://testnet-zkevm.polygonscan.com/tx/0xeec054232eee29f8f385e2f10853337fe70cd9f44a4b3cb340f656aedbd2c0ef

'''sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";

import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Burnable.sol";

import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";

contract OurToken is ERC20, ERC20Burnable, Ownable{
    
    constructor() ERC20("zkThon1", "ZKT1"){
        _mint(msg.sender, 1000000 * 10 ** decimals());//whoever deployes the contract will own all the tokens 
    }

    function mint(address to, uint256 amount) public onlyOwner{
        _mint(to, amount);
    }
}
'''
