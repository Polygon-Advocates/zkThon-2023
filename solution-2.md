txn url =https://testnet-zkevm.polygonscan.com/tx/0x60bb1d8a952bd43c9642749373cf82906c960bf785f4d9c0aa0d2e28009b7cc1

Transaction hash 0x60bb1d8a952bd43c9642749373cf82906c960bf785f4d9c0aa0d2e28009b7cc1
Contract address 0xfa93587De0B6E7bCee8a7502F5EaC2528238fE5e






'''sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";

contract ZKthon is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("ZKthon", "ZTK") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
'''


Transaction hash 0x60bb1d8a952bd43c9642749373cf82906c960bf785f4d9c0aa0d2e28009b7cc1
Contract address 0xfa93587De0B6E7bCee8a7502F5EaC2528238fE5e
