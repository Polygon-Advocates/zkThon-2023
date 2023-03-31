// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";

import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Burnable.sol";

import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";

contract Tushar is ERC20, ERC20Burnable, Ownable {

    constructor() ERC20("Tushar", "TUSHI") {
    
        _mint(msg.sender, 100000 * 10 ** decimals());
        
    }

    function mint(address to, uint256 amount) public onlyOwner {
    
        _mint(to, amount);
        
    }
}

TXN Detail - https://testnet-zkevm.polygonscan.com/tx/0x89d8559ec29224f446f5a1488b02881cb8bbbd9ced30094b35a45c230cc4aac9
