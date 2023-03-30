## javascript code
```
const { ethers, parseUnits } = require('ethers');
require('dotenv').config();

const abi = require('./abi.json').abi;
const contractAddress = '0x65b2be9e4d8a5c6cfa23b82bbbd9f0ed6368b03b';
const provider = new ethers.JsonRpcProvider('https://rpc.public.zkevm-test.net');
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contract = new ethers.Contract(contractAddress, abi, signer);

async function call() {
    await contract.approve("0x65b2be9e4d8a5c6cfa23b82bbbd9f0ed6368b03b", parseUnits("1000000"));
    await contract.createTokens("0x65b2be9e4d8a5c6cfa23b82bbbd9f0ed6368b03b");
    console.log("Successfull!!")
}

call();
```

txn hash : https://explorer.public.zkevm-test.net/tx/0x83d94c95e7d87096d780181a8937838b103829bb5bb719926d827fbaf17bcaec
contract address:https://explorer.public.zkevm-test.net/address/0x65b2BE9E4D8A5C6CFA23B82BbBD9F0ed6368b03B
