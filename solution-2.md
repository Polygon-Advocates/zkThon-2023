```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";

contract ZkThon is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("zkThon", "ZKT") {
        _mint(msg.sender, 100000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
```
# Contract Address
https://testnet-zkevm.polygonscan.com/address/0xf4cd1e400a1fd82f049bfffc57e25ec75893bd8c /
0xf4cd1e400a1fd82f049bfffc57e25ec75893bd8c

# Transaction Address
https://testnet-zkevm.polygonscan.com/tx/0xcf0cb05535558eab09e3424095f9d2e3d37432542fe59d7435516fa6cc7de958 /
0xcf0cb05535558eab09e3424095f9d2e3d37432542fe59d7435516fa6cc7de958
