Contract address:- 0xb0eccedab90a7749e426e2ea30167e7e300798a1
transaction url:- https://explorer.public.zkevm-test.net/tx/0x3b6fe7aa6a44b325a967c11d427565942486c130550f5f0fcd7b234fa8445520

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC20, ERC20Burnable, Ownable{
    
    constructor() ERC20("Souradyuti", "SS797"){
        _mint(msg.sender, 1000000 * 10 ** decimals());//whoever deployes the contract will own all the tokens 
    }

    function mint(address to, uint256 amount) public onlyOwner{
        _mint(to, amount);
    }
}
```
