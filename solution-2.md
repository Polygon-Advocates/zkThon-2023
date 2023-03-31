contract address - 0xbcd08d70877fda9a8a01f4c36344d562b44ca7ee

transaction hash - 0x9adb027d5d3f5798a96a31696ed2c5729df23a153df599d4f1e48c23fa98d9e1





```sol

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC20, ERC20Burnable, Ownable{
    
    constructor() ERC20("Ankit", "AG"){
        _mint(msg.sender, 1000000 * 10 ** decimals());//whoever deployes the contract will own all the tokens 
    }

    function mint(address to, uint256 amount) public onlyOwner{
        _mint(to, amount);
    }
}




```
