# Contract Address
https://testnet-zkevm.polygonscan.com/address/0x127a97ad1ac94b74218ce9d205074c629e3fa070

# Transaction Address
https://testnet-zkevm.polygonscan.com/tx/0x656542dee3e2d2f7479e1ed7b5ffc2e695e355f46be304569a0f934fe657de22

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.8.2/security/Pausable.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/draft-ERC20Permit.sol";

contract Bankorbanks is ERC20, ERC20Burnable, Pausable, Ownable, ERC20Permit {
    constructor() ERC20("bankorbanks", "BNK") ERC20Permit("bankorbanks") {
        _mint(msg.sender, 713000 * 10 ** decimals());
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function _beforeTokenTransfer(address from, address to, uint256 amount)
        internal
        whenNotPaused
        override
    {
        super._beforeTokenTransfer(from, to, amount);
    }
}
