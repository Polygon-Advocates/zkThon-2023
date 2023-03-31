```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";

contract ZkThon is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("zkThon", "ZTK") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
```

# Contract Address
https://testnet-zkevm.polygonscan.com/address/0xAed4eABB9dd84092C632a6Fd5bfbB7DC715b9BB7
# Transaction Address
https://testnet-zkevm.polygonscan.com/tx/0x82cb250b00eb9672f51bd3341e44a8b01fa636a2baeae94f64990aa6c24a4764