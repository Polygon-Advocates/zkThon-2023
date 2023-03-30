# Contract Address
 https://testnet-zkevm.polygonscan.com/address/0xe5015802e244c780d6518a7095739089c6a12a56

 # Transaction Address
 https://testnet-zkevm.polygonscan.com/tx/0xa70c7586d61957c68ec9b386b4be8b5d5cc58fe9cc1b999a1ec1bdb465203fe4

 ```sol
 // SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.8.2/security/Pausable.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/draft-ERC20Permit.sol";

contract Montanhas is ERC20, ERC20Burnable, Pausable, Ownable, ERC20Permit {
    constructor() ERC20("montanhas", "MONT") ERC20Permit("montanhas") {
        _mint(msg.sender, 870000 * 10 ** decimals());
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
