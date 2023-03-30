contract address :- 0xf84d6ed60e30769cfa5343e955dbfa76ddd9ac40 transaction url :- https://explorer.public.zkevm-test.net/tx/0x786e462b862287f66e221f0f9b53f90b6e917375b63091b747f7d91190f8a80f
'''sol

// SPDX-License-Identifier: MIT pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol"; import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol"; import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC20, ERC20Burnable, Ownable{

constructor() ERC20("Monsij", "MD"){
    _mint(msg.sender, 1000000 * 10 ** decimals());//whoever deployes the contract will own all the tokens 
}

function mint(address to, uint256 amount) public onlyOwner{
    _mint(to, amount);
}
} '''
