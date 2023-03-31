Transaction link https://testnet-zkevm.polygonscan.com/tx/0x1afb045527247af3916d800264b10854aaed3ea2d9d62ce9ea777ef392c8ab36
Transaction hash 0x1afb045527247af3916d800264b10854aaed3ea2d9d62ce9ea777ef392c8ab36
Contract address 0x78B10F76F6eF070eb9B7152e104d6a722906E3e5
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
