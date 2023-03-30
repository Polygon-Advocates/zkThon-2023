## javascript code
```
const { ethers, parseUnits } = require('ethers');
require('dotenv').config();

const abi = require('./abi.json').abi;
const contractAddress = '0x3B90d35477299f43e57B69d08F4B5259800a6cf8';
const provider = new ethers.JsonRpcProvider('https://rpc.public.zkevm-test.net');
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contract = new ethers.Contract(contractAddress, abi, signer);

async function call() {
    await contract.approve("0x3B90d35477299f43e57B69d08F4B5259800a6cf8", parseUnits("1000000"));
    await contract.createTokens("0x3B90d35477299f43e57B69d08F4B5259800a6cf8");
    console.log("Successfull!!")
}

call();
```
hash link: https://explorer.public.zkevm-test.net/tx/0x53a6098a90a1f597a57be0b69e71e4bcb88fe5406993b8a5f8cdf5601ea6a350
contract link: https://explorer.public.zkevm-test.net/address/0x3b90d35477299f43e57b69d08f4b5259800a6cf8
