# Code for the smart contract deployed on Polygon zkEVM Testnet
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";

contract YashZKevm is ERC20, Ownable {
    constructor() ERC20("YashZKevm", "YZK") {
        _mint(msg.sender, 10000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
```

# Contract Address
https://explorer.public.zkevm-test.net/address/0xbf1e4dcB2406551D83532E6990F1147ED9185e40

# Transaction Address
https://explorer.public.zkevm-test.net/tx/0x626b08bf0b323ad5bd1747bdc2eaf4db5dcd71a3f125ba5c3badba857be4456c