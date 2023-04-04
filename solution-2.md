# Solution 2

## Challenge II: Deploy an ERC20 or ERC721 Token on the zkEVM Testnet

### Contract Details
Address - 0xA607A2A31915ff27cd52871aB450047CC1c88a2b <br>
Explorer - https://explorer.public.zkevm-test.net/address/0xA607A2A31915ff27cd52871aB450047CC1c88a2b

Transaction Hash - 0x926cdcfa2f608f5a9b7456496e05b5584dee6477a805070cdef1121313d6ff9f <br>
Explorer - https://explorer.public.zkevm-test.net/tx/0x926cdcfa2f608f5a9b7456496e05b5584dee6477a805070cdef1121313d6ff9f


### Code
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TokenZK is ERC20, Ownable {
    constructor() ERC20("tokenZK", "TZK") {}

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
```
