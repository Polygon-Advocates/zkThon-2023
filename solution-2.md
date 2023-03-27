// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";

contract ZkNaina is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("zkNaina", "zkNa") {
        _mint(msg.sender, 100 * 10 ** decimals());}
function mint(address to, uint256 amount) public onlyOwner {_mint(to, amount);}}

-------------------------------------------------------------------------------

# Contract Address
https://explorer.public.zkevm-test.net/address/0x89e8F81c3E7480d0FC7F8c5d2e945f6267B60860

# Transaction Hash
https://explorer.public.zkevm-test.net/tx/0x3c733605cdb09620cd936f1c587d622bd803e71b75eca880a02079df88ff28ee
