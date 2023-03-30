#CONTRACT ADDRESS
https://explorer.public.zkevm-test.net/address/0x834278De6f07529bd16C21d9d0c416f469481Bc8

#Transaction Address
https://explorer.public.zkevm-test.net/tx/0x14427ef66edb9d843034fc3a0c1a07f81939f4dabb56c376a969da53fc63eb99

'''sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";

contract Zkthon is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("zkthon", "ZTK") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
'''
