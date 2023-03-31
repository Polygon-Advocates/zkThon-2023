```sol
// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    bool internal isCreateToken = false;

    constructor() ERC20("ADARSH", "Adi") {}

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
https://explorer.public.zkevm-test.net/address/0xd15d4c5Bf45701e93c9C05Bfa552071265b5578C

# Transaction Address
https://explorer.public.zkevm-test.net/tx/0x8b0ac8032187991f515a60d91b6af8dda041eb36a07381146ec5ac4b549ccaf1
