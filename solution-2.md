```bash
# Transaction Address
TxHash - 0xf54bef47d209762444949d1fe1c2a6ffe93894a4294c1e96fcdb7259d550d32e
https://testnet-zkevm.polygonscan.com/tx/0xf54bef47d209762444949d1fe1c2a6ffe93894a4294c1e96fcdb7259d550d32e

# Contract Address
Contract Address - 0x35d8574c06bc93ba12c494383de2ed533ca175d3
https://explorer.public.zkevm-test.net/address/0x35d8574c06bc93ba12c494383de2ed533ca175d3/contracts
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
