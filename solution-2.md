txn url - https://testnet-zkevm.polygonscan.com/tx/0x7417d50c6f73a306598ea1ef38dcc58a36902ec77292eafbb2d30e7f8ad0a5f8

contract address 0x099b9d5F146DFD60c060d67f0272c4C61dB67e52
txn hash 0x7417d50c6f73a306598ea1ef38dcc58a36902ec77292eafbb2d30e7f8ad0a5f8


'''sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";

contract Zkthon is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("zkthon", "ZKT") {
        _mint(msg.sender, 100000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
'''




