'''sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Zkman is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("zkman", "ZKM") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
'''
Contract 0xfcC3E7c2757062894Ba72aE6507a26be2ccBA87d
Transaction Hash:0x2d3e31e5be022b762518eea8932ea16fbc83035f80122b459694510eb86b9496

'''
