// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Vishwa is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("Vishwa", "VIS") {
        _mint(msg.sender, 100000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}

TXN detail - 0xfc579f9e284aa17c8b166766af57a56aac3f72e89c68f5855fff45b0a73607c5
0xe4c1190f9549dee160cf4d557d64fff44d6471a6
