Contract Address- 0x0a336135b9421a6f5b68cd07fd926b30eaef4139

Transaction Link URL- [0x892f83e1304b3d7cf6ff424fd3436b4cb39a6b9f4b59f43a18b372536e4083f3](https://explorer.public.zkevm-test.net/tx/0x892f83e1304b3d7cf6ff424fd3436b4cb39a6b9f4b59f43a18b372536e4083f3)

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC20, ERC20Burnable, Ownable{
    
    constructor() ERC20("zkToken", "OW"){
        _mint(msg.sender, 1000000 * 10 ** decimals());//whoever deployes the contract will own all the tokens 
    }

    function mint(address to, uint256 amount) public onlyOwner{
        _mint(to, amount);
    }
}
```
