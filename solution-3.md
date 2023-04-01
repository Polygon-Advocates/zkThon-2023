// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";

import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Burnable.sol";

import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";

contract GandiMoney is ERC20, ERC20Burnable, Ownable {

    constructor() ERC20("GandiMoney", "GMT") {
    
        _mint(msg.sender, 10000 * 10 ** decimals());
        
    }

    function mint(address to, uint256 amount) public onlyOwner {
    
        _mint(to, amount);
        
    }
    
}



Transaction Detail - https://testnet-zkevm.polygonscan.com/tx/0x89585a54bb1d791278a7226ad17424b37c63213e3a0def45ec85851cb44ff56b
