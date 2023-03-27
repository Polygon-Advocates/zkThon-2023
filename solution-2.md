# Transaction Address
https://explorer.public.zkevm-test.net/tx/0x58b3f99007a18021f6cb2d443307ee3bb07b5a392d7c91eb3e1939a7e7cbe82e

# Contract Address
https://explorer.public.zkevm-test.net/address/0x92822aB983617F30c9d2FC4C4f015C2D8B8A0269

code-


```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ZkThon is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("zkThon", "ZKT") {
        _mint(msg.sender, 100000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
```
