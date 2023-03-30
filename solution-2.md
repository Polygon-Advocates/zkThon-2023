// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.8.2/security/Pausable.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/draft-ERC20Permit.sol";

contract K224kk26 is ERC20, ERC20Burnable, Pausable, Ownable, ERC20Permit {
    constructor() ERC20("k224kk26", "KZ") ERC20Permit("k224kk26") {
        _mint(msg.sender, 100000 * 10 ** decimals());
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
 
 contract 0xa398df340f43ad9eafe7543fa31d89c4dc5eaa47
 
 hash 0x7140ade1c0fa1f8d1d79d408aa820956e12219495e86decf5fdbb4d719e896e5
