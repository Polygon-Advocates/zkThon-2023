```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TestZkthon is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("testZkthon", "TZK") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
```
# Contract Address
https://explorer.public.zkevm-test.net/address/0x2861bc08205e0d151339eae69be34b485e65ef98

# Transaction Address
https://explorer.public.zkevm-test.net/tx/0xc62538c888b8ce01e9efd39550a062dfe8ea07ce5079e84c7a19408cc0c7add4
