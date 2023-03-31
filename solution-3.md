## JavaScript Code
```
const { ethers, parseUnits } = require('ethers');
require('dotenv').config();

const abi = require('./abi.json').abi;
const contractAddress = '0xade8ae7385f3ac326ea420539d9245fa2e09e0b5';
const provider = new ethers.JsonRpcProvider('https://rpc.public.zkevm-test.net');
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contract = new ethers.Contract(contractAddress, abi, signer);

async function call() {
    await contract.approve("0xade8ae7385f3ac326ea420539d9245fa2e09e0b5", parseUnits("1000000"));
    await contract.createTokens("0xade8ae7385f3ac326ea420539d9245fa2e09e0b5");
    console.log("Successfull!!")
}

call();
```

## Txn hash link
https://explorer.public.zkevm-test.net/tx/0x7dd379171cefb4423092f3c8f34a0dcdfd68dbeebe271a9e39eda3720ab59d97

## Contract address link:
https://explorer.public.zkevm-test.net/address/0xade8AE7385F3AC326eA420539d9245fa2e09E0b5
