# Contract Link

https://explorer.public.zkevm-test.net/address/0x4baF06430bb8d57b66ecE57ef2EeB799257e5E6b

```sol
// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract BuidlNFT is ERC721, ERC721URIStorage, ERC721Enumerable {
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIdCounter;
  address owner;

  constructor(string memory name, string memory symbol)
      ERC721(name, symbol)
  {
      owner = msg.sender;
  }

  modifier onlyOwner {
    require(msg.sender == owner, "ERROR: Not Owner");
    _;
  }

  // Mint function
  function mintNFT(address to, string memory uri) external onlyOwner {
    // current token id
      uint256 tokenId = _tokenIdCounter.current();

      // incrementing our token id
        _tokenIdCounter.increment();

        // minting the token
        _safeMint(to, tokenId);

        // 
        _setTokenURI(tokenId, uri);
  }

  function transfer (uint256 tokenId, address to) external {
    safeTransferFrom(msg.sender, to, tokenId);

  }

  function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId,
        uint256 batchSize
    ) internal override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    function _burn(
        uint256 tokenId
    ) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(
        uint256 tokenId
    ) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(
        bytes4 interfaceId
    ) public view override(ERC721, ERC721Enumerable) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
```