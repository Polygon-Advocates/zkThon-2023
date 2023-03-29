```bash
# Transaction Address
https://explorer.public.zkevm-test.net/tx/0xb0bca1177c0b0d5310626bec3f73bdc42f0f59f8e1b02cb506c0b7c348fcc932
TxHash - 0xb0bca1177c0b0d5310626bec3f73bdc42f0f59f8e1b02cb506c0b7c348fcc932

# Contract Address
https://explorer.public.zkevm-test.net/address/0x3BA809a22861Cf030AA4872140Ec3e49DB28D415
Contract Address - 0x3BA809a22861Cf030AA4872140Ec3e49DB28D415
```


```This script is through web3.js
const Web3 = require('web3');
require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider');
const abi = require('../artifacts/contracts/polygon.sol/polygon.json').abi;
const contractAddress = '0x3ba809a22861cf030aa4872140ec3e49db28d415';
const providerUrl = 'https://rpc.public.zkevm-test.net';
const mnemonic = process.env.MNEMONIC;
const recipient = '0xe5177969932c096438db9365a4b3fb9a5e7e3917';
const amount = '1000000000000000000000';
async function mint() {
  const provider = new HDWalletProvider(mnemonic, providerUrl);
  const web3 = new Web3(provider);
  const contract = new web3.eth.Contract(abi, contractAddress);
  const accounts = await web3.eth.getAccounts();
  const tx = await contract.methods.mint(recipient, amount).send({
    from: accounts[0]
  });
  console.log('Transaction hash:', tx.transactionHash);
}
mint();

```
