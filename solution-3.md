## Contract Address 📁
0x3ac587078b344a3d27e56632dff236f1aff04d56
## Transaction Hash #️⃣
0x1b15111a5775fdf9c602f52d7c75d43c23834748f9faf7531a4f473cf25e5605
## Transaction Link 🔗
https://explorer.public.zkevm-test.net/tx/0x1b15111a5775fdf9c602f52d7c75d43c23834748f9faf7531a4f473cf25e5605

## Scripts for Interaction 

### ABI for the contract :
```
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
```

### Script for Interaction

```Javascript
import { abi } from 'abi.js'

const Web3 = require('web3');
const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();

//Importing Mnemonic from env 
let provider = new HDWalletProvider({
  mnemonic: {
    phrase: process.env.MNEMONIC
  },
  providerOrUrl: "https://rpc.public.zkevm-test.net"
});

const web3 = new Web3(provider);
const contractInstance = new web3.eth.Contract(abi,'0x3aC587078b344a3d27e56632dFf236F1Aff04D56');
const submitNewName = async ()=>{
  const accounts = await web3.eth.getAccounts();
  await contractInstance.methods.submitUsername('demonicdeoxys').send({from : accounts[0]}).then(console.log);
}
submitNewName();
```
