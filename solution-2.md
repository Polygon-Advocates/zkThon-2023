Transaction Hash - 0xa21b305ae25d3140d6da963edd1b2a47bc879a14d7e74f4597bf6b941c0d2ddb

Contract Address - 0x80aE9F84679fBAC039439deb279398AAaeBC7B6b

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
contract OurToken is ERC20, ERC20Burnable, Ownable{
    
    constructor() ERC20("Maharsi007", "MZK"){
        _mint(msg.sender, 1000000 * 10 ** decimals());//whoever deployes the contract will own all the tokens 
    }
    function mint(address to, uint256 amount) public onlyOwner{
        _mint(to, amount);
    }
}
```
