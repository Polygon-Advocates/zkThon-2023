# Contract Address
https://testnet-zkevm.polygonscan.com/address/0x441e036340c719366afa626463dd126d4f501d22

# Transaction Address
https://testnet-zkevm.polygonscan.com/tx/0x38e519e779ef8ddf55878759e8bd3428723ae172f1f6707b357fc00217e98d99

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.8.2/security/Pausable.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";

contract MemeTanz is ERC20, ERC20Burnable, Pausable, Ownable {
    constructor() ERC20("MemeTanz", "MTz") {}

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
