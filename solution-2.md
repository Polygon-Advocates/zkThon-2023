# Contract Address
https://testnet-zkevm.polygonscan.com/address/0x98ff6e4a5674d0a278ef2572ccbb1c6d3772a399

# Transaction Address
https://testnet-zkevm.polygonscan.com/tx/0x2018b0d0a5b843b6f7d3e90517cbfaa49a6dfbbad1040b21c9df8a642be63578


```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";

contract TestzkEVM is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("TestzkEVM", "TEVM") {
        _mint(msg.sender, 500 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
```
