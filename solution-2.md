# Contract Address
https://testnet-zkevm.polygonscan.com/address/0xcc6b3e4170f4f495edcd8b9a24d00252777bee70

# Transaction Address
https://testnet-zkevm.polygonscan.com/tx/0x91789b5f9a89611602303296129440f6eb74c047d516ac51ec75eab09421e41f

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";

contract Wundervall is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("Wundervall", "VALL") {
        _mint(msg.sender, 666 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
```
