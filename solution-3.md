https://testnet-zkevm.polygonscan.com/tx/0xd191fc4a472169cdd332afc7aa815d6d40b9c24651d5981a22a428e3b5590436

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
contract BenToken is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("BenToken", "BEN") {
        _mint(msg.sender, 100000 * 10 ** decimals());
    }
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
```
