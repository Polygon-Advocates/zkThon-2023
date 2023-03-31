Transaction Hash - 0xe2557c298bf2d98760a1b6d7e0df73601edb458e4ea8270343a76ad57a772f94

Contract Address - 0x80ae9f84679fbac039439deb279398aaaebc7b6b

Transaction URL - https://explorer.public.zkevm-test.net/tx/0xe2557c298bf2d98760a1b6d7e0df73601edb458e4ea8270343a76ad57a772f94

```js
const Web3 = require('web3');
const tokenAbi = process.env.TOKEN_ABI;

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

const tokenAddress = ''; // Replace with the address of your token
const fromAddress = ''; // Replace with the address you want to mint tokens from
const privateKey = ''; // Replace with your private key

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
