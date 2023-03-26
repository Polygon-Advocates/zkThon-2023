# 🪴 Challenge II: Deploy an ERC20 or ERC721 Token on the zkEVM Testnet

```bash
# Transaction Address
https://testnet-zkevm.polygonscan.com/tx/0x761babc39d769c9ce25691f5eed0c7b37ab04cfe9b826ae65202576bf545ff3f
TxHash - 0x761babc39d769c9ce25691f5eed0c7b37ab04cfe9b826ae65202576bf545ff3f

# Contract Address
https://testnet-zkevm.polygonscan.com/address/0xf90c6e4ef210f05415c9f0db42d5e92906388c06
Contract Address - 0xf90c6e4ef210f05415c9f0db42d5e92906388c06
```

Code -

```solidity

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";

contract ChadToken is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("ChadToken", "CHAD") {
        _mint(msg.sender, 1000000000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}

```