
Contract Address- 0x4b00f34a276d0216d7f1b06972423c26ad22387e

Transaction url-  [0x0af88fe666fcb1fc445d99eb6f3f7a3ea3ad194aa0dc9272a11e9fa15c038705](https://explorer.public.zkevm-test.net/tx/0x0af88fe666fcb1fc445d99eb6f3f7a3ea3ad194aa0dc9272a11e9fa15c038705)

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC20, ERC20Burnable, Ownable{
    
    constructor() ERC20("zkToken", "HUI"){
        _mint(msg.sender, 1000000 * 10 ** decimals());//whoever deployes the contract will own all the tokens 
    }

    function mint(address to, uint256 amount) public onlyOwner{
        _mint(to, amount);
    }
}
```
