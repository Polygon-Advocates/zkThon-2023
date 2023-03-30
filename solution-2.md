```bash
# Transaction Address
TxHash - 0xf976ccd7c9518c7ba8f07a037142c262056f17b821a85b25d96baacda7460955
https://testnet-zkevm.polygonscan.com/tx/0xf976ccd7c9518c7ba8f07a037142c262056f17b821a85b25d96baacda7460955

# Contract Address
Contract Address - 0xC5a867cc1E6c39bD5E6453F1792FEB1d55FaF72C
https://explorer.public.zkevm-test.net/address/0xC5a867cc1E6c39bD5E6453F1792FEB1d55FaF72C/contracts
```

Code -

```solidity

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";

contract AVT_zkThon is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("AVT_zkThon", "AVT") {
        _mint(msg.sender, 1000000000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}

```
