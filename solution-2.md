#CONTRACT ADDRESS
https://explorer.public.zkevm-test.net/address/0x7247DA5936AE52a5868A9721FEb6f739636dd9EC

#TRANSACTION ADDRESS
https://explorer.public.zkevm-test.net/tx/0xf669e289950b7258427b7782f3a125de6ab591aea2ec017877a49cd5121c8b8d

'''sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";

contract Zkthon is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("Zkthon", "ZTK") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
'''
