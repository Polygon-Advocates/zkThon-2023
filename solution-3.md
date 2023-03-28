```
const { ethers } = require('ethers');
require('dotenv').config();

const abi = require('../artifacts/contracts/zkThon.sol/zkThon.json').abi;
const contractAddress = '0x3ac587078b344a3d27e56632dff236f1aff04d56';
const provider = new ethers.providers.JsonRpcProvider('https://rpc.public.zkevm-test.net');
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contract = new ethers.Contract(contractAddress, abi, signer);

async function call() {
  await contract.submitUsername('ysjprojects');
}

call();
```

Transaction URL: https://explorer.public.zkevm-test.net/tx/0x5bb7f16efdd14646cf0e7d954657ef1ec35a1133fd904cd5e3198b819dea320b