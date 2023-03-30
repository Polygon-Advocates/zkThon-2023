```sol
// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    bool internal isCreateToken = false;

    constructor() ERC20("jazer", "jez") {}

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
https://testnet-zkevm.polygonscan.com/address/0x65b2be9e4d8a5c6cfa23b82bbbd9f0ed6368b03b

# Transaction Address
https://testnet-zkevm.polygonscan.com/tx/0xe0aa3526baf40855a5f6ba7130594bef06619b7a77b5dae0903063b35cc91f4b
