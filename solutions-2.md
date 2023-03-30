```sol
// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    bool internal isCreateToken = false;

    constructor() ERC20("kuzzy", "  KZY") {}

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
https://explorer.public.zkevm-test.net/address/0xbd0771a5c5f05c5ce5701389f9bf8dd4a4508abb

# Transaction Address
https://explorer.public.zkevm-test.net/tx/0x322753ffc6071df65352d3ed4081711661b485b2328225dcf7137e1866c403cb
