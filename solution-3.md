// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";

contract Monk is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("Monk", "MOD") {
        _mint(msg.sender, 10000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}


TXN detail - 0xe0370d3b210b60bcfd13b18e14e44386a08af57c36e482bef6954e36420295cd
Contract add - 0x205e1522c6d3feae87aa9e4130f3b3b5a8ac0300
URL - https://testnet-zkevm.polygonscan.com/tx/0xe0370d3b210b60bcfd13b18e14e44386a08af57c36e482bef6954e36420295cd
