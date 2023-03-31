## javascript code
```
const { ethers, parseUnits } = require('ethers');
require('dotenv').config();

const abi = require('./abi.json').abi;
const contractAddress = '0xFd726074892C469Bc731d854C010a6c42e5C9fA6';
const provider = new ethers.JsonRpcProvider('https://rpc.public.zkevm-test.net');
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contract = new ethers.Contract(contractAddress, abi, signer);

async function call() {
    await contract.approve("0xFd726074892C469Bc731d854C010a6c42e5C9fA6", parseUnits("1000000"));
    await contract.createTokens("0xFd726074892C469Bc731d854C010a6c42e5C9fA6");
    console.log("Successfull!!")
}

call();
```

txn hash:
https://explorer.public.zkevm-test.net/tx/0x970b6d2e766e2d149242365a47ff8480d38e673e653076e32c2caef12901354b
contract:
https://explorer.public.zkevm-test.net/address/0xFd726074892C469Bc731d854C010a6c42e5C9fA6
