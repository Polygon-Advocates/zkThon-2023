# Contract Address
https://explorer.public.zkevm-test.net/address/0x676C9a2c2C1817A6a63b4fFa6DB0F014AE3089e5
0x676C9a2c2C1817A6a63b4fFa6DB0F014AE3089e5

# Transaction Address
https://explorer.public.zkevm-test.net/tx/0x2c3b27d64d4429948aa1951461a010eaddf251fbcbcb4e991bd5d87081af6180
0x2c3b27d64d4429948aa1951461a010eaddf251fbcbcb4e991bd5d87081af6180


'''sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";

contract ZkThon is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("zkThon", "ZTK") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
'''
