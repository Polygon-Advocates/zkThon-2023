Contract address - 0x2e6d93eec0f3ecb9d4b251cbc7d735aa02669a7c

Transaction URL - https://explorer.public.zkevm-test.net/tx/0x185a267e9bcceff1d06b2deda5c677a7de72780d85733e260f626d347afe43fb

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC20, ERC20Burnable, Ownable{
    
    constructor() ERC20("EssVee", "SV"){
        _mint(msg.sender, 1000000 * 10 ** decimals());//whoever deployes the contract will own all the tokens 
    }

    function mint(address to, uint256 amount) public onlyOwner{
        _mint(to, amount);
    }
}
```
