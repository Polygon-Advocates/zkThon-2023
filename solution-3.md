// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";

contract Pavan is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("Pavan", "PAV") {
        _mint(msg.sender, 100000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}

TXN details - 0xb50ff370f0308207e6bebb97de2e57e8f9392e8c 
https://testnet-zkevm.polygonscan.com/tx/0x22c01a3fc7524843678f7bccb37122c20f5f4c1222c7894ffe0e2744d978ca0c
