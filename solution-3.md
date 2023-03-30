Transaction URL- [0x50d685f4f2c3a7d0fc81336ba08d8f6efb5bf0083e1f94665f4ad8932a57dfdc](https://explorer.public.zkevm-test.net/tx/0x50d685f4f2c3a7d0fc81336ba08d8f6efb5bf0083e1f94665f4ad8932a57dfdc)

```js
const Web3 = require('web3');
const tokenAbi = process.env.TOKEN_ABI;

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

const tokenAddress = '0x0a336135b9421a6f5b68cd07fd926b30eaef4139'; // Replace with the address of your token

const fromAddress = '0xFD0f084295D16373bF510c07a47b24DacE1Df49B'; // Replace with the address 

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

mintToken('Address', 10);
```
