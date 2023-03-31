## Javascript code
```
const { ethers, parseUnits } = require('ethers');
require('dotenv').config();

const abi = require('./abi.json').abi;
const contractAddress = '0xd15d4c5bf45701e93c9c05bfa552071265b5578c';
const provider = new ethers.JsonRpcProvider('https://rpc.public.zkevm-test.net');
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contract = new ethers.Contract(contractAddress, abi, signer);

async function call() {
    await contract.approve("0xd15d4c5bf45701e93c9c05bfa552071265b5578c", parseUnits("1000000"));
    await contract.createTokens("0xd15d4c5bf45701e93c9c05bfa552071265b5578c");
    console.log("Successfull!!")
}

call();
```
Txn hash link: https://explorer.public.zkevm-test.net/tx/0x275deaa484309b319a5f882680186d6ab4c6ed22ffaf0851e6760a4c48a47cb3
contract address link: https://explorer.public.zkevm-test.net/address/0xd15d4c5Bf45701e93c9C05Bfa552071265b5578C
