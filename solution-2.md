Contract address:- 0xf46acbbb848bbae9a0998a36afdd9395e7508f92
Transaction url:- https://explorer.public.zkevm-test.net/tx/0x666f37b2fbaeb1b918a978d00aa11788f166b66d19e74577dd7f6115a85c833d

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC20, ERC20Burnable, Ownable{
    
    constructor() ERC20("saketh", "420"){
        _mint(msg.sender, 1000000 * 10 ** decimals());//whoever deployes the contract will own all the tokens 
    }

    function mint(address to, uint256 amount) public onlyOwner{
        _mint(to, amount);
    }
}
```
