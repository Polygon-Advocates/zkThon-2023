// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";

contract CryptRaj is ERC721, ERC721Burnable, Ownable {
    constructor() ERC721("CryptRaj", "CRJ") {}

    function safeMint(address to, uint256 tokenId) public onlyOwner {
        _safeMint(to, tokenId);
    }
}

