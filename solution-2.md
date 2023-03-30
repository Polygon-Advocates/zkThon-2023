```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";

contract Testmaster is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("Testmaster", "TMR") {
        _mint(msg.sender, 10000000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
```
# Contract Address
https://explorer.public.zkevm-test.net/address/0x4f7619fb86e8f5feccdd25da5713bef64403f307

# Transaction Address
https://explorer.public.zkevm-test.net/tx/0x0f361e934013f0eaf6e70682ea19f1debc39af46a50630ecec1725c78497b21b
