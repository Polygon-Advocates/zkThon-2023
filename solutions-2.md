// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.8.2/security/Pausable.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/draft-ERC20Permit.sol";

contract Sergi is ERC20, ERC20Burnable, Pausable, Ownable, ERC20Permit {
    constructor() ERC20("Sergi", "SERG") ERC20Permit("Sergi") {
        _mint(msg.sender, 990165 * 10 ** decimals());
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


Transaction Hash:0xa71e9a0ca610dde819f0d583eb57e18bb9c49fddce3339f6065c6048625e65c5
Contract 0xba585bca65c342cc5e1a43924e313c45f73fdeb9
