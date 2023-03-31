# Contract Address
https://explorer.public.zkevm-test.net/address/0x662a316767D629041d76852a95338b0D8db15941

# Transaction Address
https://explorer.public.zkevm-test.net/tx/0x1afb28950b67ed719e03bf19ffabf8997e152700d66a02593e2c51c79227ced4


```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";

contract Daniel is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("Daniel", "Daniel") {
        _mint(msg.sender, 270918 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
```
