# Solidity Code

```
// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SnowboardTechie is ERC20 {
  constructor() ERC20("SnowboardTechie", "SBT") {
    _mint(msg.sender, 1000000000000000000000000);
  }

  function payOneToken(address _sender, address _recipient) external {
    _transfer(_sender, _recipient, 1000000000000000000);
  }
}
```

Contract Address: https://explorer.public.zkevm-test.net/address/0xaB0614C1f305Cfd6Cc3A9622ceEeDb7bF59cFCEC/contracts

Trasaction Hash: https://explorer.public.zkevm-test.net/tx/0xd196778388e0fbb4a3bb276948360f07759b9875e0cbfa9751dc46637244152b
