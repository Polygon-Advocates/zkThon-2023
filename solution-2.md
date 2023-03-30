Contract address link - https://testnet-zkevm.polygonscan.com/tx/0xc87a988cd5f08bed73c43d060475a79d4a2c402816a5f34704f39f04a239fd29

Transaction hash - 0xc87a988cd5f08bed73c43d060475a79d4a2c402816a5f34704f39f04a239fd29

Contract address - 0x7B5750e04406a21Ad7a25D6AbED1ec184055102d


'''sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";

contract ZkThon is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("ZkThon", "ZTK") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
'''
