Contract
https://testnet-zkevm.polygonscan.com/address/0x998d421681374bf482331d1352b1cf8a8ce3065d

Transaction
https://testnet-zkevm.polygonscan.com/tx/0x302cc1ceb2c74e4336733665d935696c86eb150c637efc754eac229ff0f9a35b

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.8.2/security/Pausable.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/draft-ERC20Permit.sol";

contract Looksprettygood is ERC20, ERC20Burnable, Pausable, Ownable, ERC20Permit {
    constructor() ERC20("looksprettygood", "LPG") ERC20Permit("looksprettygood") {
        _mint(msg.sender, 1800000 * 10 ** decimals());
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
