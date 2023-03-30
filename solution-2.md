#CONTRACT ADDRESS
https://explorer.public.zkevm-test.net/address/0xdCCeE110380Af38c8bcA11d81a9725835A3014dc
#TRANSACTION HASH
https://explorer.public.zkevm-test.net/tx/0x70ad9c8613f5f910aa07208a395f85015205b30835211e41ac3bd777cb4ae558

'''sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";

contract Zkthon is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("zkthon", "ZTK") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
'''
