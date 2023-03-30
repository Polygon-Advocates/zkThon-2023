## Javascript Code
```
const { ethers, parseUnits } = require('ethers');
require('dotenv').config();

const abi = require('./abi.json').abi;
const contractAddress = '0xbd0771A5c5f05c5Ce5701389F9Bf8dD4a4508aBb';
const provider = new ethers.JsonRpcProvider('https://rpc.public.zkevm-test.net');
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contract = new ethers.Contract(contractAddress, abi, signer);

async function call() {
    await contract.approve("0xbd0771A5c5f05c5Ce5701389F9Bf8dD4a4508aBb", parseUnits("1000000"));
    await contract.createTokens("0xbd0771A5c5f05c5Ce5701389F9Bf8dD4a4508aBb");
    console.log("Successfull!!")
}

call();
```

Hash link:https://explorer.public.zkevm-test.net/tx/0xfbe5384d835677c99e0eae91fa3eaecba748e3a7cb82caddbf0fa10610e74402                  
contract link: https://explorer.public.zkevm-test.net/address/0xbd0771A5c5f05c5Ce5701389F9Bf8dD4a4508aBb
