// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.8.2/security/Pausable.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/draft-ERC20Permit.sol";

contract Fart5566 is ERC20, ERC20Burnable, Pausable, Ownable, ERC20Permit {
    constructor() ERC20("fart5566", "FZ") ERC20Permit("fart5566") {
        _mint(msg.sender, 300000 * 10 ** decimals());
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
Contract 0x8de23769f6a4fa4d7061a49425d307c18dfdea56

Hash 0x8c74e94bc06d9f110bb7fb4aa11e9a34029651773aa1f0de31dd79f101148479
