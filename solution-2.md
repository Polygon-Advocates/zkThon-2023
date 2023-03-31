# Contract Address
https://explorer.public.zkevm-test.net/address/0xA70024a597735838031178e2d2a72d7aEC25d9aA

# Transaction Address
https://explorer.public.zkevm-test.net/tx/0x16d87306488bb405d8a909fa6b82d543f07c769ee7bf7c533d9077cb8b064f5b

# Contract Code

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ZkThonToken is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("zkThonToken", "ZTT") {
        _mint(msg.sender, 50000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
