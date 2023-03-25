# Code
```sol
// SPDX-License-Identifier: UNLICENSE
pragma solidity ^0.8.11;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract erc20zk is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("Aadit", "AP") {
        _mint(msg.sender, 100 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
```


# Contract Address
0x56a8f0978D679b4994826CfFAb40b43a95697142


https://explorer.public.zkevm-test.net/address/0x56a8f0978D679b4994826CfFAb40b43a95697142/contracts#address-tabs

# Transaction Hash
0x0f0d147c9533c930ee482e82cd62a4c130e674ebaff36f2e94d3a8dde6a82f92


https://explorer.public.zkevm-test.net/tx/0x0f0d147c9533c930ee482e82cd62a4c130e674ebaff36f2e94d3a8dde6a82f92
