contract address : 0x902027a27c12e7f0badd1bcf8c96c1b180b0e112

Transaction URL : https://explorer.public.zkevm-test.net/tx/0xc74f25f73bdc5cf212533afd9ae91a5eb051bff9392abe1927f35b5a08ec55e2

''' js

const Web3 = require('web3');
const tokenAbi = process.env.TOKEN_ABI;

const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/your_infura_project_id'));

const tokenAddress = '0x902027a27c12e7f0badd1bcf8c96c1b180b0e112';
const fromAddress = '0x5ae21e1396dD9700C64E37d4f60D4Ed7AbB1dF82';
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
'''
