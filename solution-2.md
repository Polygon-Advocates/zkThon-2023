```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20FlashMint.sol";

contract TestRaju is ERC20, ERC20Burnable, Ownable, ERC20FlashMint {
    constructor() ERC20("Test Raju", "TRJ") {
        _mint(msg.sender, 100000000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
```
# Contract Address
https://explorer.public.zkevm-test.net/address/0x48e830c04bf9cd63c0d680c1b45f466ef59e4b7a

# Transaction Address
https://explorer.public.zkevm-test.net/tx/0x76e25a93bb5dc61cb5ceb93b7655ca8999ba49feeebfe251e8c621d1e48c4e71
