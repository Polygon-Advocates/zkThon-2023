// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/draft-ERC20Permit.sol";

contract Hop is ERC20, ERC20Burnable, Ownable, ERC20Permit {
    constructor() ERC20("Hop", "Hb") ERC20Permit("Hop") {
        _mint(msg.sender, 4444440 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
Contract 0x473dc567f2de69b781d0ba9e4acf3107d7222c4b

Hash 0x081f534151a1b08fb152c328521707f8743a821ad9ff4d744245ea6f26ced9f0

