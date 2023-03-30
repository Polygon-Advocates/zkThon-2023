```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";

contract IndiCHOR is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("IndiCHOR", "IKC") {
        _mint(msg.sender, 6900000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
```


# Contract Address
https://explorer.public.zkevm-test.net/address/0x0a05e838aa6c77dc52dd9626b9a653786440dc9a

# Transaction Address
https://explorer.public.zkevm-test.net/tx/0x15b49a8c2d82b66ab00b602b18a3d3a480e17d93675505cc656c954b26994bd9
