Tx Url for interation with above token contract - https://explorer.public.zkevm-test.net/tx/0x177b81a8e3fb97fba09d90c4a4172d5f17ecf71b9d138637bc3338adafc226d0

Transaction hash - 0x177b81a8e3fb97fba09d90c4a4172d5f17ecf71b9d138637bc3338adafc226d0
```sol
//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract ZkThon {
    // Events that allows for emitting a message
    event NewSubmission(address sender, string message);

    // Variables
    string username;

    // Main constructor run at deployment
    constructor(string memory _username) {
        username = _username;
        emit NewSubmission(msg.sender, _username);
    }

    // Get function
    function getCurrentSubmission() public view returns (string memory) {
        return username;
    }

    // Set function
    function submitUsername(string memory _username) public {
        username = _username;
        emit NewSubmission(msg.sender, _username);
    }
}
```