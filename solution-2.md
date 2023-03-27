# 🪴 Challenge II: Deploy an ERC20 or ERC721 Token on the zkEVM Testnet

```bash
# Transaction Address
https://testnet-zkevm.polygonscan.com/tx/0x65ab44f262463296c2cfaa3572ed04e57173fb9767480ef1d630d467a8f01ed4
TxHash - 0x65ab44f262463296c2cfaa3572ed04e57173fb9767480ef1d630d467a8f01ed4

# Contract Address
https://testnet-zkevm.polygonscan.com/address/0xd1347d6996895a9C85d1dF90417e84667ABC9a68
Contract Address - 0xd1347d6996895a9C85d1dF90417e84667ABC9a68
```

Code -

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";

contract zkThonToken is ERC20, Ownable {
    constructor() ERC20("zkThonToken", "zkT") {
        _mint(msg.sender, 1000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
```
