# Contract Address
https://explorer.public.zkevm-test.net/address/0x6f02fA8b7EF804317827EAbdA9323127063481ea

# Transaction Address
https://explorer.public.zkevm-test.net/tx/0x68e99256d76ca4f08d3db63ec984af6bdc7062452bef7d739edb3c3b53c7ab02

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";

contract ZkThon is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("zkThon", "ZKT") {
        _mint(msg.sender, 100000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
```
