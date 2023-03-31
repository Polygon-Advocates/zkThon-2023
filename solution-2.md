```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/draft-ERC20Permit.sol";

contract TILT is ERC20, ERC20Burnable, Ownable, ERC20Permit {
    constructor() ERC20("TILT", "TL") ERC20Permit("TILT") {
        _mint(msg.sender, 10000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
```
TXN HASH :https://testnet-zkevm.polygonscan.com/tx/0x740615d9f76bdc456ad37c0da9d1c642b9d224d76b4ea655b0eb6bd043936d10
CONTRACT ADDRESS: https://testnet-zkevm.polygonscan.com/address/0xb0e8cdcd653fb22f5911b8f8608947df55e5bf75
