transaction url:- https://explorer.public.zkevm-test.net/tx/0x5625f7ecb76499d7877830ad49d1a898352b6469fc65f9b21a179da6c3547fc7

```js
const Web3 = require('web3');
const tokenAbi = process.env.TOKEN_ABI;

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

const tokenAddress = '0xb0eccedab90a7749e426e2ea30167e7e300798a1';

const fromAddress = '0x2a755403Fde32Be9AeDf28C70e6FDc9a91Ab2C05'; 

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
