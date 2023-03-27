# Contract Address
https://explorer.public.zkevm-test.net/address/0xc9fbf4cB01ca44678e9eCe9f71Fbbc4bB104c0Eb

# Transaction Address
https://explorer.public.zkevm-test.net/tx/0xeef2da099e0c0858c1176f327c71be978ef029e2de53267068ee97a72222ca90


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
