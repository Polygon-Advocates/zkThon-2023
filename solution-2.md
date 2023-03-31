# Contract Address
https://explorer.public.zkevm-test.net/address/0xb6013c4b4A6dd3e952Ec18cacE82E8e63A10dBb1

# Transaction Address
https://explorer.public.zkevm-test.net/tx/0x996fb61f8362bd3bbab9aaeefcd039f38c132e6e4bc23d9b5c40106135ab6480

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ZkEVM is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("zkEVM", "ZKE") {
        _mint(msg.sender, 21000000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
```
