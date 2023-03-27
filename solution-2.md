
# Transaction Address
https://testnet-zkevm.polygonscan.com/tx/0x5a050c418ed4660f5c94f2ec09c7e201eec3199bd2d0cf6efa753a2877d0fc4d

# Contract Address
https://testnet-zkevm.polygonscan.com/address/0x0e60975ed34dc31280053bb0c5ee8e07d6051a46

code

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";

contract ZkThon is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("zkThon", "ZKT") {}

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
```
