Contract address:- 0x68d4969efa570388f51ab2c73b069c9d4a3e1740

Transaction URL:- https://explorer.public.zkevm-test.net/tx/0x9e11dd0140ad4c5f52ea345676bddcf31ab772c74aa407b55254e530473197c9

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC20, ERC20Burnable, Ownable{
    
    constructor() ERC20("Amisha", "AMU"){
        _mint(msg.sender, 1000000 * 10 ** decimals());//whoever deployes the contract will own all the tokens 
    }

    function mint(address to, uint256 amount) public onlyOwner{
        _mint(to, amount);
    }
}
```
