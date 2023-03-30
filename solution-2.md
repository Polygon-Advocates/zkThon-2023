Transaction link - https://testnet-zkevm.polygonscan.com/tx/0xbbdf80d77d820afc2c03f5e39baf8d386fb7d3276811af80fde17cadebf9af49

Transaction hash 0xbbdf80d77d820afc2c03f5e39baf8d386fb7d3276811af80fde17cadebf9af49
Contract address 0xd50E11C947676b7877D3079dDA8cEd3DDeEfed07




'''sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";

contract ZKthon is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("ZKthon", "ZKT") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}

'''

