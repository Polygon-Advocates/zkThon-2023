## Solution 3 :- 

### Javascript Code :

```

const { ethers, parseUnits } = require('ethers');
require('dotenv').config();

const abi = require('./abi.json').abi;
const contractAddress = '0xa06dd47F0124559279191D21A69f86cd67E8Ba71';
const provider = new ethers.JsonRpcProvider('https://rpc.public.zkevm-test.net');
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contract = new ethers.Contract(contractAddress, abi, signer);

async function call() {
    await contract.approve("0xa06dd47F0124559279191D21A69f86cd67E8Ba71", parseUnits("1000000"));
    await contract.createTokens("0xa06dd47F0124559279191D21A69f86cd67E8Ba71");
    console.log("Successfull!!")
}

call();

```
Transaction Hash URL : https://explorer.public.zkevm-test.net/tx/0xcaa4ca0e3192e27870c74e86ae3f098af1a8a11eac1b9396f07298591b5f8165

Contract Address : https://explorer.public.zkevm-test.net/address/0x538DC95b1C3D2F29B9bc5277362189B22505392A
