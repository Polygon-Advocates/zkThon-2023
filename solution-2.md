# Contract Address
https://explorer.public.zkevm-test.net/address/0xb044c60938C5a1891cAc690c3Edc6B3eab47b47C

# Transaction Address
https://explorer.public.zkevm-test.net/tx/0x64b9309087278875da47656833c91679f11f4470c6678908fd54adfabc21c56e



```solidity
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
