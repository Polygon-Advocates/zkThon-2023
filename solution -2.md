contract address:- 0x94bd8d74150b3eceef652a39039e64bf57f5aaa2

transaction url:- https://explorer.public.zkevm-test.net/tx/0xf5dab1a0459fdeb978353d39d9d820ca6b05a4e770fd52dc0595a7125db992fb

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC20, ERC20Burnable, Ownable{
    
    constructor() ERC20("yashk", "ykJ"){
        _mint(msg.sender, 1000000 * 10 ** decimals());//whoever deployes the contract will own all the tokens 
    }

    function mint(address to, uint256 amount) public onlyOwner{
        _mint(to, amount);
    }
}
```
