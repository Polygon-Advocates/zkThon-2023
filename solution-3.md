// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";

import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";

contract KILLER is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("KILLER", "KIL") {
        _mint(msg.sender, 100000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}

TXN ID-0x7e39b8a0021d63b361bdeedcd9469bfe0547918f25230ee6d24e5e33a2b131b5
0x35a9CC21b089FcF4d4d4CfD199FC9e8a58259302
