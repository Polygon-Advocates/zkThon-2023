Transaction Hash - 0xfcd816de27b2f9f4c57044255e1bc8c90c8e2bec3b3d0643c630d03b006a1ffd

Contract Address - 0xb6983d469d62690c9b4927b26fe84d655b3de8bb

sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
contract OurToken is ERC20, ERC20Burnable, Ownable{
    
    constructor() ERC20("zkThon1", "ZKT1"){
        _mint(msg.sender, 1000000 * 10 ** decimals());//whoever deployes the contract will own all the tokens 
    }
    function mint(address to, uint256 amount) public onlyOwner{
        _mint(to, amount);
    }
}
