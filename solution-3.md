contract address : 0x2763e0539e3f01724c73374609630f3e409273a3


transaction url : https://explorer.public.zkevm-test.net/tx/0xb555f0b59906fa32d267ee51eb58461f71ef1b53e8b97541437753b516964d82


''' js

const Web3 = require('web3');
const tokenAbi = process.env.TOKEN_ABI;

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

const tokenAddress = '0x2763e0539e3f01724c73374609630f3e409273a3'; 
const fromAddress = '0x75566a7F0f619DEdaaA7Dca609DCD4D812341611'; 
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
