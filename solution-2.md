```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Zkthon is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("Zkthon", "ZKT") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
```
https://testnet-zkevm.polygonscan.com/tx/0xe5ebd95b3391140aebb3cfd1bfd56ef4008f1f6f5f249dbe672d4f03170dd96d
contract address : 0x639663ae8911e819128ca1f3641f79a03001673f
transaction hash : 0xe5ebd95b3391140aebb3cfd1bfd56ef4008f1f6f5f249dbe672d4f03170dd96d
