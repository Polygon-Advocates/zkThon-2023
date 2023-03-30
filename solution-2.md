// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol"; 
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";

contract Greyspear is ERC20, Ownable {
    constructor() ERC20("Greyspear", "GREY") {
         _mint(msg.sender, 10000 * 10 ** decimals()); 
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

}