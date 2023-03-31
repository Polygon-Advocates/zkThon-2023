# https://testnet-zkevm.polygonscan.com/tx/0xefc7cb382537ada67f52ef877043262fb9487d31b04b307cde62faed2f872e77

# tx hash 0xefc7cb382537ada67f52ef877043262fb9487d31b04b307cde62faed2f872e77

# token address and tx https://testnet-zkevm.polygonscan.com/token/0xb0895103c6eada32ee73f4407e26d5b21101c0ed

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.8.2/security/Pausable.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/draft-ERC20Permit.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Votes.sol";
contract CynaralZK is ERC20, ERC20Burnable, Pausable, Ownable, ERC20Permit, ERC20Votes {
    constructor() ERC20("CynaralZK", "Czk") ERC20Permit("CynaralZK") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
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
    // The following functions are overrides required by Solidity.
    function _afterTokenTransfer(address from, address to, uint256 amount)
        internal
        override(ERC20, ERC20Votes)
    {
        super._afterTokenTransfer(from, to, amount);
    }
    function _mint(address to, uint256 amount)
        internal
        override(ERC20, ERC20Votes)
    {
        super._mint(to, amount);
    }
    function _burn(address account, uint256 amount)
        internal
        override(ERC20, ERC20Votes)
    {
        super._burn(account, amount);
    }
}


	{
		"from": "0xb0895103c6EADa32EE73f4407E26D5b21101c0ED",
		"topic": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
		"event": "Transfer",
		"args": {
			"0": "0x0000000000000000000000000000000000000000",
			"1": "0xf20156bC371a91F3394569eEF3BE43dB3e110833",
			"2": "100",
			"from": "0x0000000000000000000000000000000000000000",
			"to": "0xf20156bC371a91F3394569eEF3BE43dB3e110833",
			"value": "100"
		}
	}
]
