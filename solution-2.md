// SPDX-License-Identifier: MIT
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

pragma solidity 0.8.17;

contract zkToken is ERC20 {
    constructor() ERC20("ZKTOKEN", "ZKT") {
        // Give the Owner 1Bn ZKT tokens
        _mint(msg.sender, 10000000000);
    }
}
