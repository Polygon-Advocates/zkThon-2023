# Contract Address
https://explorer.public.zkevm-test.net/address/0x5d2F5018D731ff35AAd1cB1cd621d3907D379AdB

# Transaction Address
https://explorer.public.zkevm-test.net/tx/0x6473979ea458b3b13220ea89b5254c218b628faae1e6825d453c5d61f386191b


```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ZkThon is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("zkThon", "ZKT") {
        _mint(msg.sender, 100000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
```
