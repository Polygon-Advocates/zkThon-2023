txn url - https://testnet-zkevm.polygonscan.com/tx/0x85bc5097dff1b05e1787b4727729f054bafb872805a7df546717cf52f3bd6b0c

#CONTRACT ADDRESS
0xd03166f9C056d9536598771F7Fe104D8e142F7dc
#TRANSACTION HASH
0x85bc5097dff1b05e1787b4727729f054bafb872805a7df546717cf52f3bd6b0c

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
