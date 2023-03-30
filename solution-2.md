```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ethan is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("ethan", "EN") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
```
# Contract Address
https://explorer.public.zkevm-test.net/address/0x39431F94bBdB269332BfbcD7dA375FE09F3BeFef

# Transaction Address
https://explorer.public.zkevm-test.net/tx/0x81ac20297693561d9a94e3efe7b071700df2260fb2ee95578ccb55f026fbbc36
