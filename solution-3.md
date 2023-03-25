Just performed a transfer transaction of 100 tokens from.

```bash
# Transaction Address
TxHash - 0xdc969381f0091f60d410716e423991a5e7c665fd6bc5fb8e501c2a0ec0cc4e31
https://testnet-zkevm.polygonscan.com/tx/0xdc969381f0091f60d410716e423991a5e7c665fd6bc5fb8e501c2a0ec0cc4e31

# Contract Address
Contract Address - 0xC5a867cc1E6c39bD5E6453F1792FEB1d55FaF72C
https://explorer.public.zkevm-test.net/address/0xC5a867cc1E6c39bD5E6453F1792FEB1d55FaF72C/contracts
```

Code -

```solidity

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";

contract AVT_zkThon is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("AVT_zkThon", "AVT") {
        _mint(msg.sender, 1000000000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}

```
