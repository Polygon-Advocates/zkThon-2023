# 🌳 Challenge III: Interact With A Deployed Contract On zkEVM Testnet

```bash
# Transaction Address
https://testnet-zkevm.polygonscan.com/tx/0x609c4aafef23d670fdc8dfdd2fe9f4f2b46c994e9833b58e97a67b0de2e25c3e
TxHash - 0x609c4aafef23d670fdc8dfdd2fe9f4f2b46c994e9833b58e97a67b0de2e25c3e

# Contract Address
https://testnet-zkevm.polygonscan.com/address/0xd1347d6996895a9C85d1dF90417e84667ABC9a68
Contract Address - 0xd1347d6996895a9C85d1dF90417e84667ABC9a68
```

Ethers.js code to interact the contract's mint function for minting 1000 tokens

```ethersjs

const { ethers } = require('ethers');
require('dotenv').config();
const abi = require('../artifacts/contracts/zkThonToken.sol/zkThonToken.json').abi;

const contractAddress = '0xd1347d6996895a9C85d1dF90417e84667ABC9a68';
const provider = new ethers.providers.JsonRpcProvider('https://rpc.public.zkevm-test.net');
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contract = new ethers.Contract(contractAddress, abi, signer);

const recipient = '0xa518097A3843F10c06a9B9419aa02245771dD442';
const amount = ethers.utils.parseUnits('1000', 'ether');

async function mint() {
  const tx = await contract.mint(recipient, amount);
  console.log('Transaction hash:', tx.hash);
}

mint();

```
