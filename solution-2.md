# Contract Address
https://explorer.public.zkevm-test.net/address/0x76c788966caEf04895C191d0A883b1cE4c351d97

# Transaction Address
https://explorer.public.zkevm-test.net/tx/0xa95ec5ea1a9bd3efbb108faf00f0058d02662f923ed0e9068401f1cd03ab8172

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.8.2/security/Pausable.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/draft-ERC20Permit.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Votes.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20FlashMint.sol";

contract TEST is ERC20, ERC20Burnable, Pausable, Ownable, ERC20Permit, ERC20Votes, ERC20FlashMint {
    constructor() ERC20("TEST", "TST") ERC20Permit("TEST") {
        _mint(msg.sender, 999 * 10 ** decimals());
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

    // The following functions are overrides required by Solidity.

    function _afterTokenTransfer(address from, address to, uint256 amount)
        internal
        override(ERC20, ERC20Votes)
    {
        super._afterTokenTransfer(from, to, amount);
    }

    function _mint(address to, uint256 amount)
        internal
        override(ERC20, ERC20Votes)
    {
        super._mint(to, amount);
    }

    function _burn(address account, uint256 amount)
        internal
        override(ERC20, ERC20Votes)
    {
        super._burn(account, amount);
    }
}
```
