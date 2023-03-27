// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";

contract ZkNaina is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("zkNaina", "zkNa") {
        _mint(msg.sender, 100 * 10 ** decimals());
    }

  function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}

**Transaction Hash**
https://explorer.public.zkevm-test.net/tx/0xb48a01b0fa0467a1cf949afab95e20643745cf956fa31307a027a67d3e951abe
