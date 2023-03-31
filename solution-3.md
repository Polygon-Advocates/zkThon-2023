Transaction URL:- https://explorer.public.zkevm-test.net/tx/0xb04e22c8bbee83bb5363e641a3b6cdfa3972e070a2417454bcc4c98647c656eb

```js

const Web3 = require('web3');
const tokenAbi = process.env.TOKEN_ABI;

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

const tokenAddress = '0x68d4969efa570388f51ab2c73b069c9d4a3e1740'; //contract address
const fromAddress = '0xE1eaB55aE9D9443Ce9a7EE9FD4EF27F7e706ADC6'; //wallet address
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

mintToken('Address', 10000);

```
