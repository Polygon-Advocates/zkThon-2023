### Contract Address
https://explorer.public.zkevm-test.net/address/0x138053e12269708bf11189e9fc1f6760837442d0

### Transaction Address
https://explorer.public.zkevm-test.net/tx/0xc92436643e8052e47eceba30dea819b669c8c040a8d7857c3c98e43402e84d52

## Smart Contract 
```
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Zkrypto is ERC20 {
    constructor() ERC20("Zkrypto", "ZKR") {
        _mint(msg.sender, 10000 * 10 ** decimals());
    }
}
```
