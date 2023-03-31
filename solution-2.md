Contract address:- 0xc4b290cefb430e384205b9b0fe5fa73bba508a9e

Transaction URL:-https://explorer.public.zkevm-test.net/tx/0xf78d626ce8158721ffe46d0a83547abc4fa7169ccaeb3a0828b9ce3fae037266

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC20, ERC20Burnable, Ownable{
    
    constructor() ERC20("Kshitj", "KS"){
        _mint(msg.sender, 1000000 * 10 ** decimals());//whoever deployes the contract will own all the tokens 
    }

    function mint(address to, uint256 amount) public onlyOwner{
        _mint(to, amount);
    }
}
```
