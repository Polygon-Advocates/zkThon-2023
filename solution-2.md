```sol
// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    bool internal isCreateToken = false;

    constructor() ERC20("Zkthonchallenge3", "ZC3") {}

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
https://explorer.public.zkevm-test.net/address/0x6f530235b61700d515215b95c29e4ea9be283108

# Transaction Address
https://explorer.public.zkevm-test.net/tx/0xa426a8258bcca3916dd605761e93adac2acd27286bc1c8365b3f742641653261
