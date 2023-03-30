# Contract Address
https://testnet-zkevm.polygonscan.com/address/0x57f7160A5a66B0ADc5D81dB92AAA0ebeA17d4B9d

# Transaction Address
https://testnet-zkevm.polygonscan.com/tx/0x79176c019a7c76ab90866a2dc277ddb69d64ed92923a9e7f25f551b5c2720080

```// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";

contract ZKEVM is ERC20 {
    constructor() ERC20("ZKEVM", "ZK") {
        _mint(msg.sender, 8000 * 10 ** decimals());
    }
}
```
