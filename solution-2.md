Contract Address - 0x7b000c52bf193bc82cbef591466a5e671ad027a4

Transaction Hash - 0x1ea3789e75de9efba4b3dc950fae208f2075ef946078b815c2626d338bb57557


```sol

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


```
