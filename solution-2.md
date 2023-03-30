Contract address:- 0x6196893199581Be613D722C44e7C72A443A87dc9
Transaction url:- https://explorer.public.zkevm-test.net/tx/0x26372d152347e0c76515be04d950e38faf0b4b324c451c6752d248871a10de39

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract zkMyToken is ERC20, ERC20Burnable, Ownable{
    
    constructor() ERC20("Nikhil", "NK"){
        _mint(msg.sender, 1000000 * 10 ** decimals());//whoever deployes the contract will own all the tokens 
    }

    function mint(address to, uint256 amount) public onlyOwner{
        _mint(to, amount);
    }
}
```
