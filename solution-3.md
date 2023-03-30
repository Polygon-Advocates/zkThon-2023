```bash
# Transaction Address
To Interact and mint 1000 tokens:-
https://explorer.public.zkevm-test.net/tx/0x311a8e76896b906b07b97745bf8fa630091b39fc5ca01ff809885bc6ad8979cf
TxHash - 0x311a8e76896b906b07b97745bf8fa630091b39fc5ca01ff809885bc6ad8979cf

# Contract Address
https://explorer.public.zkevm-test.net/address/0xeedb99875af3116dce368d84e5c49a09300aff3c
Contract Address - 0xeedb99875af3116dce368d84e5c49a09300aff3c
```


```
  import { ethers } from 'ethers';
  import ABI from './zkThon.json';
  const PRIVATE_KEY = "YOUR_PRIVATE_KEY"
  const abi = ABI;
  const contractAddress = '0xeedb99875af3116dce368d84e5c49a09300aff3c';
  let url = 'https://rpc.public.zkevm-test.net';
  const provider = new ethers.providers.JsonRpcProvider(url);
  const signer = new ethers.Wallet(PRIVATE_KEY, provider);
  const contract = new ethers.Contract(contractAddress, abi, signer);
  const recipient = '0x2BF5bd78ea16B1709FE0342e39820cf2FFC73099';
  const amount = ethers.utils.parseUnits('1000', 'ether');
  
  async function mint() {
    console.log("Minting...")
    const tx = await contract.mint(recipient, amount);
    console.log('Transaction hash:', tx.hash);
  }


```
