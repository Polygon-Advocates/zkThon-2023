Transaction Hash - 0xddbfe0d18e7bceafa047933f7e3ecfc2c834b704e0e67a6f009abb8f98365031

Contract Address - 0x586a4bee7e8e770486f27b2209bd90b87913b76d

sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
contract OurToken is ERC20, ERC20Burnable, Ownable{
    
    constructor() ERC20("cryptoGod1122ZKThon", "ZKT"){
        _mint(msg.sender, 1000000 * 10 ** decimals());//whoever deployes the contract will own all the tokens 
    }
    function mint(address to, uint256 amount) public onlyOwner{
        _mint(to, amount);
    }
}
