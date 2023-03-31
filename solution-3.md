## javascript code 
```
const { ethers, parseUnits } = require('ethers');
require('dotenv').config();

const abi = require('./abi.json').abi;
const contractAddress = '0x8f73fd8636da02f4fd042a6b0a2e595c35ca3492';
const provider = new ethers.JsonRpcProvider('https://rpc.public.zkevm-test.net');
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contract = new ethers.Contract(contractAddress, abi, signer);

async function call() {
    await contract.approve("0x8f73fd8636da02f4fd042a6b0a2e595c35ca3492", parseUnits("1000000"));
    await contract.createTokens("0x8f73fd8636da02f4fd042a6b0a2e595c35ca3492");
    console.log("Successfull!!")
}

call();
```
TXN HASH: https://testnet-zkevm.polygonscan.com/tx/0xa722344aff7fbe704d52be6af6403db0d782ef02b51ae71e0e07c62bb4b92e54
CONTRACT ADDRESS:https://testnet-zkevm.polygonscan.com/address/0x8f73fd8636da02f4fd042a6b0a2e595c35ca3492
