## Javascript code

```
const { ethers, parseUnits } = require('ethers');
require('dotenv').config();

const abi = require('./abi.json').abi;
const contractAddress = '0x6f530235b61700D515215B95C29e4EA9Be283108';
const provider = new ethers.JsonRpcProvider('https://rpc.public.zkevm-test.net');
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contract = new ethers.Contract(contractAddress, abi, signer);

async function call() {
    await contract.approve("0x6f530235b61700D515215B95C29e4EA9Be283108", parseUnits("1000000"));
    await contract.createTokens("0x6f530235b61700D515215B95C29e4EA9Be283108");
    console.log("Successfull!!")
}

call();
```
txn Hash url: https://explorer.public.zkevm-test.net/tx/0x9cdb62394e493d49e4fc2286f48c00e113a127ada48a1460f48697d4df0e0afd
contract address: https://explorer.public.zkevm-test.net/address/0x6f530235b61700D515215B95C29e4EA9Be283108
