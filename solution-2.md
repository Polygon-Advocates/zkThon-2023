'''
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract ArtNFT is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdTracker;

    struct Artwork {
        bytes32 hash;
    }

    mapping(uint256 => Artwork) private _artworks;

    constructor(string memory name, string memory symbol) ERC721(name, symbol) {}

    function mint(bytes32 hash) public returns (uint256) {
        _tokenIdTracker.increment();
        uint256 tokenId = _tokenIdTracker.current();
        _mint(msg.sender, tokenId);
        _artworks[tokenId] = Artwork(hash);
        return tokenId;
    }

    function getArtwork(uint256 tokenId) public view returns (bytes32) {
        return _artworks[tokenId].hash;
    }
}
'''
