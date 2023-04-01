transaction url :- https://explorer.public.zkevm-test.net/tx/0xf51ce3bb97557ec0dd6c38417ebb19169f4b1935e36f298c8c56df73eb1ac79d

''' js
  
  
 const Web3 = require('web3');
const tokenAbi = process.env.TOKEN_ABI;

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

const tokenAddress = '0xbe9cd1adb35eeb79c42536a845217ef875f0d7aa';
const fromAddress = '0x5b18f440745E0670E277cd36583f06121F53ACb4'; // Replace with the address you want to mint tokens from
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
