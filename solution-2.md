contract address :- 0xbe9cd1adb35eeb79c42536a845217ef875f0d7aa
transaction url :- https://explorer.public.zkevm-test.net/tx/0xb095c7f902655c051edbd59c59399a0e6ebc6a586c456a6ff5e111378a8487e9

'''sol

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC20, ERC20Burnable, Ownable{
    
    constructor() ERC20("Amar", "AM"){
        _mint(msg.sender, 1000000 * 10 ** decimals());//whoever deployes the contract will own all the tokens 
    }

    function mint(address to, uint256 amount) public onlyOwner{
        _mint(to, amount);
    }
}
'''
