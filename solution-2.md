# Contract Address
https://explorer.public.zkevm-test.net/address/0x5000db6322751BA6529eB1cA5b0EeaD8Be0C99Ca

# Transaction Address
https://explorer.public.zkevm-test.net/tx/0xeae2287845154c72ae33c3b73189d23f7856122e4e5cf64c8b29ee8ae4444133

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ZkThon is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("zkThon", "ZKT") {
        _mint(msg.sender, 10000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
```
