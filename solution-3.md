Transaction URL - https://explorer.public.zkevm-test.net/tx/0x225434340b65232b5e2c34b77584a363a7aeb34e9790a04219de3da6b57935c6

Contract address - 0x2e6d93eec0f3ecb9d4b251cbc7d735aa02669a7c

```js
const Web3 = require('web3');
const tokenAbi = process.env.TOKEN_ABI;

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

const tokenAddress = '0x2e6d93eec0f3ecb9d4b251cbc7d735aa02669a7c'; // Replace with the address of your token
const fromAddress = '0xCf270b31d7d047220717AB66b1C7DAC5cb1Ad0e7'; // Replace with the address you want to mint tokens from
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
