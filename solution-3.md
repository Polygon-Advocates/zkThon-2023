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
```javascript
const { ethers } = require("ethers");
const abi = [{"type":"constructor","stateMutability":"nonpayable","inputs":[{"type":"string","name":"_username","internalType":"string"}]},{"type":"event","name":"NewSubmission","inputs":[{"type":"address","name":"sender","internalType":"address","indexed":false},{"type":"string","name":"message","internalType":"string","indexed":false}],"anonymous":false},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"getCurrentSubmission","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"submitUsername","inputs":[{"type":"string","name":"_username","internalType":"string"}]}];
const contractAddress = "0x3aC587078b344a3d27e56632dFf236F1Aff04D56";
const provider = new ethers.providers.JsonRpcProvider(
  "https://rpc.public.zkevm-test.net"
);
async function call() {
  const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  const contract = new ethers.Contract(contractAddress, abi, signer);
  const tx = contract.submitUsername("_username");
  console.log("TX: " + tx);
  const receipt = await tx;
  console.log("Receipt " + receipt);
}
call();
```