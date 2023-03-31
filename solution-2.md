Transaction Hash - 0x768e4b903758916aa7658de876ed84d8f14e4d2cb9421aa2553e5f2d22f5277a

Contract Address - 0xa2c2384ebb16406ba866f632530b720987727255

sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
contract OurToken is ERC20, ERC20Burnable, Ownable{
    
    constructor() ERC20("adiAggarwal111", "ZKT"){
        _mint(msg.sender, 1000000 * 10 ** decimals());//whoever deployes the contract will own all the tokens 
    }
    function mint(address to, uint256 amount) public onlyOwner{
        _mint(to, amount);
    }
}
