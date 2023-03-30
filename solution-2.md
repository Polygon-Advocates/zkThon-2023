
# zkThon challenge-2 solution

### Deployed contract address = 0x608cfd60770ccbabb175e2c947aa6582d4cdcefb

## Block explorer URL for the contract
[https://testnet-zkevm.polygonscan.com/address/0x608cfd60770ccbabb175e2c947aa6582d4cdcefb](https://testnet-zkevm.polygonscan.com/address/0x608cfd60770ccbabb175e2c947aa6582d4cdcefb)

## Basic ERC20 token contract

```
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ZkToken is ERC20, ERC20Burnable, Pausable, Ownable {
    constructor() ERC20("zkToken", "ZTK") {
        _mint(msg.sender, 100 * 10 ** decimals());
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
