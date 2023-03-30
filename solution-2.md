# 🪴 Challenge II: Deployed an ERC721 Contract on the zkEVM Testnet

## Contract

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract ZKThon is ERC721, ERC721URIStorage, ERC721Burnable, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("ZKThon", "ZKT") {}

    function safeMint(address to) public onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, 'https://roadtoweb3.infura-ipfs.io/ipfs/QmSeiDZ6Tps8AEmYX1wVEAxzT5MFcqRnKWTgqX34FbHz8J');
    }

    // The following functions are overrides required by Solidity.

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }
}

```

```bash
# Contract Address
https://testnet-zkevm.polygonscan.com/address/0x232b6ca8d85e5f69c4e945ab786af9b50326ee70

# Transaction Hash
https://testnet-zkevm.polygonscan.com/tx/0x53fab374a75921c96768ac3dc9d2ab216206aabd8cc929e779b44efda4da5c1f
```

## Explorer Links

- [Deploy Contract](https://testnet-zkevm.polygonscan.com/address/0x232b6ca8d85e5f69c4e945ab786af9b50326ee70)
- [Transaction Hash](https://testnet-zkevm.polygonscan.com/tx/0x53fab374a75921c96768ac3dc9d2ab216206aabd8cc929e779b44efda4da5c1f)
