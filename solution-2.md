// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    bool internal isCreateToken = false;

    constructor() ERC20("JED", "JD") {}

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
txn hash :https://testnet-zkevm.polygonscan.com/tx/0xc2b8ad513eae6732e8c0062692f7315f5521cfd393670ae10bfddfb37eb5ee96

contract address: https://testnet-zkevm.polygonscan.com/address/0x8f73fd8636da02f4fd042a6b0a2e595c35ca3492
