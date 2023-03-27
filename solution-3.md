I created a different token than solution in this contract and interacted with it using call method.Following is the code,transaction has of creation and interaction and contract address.

# Code :
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Dhruvang is ERC20 {
    constructor() ERC20("Dhruvang", "DTK") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }
}
contract DhruvangDeployer {
    address public dhruvangAddress;

    function deployMyToken() public {
        Dhruvang token = new Dhruvang();
        dhruvangAddress = address(token);
    }
}

//Interacting with the contract

contract MyTokenInteraction {
    Dhruvang public dhruvang;

    constructor(address _DhruvangAddress) {
        dhruvang = Dhruvang(_DhruvangAddress);
    }

    function transfer(address _to, uint256 _amount) public {
        dhruvang.transfer(_to, _amount);
    }

    function balanceOf(address _address) public view returns (uint256) {
        return dhruvang.balanceOf(_address);
    }
}

# Contract Address :
https://explorer.public.zkevm-test.net/address/0x1205Fe5849C6EC714e9Cd93660AC073426400b16

# Transaction Hash of Token Creation :
https://explorer.public.zkevm-test.net/tx/0x25c14499cc63b9155940ea015501295bcfdd7a5256f24caaec89b7afed0d5fe9

# Transaction Hash of Contract Interaction where I send few tokens to my other wallet address 0x3e18832fC412Cc636D1fF315236694126D71D376 :
https://explorer.public.zkevm-test.net/tx/0x6e553594f2a42e5b5abb2cbaffdec6ee57830341055ecc002bd496cc68f3029a
