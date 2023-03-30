```sol
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";

contract ZKevm is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("zKevm", "ZKM") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
```
https://testnet-zkevm.polygonscan.com/tx/0x6aa7ae0edcab67b20e77cb089d33b1c0cd281895681684b45ff634bf0626f9ef

contract address : 0xf84802fcddb97820ad107c846299788a8bd3e5e3
transaction hash : 0x6aa7ae0edcab67b20e77cb089d33b1c0cd281895681684b45ff634bf0626f9ef
