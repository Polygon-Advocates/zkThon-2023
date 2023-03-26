# Code : 
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DhruvangToken is ERC20, Ownable {
    constructor() ERC20("Dhruvang Token", "DT") {
        _mint(msg.sender, 10000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}

# Contract Address : 
https://explorer.public.zkevm-test.net/address/0x4EB49ab68e639B27704D2712f63F174a26d051c4

# Transaction Hash : 

https://explorer.public.zkevm-test.net/tx/0x510d7f56b85a84c8047b8c187a7718a460991e5f169cd984ceb94e020af074e7
