0xfa7471ae7e557a30318a71c5077a9a667b72723df5fb53f6d345919d6c3667da

### Transaction Link:
https://explorer.public.zkevm-test.net/tx/0xfa7471ae7e557a30318a71c5077a9a667b72723df5fb53f6d345919d6c3667da

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
  await contractInstance.methods.submitUsername('akashbiswas0').send({from : accounts[0]}).then(console.log);
}
submitTx();
