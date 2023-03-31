```sol
// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    bool internal isCreateToken = false;

    constructor() ERC20("Noderr05zkThon", "NDT") {}

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
https://explorer.public.zkevm-test.net/address/0xade8ae7385f3ac326ea420539d9245fa2e09e0b5
# Transaction Address
https://explorer.public.zkevm-test.net/tx/0x89866dd985ef20739d38b0ac9368e8cc2dbf2e8ca8757ff8cdb2c87607f709d3
