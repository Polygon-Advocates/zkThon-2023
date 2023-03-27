Deployed the following Contract that permits anyone to mint a ERC721 for the zkThon!

**TXN HASH:** 0xac9f5f62d575138d604f80d4de0ff35115da0efdcc1cea614bae7524ee9d7a13

```https://explorer.public.zkevm-test.net/tx/0xac9f5f62d575138d604f80d4de0ff35115da0efdcc1cea614bae7524ee9d7a13```

**CONTRACT ADDRESS:** 0xF6b705595E95c8D94E22B38570e79f8BaFa39558

```https://explorer.public.zkevm-test.net/address/0xF6b705595E95c8D94E22B38570e79f8BaFa39558```


```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";
import "@openzeppelin/contracts@4.8.2/utils/Counters.sol";

contract ZkThon is ERC721, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("zkThon", "zkT") {}

    function _baseURI() internal pure override returns (string memory) {
        return "https://i.vimeocdn.com/video/1591864187-ebf3e27e14bd1c33c0dd0f8984ab223437d03e2d0127349b04d1c25989b2be4a-d?mw=600&mh=600#";
    }

    function safeMint(address to) public {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
    }
}

```
