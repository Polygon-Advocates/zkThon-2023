# Contract Address
https://explorer.public.zkevm-test.net/address/0xEFdDCeEE06F6D3A5A3da7041a9c70f8a5ABF33d4

# Transaction Address
https://explorer.public.zkevm-test.net/tx/0x01880be253139e94a0104f7966d0ff4a6ebee2e7d8032fe322e55e5796f51859

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";

contract Catwithsup is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("Catwithsup", "CWS") {
        _mint(msg.sender, 65000000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
```
