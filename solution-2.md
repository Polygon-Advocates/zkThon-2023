Contract address : 0x265bad23ef82ef0caf2dc272d1eecaa78cca9347
Transaction hash : 0x178477f17ecd21ec67acbbdce27f5c149eb50b5f52240e4ca615c541473173fb

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract OurToken is ERC20, ERC20Burnable, Ownable{
    
    constructor() ERC20("natalia", "NAT"){
        _mint(msg.sender, 1000000 * 10 ** decimals());//whoever deployes the contract will own all the tokens 
    }

    function mint(address to, uint256 amount) public onlyOwner{
        _mint(to, amount);
    }
}
