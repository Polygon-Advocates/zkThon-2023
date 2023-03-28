```solidity
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

```Javascript
const Web3 = require('web3');
const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();

const abi = [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_username",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "message",
          "type": "string"
        }
      ],
      "name": "NewSubmission",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "getCurrentSubmission",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_username",
          "type": "string"
        }
      ],
      "name": "submitUsername",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
}]

let provider = new HDWalletProvider({
  mnemonic: {
    phrase: process.env.MNEMONIC
  },
  providerOrUrl: "https://rpc.public.zkevm-test.net"
});
const web3 = new Web3(provider);

const contractInstance = new web3.eth.Contract(abi,'0x3aC587078b344a3d27e56632dFf236F1Aff04D56');
const submitTx = async ()=>{
  const accounts = await web3.eth.getAccounts();
  await contractInstance.methods.submitUsername('19IT117').send({from : accounts[0]}).then(console.log);
}
submitTx();
```
```bash
Contract Address : 0x3ac587078b344a3d27e56632dff236f1aff04d56
Transaction Hash : 0xf029d31768c30af61c39c7b07541d969a0563b4c2e9126c6396f07b5a264e21c
Transaction Link : https://explorer.public.zkevm-test.net/tx/0xf029d31768c30af61c39c7b07541d969a0563b4c2e9126c6396f07b5a264e21c
```
