# Contract Address
https://testnet-zkevm.polygonscan.com/address/0x49cffb048d2e2195e25b5749f0ac985df624fc3c

# Transaction Address
https://testnet-zkevm.polygonscan.com/tx/0xb98a0138ec51cbab896db916eba72ecb7c14319aa89494483b5e9cb1e6ef94cd

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.8.2/security/Pausable.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";
contract Leon is ERC20, ERC20Burnable, Pausable, Ownable {
    constructor() ERC20("Leon", "LEO") {
        _mint(msg.sender, 7777777 * 10 ** decimals());
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
