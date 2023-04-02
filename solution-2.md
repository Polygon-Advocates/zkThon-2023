```
Code:

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract erc20zk is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("Aditya", "aak") {
        _mint(msg.sender, 100 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
```

```
# Contract Address:
0xD0baE9100395b0AfF26dE2847d5BdcffB019B72D
https://explorer.public.zkevm-test.net/address/0xD0baE9100395b0AfF26dE2847d5BdcffB019B72D

# Transaction Hash 

https://explorer.public.zkevm-test.net/tx/0xc75de2efdb69f219c03f1b2ad63820c54bfe9190edc4d1df90341b19d3dd0b2c
```
