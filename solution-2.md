'''
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20FlashMint.sol";

contract Nom is ERC20, ERC20FlashMint {
    constructor() ERC20("nom", "mon") {
        _mint(msg.sender, 10 * 10 ** decimals());
    }
}
'''
