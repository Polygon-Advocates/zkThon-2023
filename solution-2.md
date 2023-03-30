Contract address:- 0xf9a37f7dccc37dbed50872e83c900816c84db109

Transaction url:- https://explorer.public.zkevm-test.net/tx/0x76372ec7154e18daaaa501eae75d4335160ae5bda9e1c8158f0cf01d5e6a8156

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC20, ERC20Burnable, Ownable{
    
    constructor() ERC20("shell", "SHL"){
        _mint(msg.sender, 1000000 * 10 ** decimals());//whoever deployes the contract will own all the tokens 
    }

    function mint(address to, uint256 amount) public onlyOwner{
        _mint(to, amount);
    }
}
```
