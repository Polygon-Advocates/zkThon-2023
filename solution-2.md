Contract Address - 0x5ded78ca7aff14d9d56c08b9478d0d25e0d7d54e

Transaction Hash - 0x5da8adeee920f4ec8793ecb1b25df57ce7b8e7c2cc3685a364a8886a3fe1992d



```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract OurToken is ERC20, ERC20Burnable, Ownable{
    
    constructor() ERC20("zkThon1", "ZKT1"){
        _mint(msg.sender, 1000000 * 10 ** decimals());//whoever deployes the contract will own all the tokens 
    }

    function mint(address to, uint256 amount) public onlyOwner{
        _mint(to, amount);
    }
}
```
