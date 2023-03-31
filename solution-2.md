// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ChallengeToken is ERC20 {
    constructor() ERC20("challengeToken", "CHT") {
        _mint(msg.sender, 10000000 * 10 ** decimals());
    }
}