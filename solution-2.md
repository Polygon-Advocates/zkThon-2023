# Contract Address : 0xa4CC3f8eb72c1Bb781Af551Ab77547B04848172f

https://explorer.public.zkevm-test.net/address/0xa4CC3f8eb72c1Bb781Af551Ab77547B04848172f

# Transaction Address : 0x0d79aaf63e5abecd0bedcb9f57dbe919ea42e826739c565df166e0b67476c5c6

https://explorer.public.zkevm-test.net/tx/0x0d79aaf63e5abecd0bedcb9f57dbe919ea42e826739c565df166e0b67476c5c6

Code : 

```
// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    bool internal isCreateToken = false;

    constructor() ERC20("Crizza", "CRZ") {}

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
