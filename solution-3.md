Contract Address - 0x4d54a8e7b8577c4a130396e1e0d09914311bb0d2

transaction hash - 0x0af5dec6ae2140630f02c245cba3cb0981f1817fa471e28b2f9590ec5a9a2491

```js
const Web3 = require('web3');
const tokenAbi = process.env.TOKEN_ABI;

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

const tokenAddress = '0x4d54a8e7b8577c4a130396e1e0d09914311bb0d2'; // Replace with the address of your token
const fromAddress = ''; // Replace with the address you want to mint tokens from
const privateKey = 'YOUR_PRIVATE_KEY'; // Replace with your private key

const token = new web3.eth.Contract(tokenAbi, tokenAddress);

async function mintToken(toAddress, amount) {
  const nonce = await web3.eth.getTransactionCount(fromAddress);
  const gasPrice = await web3.eth.getGasPrice();

  const txParams = {
    nonce: nonce,
    gasPrice: gasPrice,
    gasLimit: 500000,
    to: tokenAddress,
    value: 0,
    data: token.methods.mint(toAddress, amount).encodeABI()
  };

  const signedTx = await web3.eth.accounts.signTransaction(txParams, privateKey);
  const txReceipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
}

mintToken('Address', 1000000);

```
