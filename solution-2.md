Conntract address:- 0x3cad66dc94b96cd89e5bb5ac687e1f281bee40a8
transaction url:- https://explorer.public.zkevm-test.net/tx/0xea83c721a2d6bea840a95de49546bb13c16f10b28ace82ca5046ef97df0caed9

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC20, ERC20Burnable, Ownable{
    
    constructor() ERC20("zaid", "ZD"){
        _mint(msg.sender, 1000000 * 10 ** decimals());//whoever deployes the contract will own all the tokens 
    }

    function mint(address to, uint256 amount) public onlyOwner{
        _mint(to, amount);
    }
}
```
