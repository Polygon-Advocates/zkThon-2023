```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";

contract Vicelee is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("vicelee", "VE") {
        _mint(msg.sender, 11113 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
```
# Contract Address
https://testnet-zkevm.polygonscan.com/address/0xcd9dab9bcbba48cbf1020f94b2e995f24a192432

# Transaction Address
https://testnet-zkevm.polygonscan.com/tx/0x8846d5c4fc2960c83c11e3c99d0786913097fc8f3eac7d831e5f03a9cf6379e9
