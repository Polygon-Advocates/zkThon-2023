```sol
// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    bool internal isCreateToken = false;

    constructor() ERC20("Rajkumar_zkthon", "RZK") {}

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
https://explorer.public.zkevm-test.net/address/0xFd726074892C469Bc731d854C010a6c42e5C9fA6

# Transaction Address
https://explorer.public.zkevm-test.net/tx/0x4a43b679ac32afbc265351a79279e05a33d7ca1976ba3812273a3a896e02c308
