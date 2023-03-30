Transaction url:- [0xad53bcb10f173c31ace258d96344e7cf7b6ab24447651b166c512365f62e66d5](https://explorer.public.zkevm-test.net/tx/0xad53bcb10f173c31ace258d96344e7cf7b6ab24447651b166c512365f62e66d5)

```js

const Web3 = require('web3');
const tokenAbi = process.env.TOKEN_ABI;

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

const tokenAddress = '0x4b00f34a276d0216d7f1b06972423c26ad22387e'; // Replace with the address of your token


const fromAddress = '0xD0Fc410C1d842e4984e0c7fb0E64175C59EF695B; // Replace with the address 


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

mintToken('Address', 100000);
```
