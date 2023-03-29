Transaction URL :- https://explorer.public.zkevm-test.net/tx/0x98adf9b822c95752ca013b85edd4bdbd1dd86499ba9d43730e8b6e863af85e5c

''' js

const Web3 = require('web3');
const tokenAbi = process.env.TOKEN_ABI;

const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/your_infura_project_id'));

const tokenAddress = '0xb6bd54627e9656bd0daf18f546e2ee3907ef277e'; // Replace with the address of your token
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

mintToken('Address', 100000);

'''
