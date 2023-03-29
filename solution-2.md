Contract address:- 0x1c371c9fad14498d600dca074638d50a54d9f55b

Transaction url:- [0xeca28d1a88163be3b23850b2b4dbcef11de4b8d501258773a0065e88c9c40fcb](https://explorer.public.zkevm-test.net/tx/0xeca28d1a88163be3b23850b2b4dbcef11de4b8d501258773a0065e88c9c40fcb)

'''sol

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

import "@openzeppelin/contracts/access/Ownable.sol";

contract zkToken is ERC20, ERC20Burnable, Ownable{
    
    constructor() ERC20("wizard", "WZD"){
        _mint(msg.sender, 1000000 * 10 ** decimals());//whoever deployes the contract will own all the tokens 
    }

    function mint(address to, uint256 amount) public onlyOwner{
        _mint(to, amount);
    }
}
'''
