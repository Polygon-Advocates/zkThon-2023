```sol
// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    bool internal isCreateToken = false;

    constructor() ERC20("Master", "MSR") {}

    function createTokens(address _recipient) external {
        require(isCreateToken == false);
        _mint(_recipient, 1000000000000000000000000);
        isCreateToken = true;
    }

    function payOneToken(address _sender, address _recipient) external {
        _transfer(_sender, _recipient, 1000000000000000000);
    }
}
```
# Contract Address
https://explorer.public.zkevm-test.net/address/0x3b90d35477299f43e57b69d08f4b5259800a6cf8

# Transaction Address
https://explorer.public.zkevm-test.net/tx/0xb30a68ee211af20b559d87135e51a61275a07c7dddf289754bb4f970acdd8e67
