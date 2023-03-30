contract address:- 0xa1bde2b7ea736f403835f1eb97a2269e86d0a08d
Transaction url:- https://testnet-zkevm.polygonscan.com/tx/0x8912a76e4951395a3e09790f91ce7e680fa8bd20dfdc7b4506dd5cc2f1162ec5

'''sol

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract zkOurToken is ERC20, ERC20Burnable, Ownable{
    
    constructor() ERC20("zk_thon", "ZKM"){
        _mint(msg.sender, 1000000 * 10 ** decimals());//whoever deployes the contract will own all the tokens 
    }

    function mint(address to, uint256 amount) public onlyOwner{
        _mint(to, amount);
    }
}
'''
