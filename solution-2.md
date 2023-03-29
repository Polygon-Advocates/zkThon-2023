# Challenge II: Deploy an ERC20 or ERC721 Token on the zkEVM Testnet

# Contract Address
https://explorer.public.zkevm-test.net/address/0x329676244AA34Bc653800253092b6c5b52497d9D

# Transaction Address
https://explorer.public.zkevm-test.net/tx/0xe8f7b1c6530723605498f85b33b1f64f499693c407e67bb5f44796b6d05c152c

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";

contract ZkThonTest is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("zkThonTest", "ZKTT") {
        _mint(msg.sender, 10000000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
```
