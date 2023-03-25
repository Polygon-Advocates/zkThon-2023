// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";

contract Sonu is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("Sonu", "SON") {
        _mint(msg.sender, 100000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}

Burned some token
https://testnet-zkevm.polygonscan.com/tx/0x24b662faba9d155d3d183ada601a5e1eeceb331704f5236911d6c2386963df67
TXN detail - 0x30a7755f65bbbe16ae33c3175023a0fe1172262a
0x24b662faba9d155d3d183ada601a5e1eeceb331704f5236911d6c2386963df67
