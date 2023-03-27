# 🌳 Challenge III: Interact With A Deployed Contract On zkEVM Testnet.

Approving ERC20 Tokens for spending - 

https://explorer.public.zkevm-test.net/tx/0x25e5f55ac48a2af04518b31ea78186e7c3e442de0b1e0e7756cb0f1efc182772

Create 10,00,000 CRZ ERC20 tokens for reciever - 

https://explorer.public.zkevm-test.net/tx/0xf1f2d3c3af9026bae093b7aba64d059246c1a782ad8cbf7af575c0035853d785

Contract Hash - 

https://explorer.public.zkevm-test.net/address/0x722185db45507D5f74d599344c2fe4947C43e2a9

User Address who deployed the contract - 

https://explorer.public.zkevm-test.net/address/0x0d048eED5c935C783E2A4D8803bF425A2Db87B57


# Code of Execution Script

```Javascript
const { ethers, parseUnits } = require('ethers');
require('dotenv').config();

const abi = require('./abi.json').abi;
const contractAddress = '0x722185db45507D5f74d599344c2fe4947C43e2a9';
const provider = new ethers.JsonRpcProvider('https://rpc.public.zkevm-test.net');
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contract = new ethers.Contract(contractAddress, abi, signer);

async function call() {
    await contract.approve("0x4D97F9Fc23Ce4B0be1F59d450B1acF550f18da5A", parseUnits("1000000"));
    await contract.createTokens("0x4D97F9Fc23Ce4B0be1F59d450B1acF550f18da5A");
    console.log("Successfull!!")
}

call();

```
