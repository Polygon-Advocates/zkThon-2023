Deployed contract that creates 1000 XL tokens

**TXN HASH:** 0x58782f755fa7e829c0bb37410130a3a8330a86ab94d331027436981cf2e09de1

```https://explorer.public.zkevm-test.net/tx/0x58782f755fa7e829c0bb37410130a3a8330a86ab94d331027436981cf2e09de1```

**CONTRACT ADDRESS:** 0xA55f6ecaC2d79BcB6CfE48E47f89AFEccc73e7F0

```https://explorer.public.zkevm-test.net/address/0xA55f6ecaC2d79BcB6CfE48E47f89AFEccc73e7F0```



```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Snapshot.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";

contract XLToken is ERC20, ERC20Burnable, ERC20Snapshot, Ownable {
    constructor() ERC20("XLToken", "XL") {
        _mint(msg.sender, 1000 * 10 ** decimals());
    }

    function snapshot() public onlyOwner {
        _snapshot();
    }

    // The following functions are overrides required by Solidity.

    function _beforeTokenTransfer(address from, address to, uint256 amount)
        internal
        override(ERC20, ERC20Snapshot)
    {
        super._beforeTokenTransfer(from, to, amount);
    }
}
```
