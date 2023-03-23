# Solution 2

## 🪴 Challenge II: Deploy an ERC20 or ERC721 Token on the zkEVM Testnet

|                  |                                                                                                                                                                                    |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Token Name       | `bb-native`                                                                                                                                                                        |
| Token Symbol     | `bbntv`                                                                                                                                                                            |
| Transaction hash | [0xc3787929e3d34d0e2b3d88ec26336bf155dcdcca66e3ef0d625b2eee96be7c12](https://explorer.public.zkevm-test.net/tx/0xc3787929e3d34d0e2b3d88ec26336bf155dcdcca66e3ef0d625b2eee96be7c12) |
| Contract address | [0xd1F91A9be1Cc816e317FE8c69f32589182B85c09](https://explorer.public.zkevm-test.net/address/0xd1F91A9be1Cc816e317FE8c69f32589182B85c09)                                            |

### CODE

```
// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor() ERC20("bb-native", "bbntv") {
        _mint(msg.sender, 1000000 * 10**decimals());
    }
}
```
