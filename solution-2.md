```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/draft-ERC20Permit.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Votes.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20FlashMint.sol";

contract Noderr is ERC20, ERC20Burnable, Ownable, ERC20Permit, ERC20Votes, ERC20FlashMint {
    constructor() ERC20("Noderr", "NDR") ERC20Permit("Noderr") {}

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
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
# Contract Address
https://explorer.public.zkevm-test.net/address/0x4DedA83dABE53D92768d29060BEF9d83E5a6Bf5B

# Transaction Address
https://explorer.public.zkevm-test.net/tx/0x8c6e7ce61a202d056567cb2f06f3d41ad9469306951b94e173094aa0363fa699
