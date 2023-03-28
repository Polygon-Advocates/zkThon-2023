# Contract Address
https://testnet-zkevm.polygonscan.com/address/0xfd34f53b6879fe69279e5e657f1e632839ed4e3f

# Transaction Address
https://testnet-zkevm.polygonscan.com/tx/0xddfbb730dd63580bc8102e4bbf128df986ad952c4819143d094da4942aae2663

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.8.2/security/Pausable.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/draft-ERC20Permit.sol";

contract ZkThon is ERC20, ERC20Burnable, Pausable, Ownable, ERC20Permit {
    constructor() ERC20("zkThon", "ZKT") ERC20Permit("zkThon") {
        _mint(msg.sender, 9999 * 10 ** decimals());
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function _beforeTokenTransfer(address from, address to, uint256 amount)
        internal
        whenNotPaused
        override
    {
        super._beforeTokenTransfer(from, to, amount);
    }
}
```
