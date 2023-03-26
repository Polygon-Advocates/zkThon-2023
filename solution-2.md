# Contract Address
0x91ce6ab29c92debba553c30f5feda2cc7688c67f
## Block Explorer Url
https://explorer.public.zkevm-test.net/address/0x82A99144149373f96710Dd24be9e6C233264D616

# Transaction Address
0xfc75d5b89cc2c9d5e4bc551d17bba87096d03d4df72089e5acf9d8e3a01c0a71
## Block Explorer Url
https://explorer.public.zkevm-test.net/tx/0xfc75d5b89cc2c9d5e4bc551d17bba87096d03d4df72089e5acf9d8e3a01c0a71

<br>

# Code :
```
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ZKThoken is ERC20 {
    constructor() ERC20("ZKThoken", "ZKT") {
        _mint(msg.sender, 10000 * 10 ** decimals());
    }
}
```
