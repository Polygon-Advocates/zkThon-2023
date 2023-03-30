In this challenge, I've interacted with the Smart Contract deployed in the challenge 2, to mint 1,000,000 CRZ Tokens.

Transaction URL : https://explorer.public.zkevm-test.net/tx/0x0f8c27e6546d1ac15634e75f3378869503042d4c45ae3950060ebab9922d6810

Transaction Hash : 0x0f8c27e6546d1ac15634e75f3378869503042d4c45ae3950060ebab9922d6810

Contract Address : https://explorer.public.zkevm-test.net/address/0xa4CC3f8eb72c1Bb781Af551Ab77547B04848172f



## Javascript Code : 
```
const { ethers, parseUnits } = require('ethers');
require('dotenv').config();

const abi = require('./abi.json').abi;
const contractAddress = '0xa4CC3f8eb72c1Bb781Af551Ab77547B04848172f';
const provider = new ethers.JsonRpcProvider('https://rpc.public.zkevm-test.net');
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contract = new ethers.Contract(contractAddress, abi, signer);

async function call() {
    await contract.approve("0xa4CC3f8eb72c1Bb781Af551Ab77547B04848172f", parseUnits("1000000"));
    await contract.createTokens("0xa4CC3f8eb72c1Bb781Af551Ab77547B04848172f");
    console.log("Successful!!")
}

call();
```
