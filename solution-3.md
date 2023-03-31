# Transaction URL
https://explorer.public.zkevm-test.net/tx/0x7c5973548b33d383070bbd6550788225641f29bf959ddcdcc04c9565719ecfcf

# Code
```
const Web3 = require('web3');
const tokenAbi = process.env.TOKEN_ABI;

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

const tokenAddress = " "; // Replace with the address of your token
const fromAddress = ' '; // Replace with the address you want to send tokens from
const privateKey = process.env.PRIVATE_KEY; // Replace with your private key

const token = new web3.eth.Contract(tokenAbi, tokenAddress);

async function transferTokens(toAddress, amount) {
  const nonce = await web3.eth.getTransactionCount(fromAddress);
  const gasPrice = await web3.eth.getGasPrice();

  const txParams = {
    nonce: nonce,
    gasPrice: gasPrice,
    gasLimit: 500000,
    to: tokenAddress,
    value: 0,
    data: token.methods.transfer(toAddress, amount).encodeABI()
  };

  const signedTx = await web3.eth.accounts.signTransaction(txParams, privateKey);
  const txReceipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);

  console.log(`Transaction hash: ${txReceipt.transactionHash}`);
  console.log(`Status: ${txReceipt.status}`);
}

transferTokens(' To address ', 1); // Add to address here
```
