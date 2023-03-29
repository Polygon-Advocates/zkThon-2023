transaction url :- https://explorer.public.zkevm-test.net/tx/0xf14d5bbe9512df8aaedab6d88d41464d5471b991ba72b73584cc14b494849bf2

''' js

const Web3 = require('web3');
const tokenAbi = process.env.TOKEN_ABI;

const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/your_infura_project_id'));

const tokenAddress = '0x96928fff5f06515800a7323d77cda83157110071';
const fromAddress = '0xabD1437A0ADB0b39Abdbd9efC4AAEC6571E9520E'; 
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

mintToken('0x6196893199581Be613D722C44e7C72A443A87dc9', 100000);
'''
