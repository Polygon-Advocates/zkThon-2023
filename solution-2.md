Contract Address- 0xbac55efb1a2368a694397a9b4432ffd7b2759145

Transaction URL- [0xaac96e72acf5ee8759b231ec5c0baeff07e98ca5f5f603d95729e0075b9eb128](https://explorer.public.zkevm-test.net/tx/0xaac96e72acf5ee8759b231ec5c0baeff07e98ca5f5f603d95729e0075b9eb128)

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC20, ERC20Burnable, Ownable{
    
    constructor() ERC20("zkToken", "IC"){
        _mint(msg.sender, 1000000 * 10 ** decimals());//whoever deployes the contract will own all the tokens 
    }

    function mint(address to, uint256 amount) public onlyOwner{
        _mint(to, amount);
    }
}
```
