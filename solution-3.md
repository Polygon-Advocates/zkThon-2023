
## Javascript Code 

```
const { ethers, parseUnits } = require('ethers');
require('dotenv').config();

const abi = require('./abi.json').abi;
const contractAddress = '0x28534cA9020cECfdd16562e94bc6DB8068c54f26';
const provider = new ethers.JsonRpcProvider('https://rpc.public.zkevm-test.net');
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contract = new ethers.Contract(contractAddress, abi, signer);

async function call() {
    await contract.approve("0x28534cA9020cECfdd16562e94bc6DB8068c54f26", parseUnits("1000000"));
    await contract.createTokens("0x28534cA9020cECfdd16562e94bc6DB8068c54f26");
    console.log("Successfull!!")
}

call();

```

Transaction Hash URL : https://explorer.public.zkevm-test.net/tx/0x4bffe3d6d2bb98430c6782311ddc8a99a04fff7cd7a0bffbf0eb89a03196278e

Contract Address : https://explorer.public.zkevm-test.net/address/0x28534cA9020cECfdd16562e94bc6DB8068c54f26
