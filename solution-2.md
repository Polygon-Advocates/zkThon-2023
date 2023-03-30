***sol

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.8.2/security/Pausable.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/draft-ERC20Permit.sol";

contract Andyzk is ERC20, ERC20Burnable, Pausable, Ownable, ERC20Permit {
    constructor() ERC20("Andyzk", "AZKT") ERC20Permit("Andyzk") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
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
***

***
tx hash 0x3289512b5d51065a9c342489d13ced4ca731e8eb3ec2d0a91dada0fd0cca4539
***
cnt addr 0xb9d2dc931558c87dc7f9a0fadfd4817a7aded25d
***
link https://testnet-zkevm.polygonscan.com/tx/0x3289512b5d51065a9c342489d13ced4ca731e8eb3ec2d0a91dada0fd0cca4539
***
