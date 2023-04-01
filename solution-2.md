# Solution 2

## 🪴 Challenge II: Deploy an ERC20 or ERC721 Token on the zkEVM Testnet

|                  |                                                                                                                                                                                    |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Contract address | [0x30bDD5c529E50EE573957b7a9Ac411191496506b](https://explorer.public.zkevm-test.net/address/0x30bDD5c529E50EE573957b7a9Ac411191496506b)                                            |
| Token Name       | `Happy`                                                                                                                                                                        |
| Token Symbol     | `HPY`                                                                                                                                                                            |
| Transaction hash | [0xfe037821576c10a98efe49dcbaa15c19131de1bdda1638747782d82f1d2d49c9](https://explorer.public.zkevm-test.net/tx/0xfe037821576c10a98efe49dcbaa15c19131de1bdda1638747782d82f1d2d49c9) |

### CODE
```
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Happy is ERC20 {
    constructor() ERC20("Happy", "HPY") {
        _mint(msg.sender, 21000000 * 10 ** decimals());
    }
}
```