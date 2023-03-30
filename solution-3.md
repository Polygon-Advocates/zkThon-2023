Transaction URL- [0x392735bce44e408505358043af1895158c7458a04ae70ec5d1be616e813e434b](https://explorer.public.zkevm-test.net/tx/0x392735bce44e408505358043af1895158c7458a04ae70ec5d1be616e813e434b)

```js
const Web3 = require('web3');
const tokenAbi = process.env.TOKEN_ABI;

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

const tokenAddress = '0xbac55efb1a2368a694397a9b4432ffd7b2759145'; // Replace with the address of your token

const fromAddress = '0x9BD127E5F766b1aDBBAdb37c439691EF39E66df2'; // Replace with the address

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
