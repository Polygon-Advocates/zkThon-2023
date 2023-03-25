```
Code : 
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract VirajPatva is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("Viraj Patva", "vkpatva") {
        _mint(msg.sender, 100 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
```

```bash
# Contract Address
0xb2141c288d3170c2b80e85a71582abe9f74c2d93
https://testnet-zkevm.polygonscan.com/address/0xb2141c288d3170c2b80e85a71582abe9f74c2d93

# Transaction Address
0x0c6dd1453456e6606d848c3357e6de313eadb9b9a423f79ce9c5540852846742
https://testnet-zkevm.polygonscan.com/tx/x0c6dd1453456e6606d848c3357e6de313eadb9b9a423f79ce9c5540852846742
```