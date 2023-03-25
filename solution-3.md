# Transfer transaction of 150 BC tokens from.

```bash
# Transaction Address
https://explorer.public.zkevm-test.net/tx/0xa3d1b91a846d149dc2c3fff0c6c706cc2a62b2641b34e0e557fde0296bd7254e

# Contract Address
Contract Address - 0x26e78358391a14b515b2e1d14900B60D00f0E84d
https://explorer.public.zkevm-test.net/address/0x26e78358391a14b515b2e1d14900B60D00f0E84d/contracts
```

# Code

```// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";

/// @custom:security-contact hashtiki@outlook.com
contract BeCool is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("BeCool", "BC") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
```

