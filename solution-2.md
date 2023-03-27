# Contract Address
https://explorer.public.zkevm-test.net/address/0xfA2667869AA3D813A3fe429D698bc9013011cBF8

# Transaction Address
https://explorer.public.zkevm-test.net/tx/0x8be0a27b147bedf2e95569c13e29a9bd2b8c6e9890376d82e845fcc6d6a87347

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";

contract ZkEVM is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("zkEVM", "ZEVM") {
        _mint(msg.sender, 1000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
```
