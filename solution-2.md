# Solution 2

## ERC-20 token code 

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";

contract ZkTHONToken is ERC20 {
    constructor() ERC20("zkTHONToken", "ZTHK") {
        _mint(msg.sender, 100000000 * 10 ** decimals());
    }
}
```

## Contract Address

[Contract Address : https://testnet-zkevm.polygonscan.com/address/0x0ea7bf5f7afd9f4c176f1e9083595a8e06b06454](https://testnet-zkevm.polygonscan.com/address/**0x0ea7bf5f7afd9f4c176f1e9083595a8e06b06454)

## Transaction Address

[Transaction Address : https://testnet-zkevm.polygonscan.com/tx/0xb08cc38537a9af403bbcdfbbeb3cf20119f766b7650614a75d8c21cf56f166f1](https://testnet-zkevm.polygonscan.com/tx/0xb08cc38537a9af403bbcdfbbeb3cf20119f766b7650614a75d8c21cf56f166f1)
