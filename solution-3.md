contract address : 0x1eefc3a23485ced94930c7da7a440afd23bb3022


transaction url : https://explorer.public.zkevm-test.net/tx/0x4f64f6bbfd850fefbf709da84f5d42e2a629acf5f53132bbac7d0201c3639699


'''js
const Web3 = require('web3');
const tokenAbi = process.env.TOKEN_ABI;

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

const tokenAddress = '0x1eefc3a23485ced94930c7da7a440afd23bb3022'; 
const fromAddress = '0xD6676a75AA81b2DD62cDa73D9bc46916E4c5B2Cd'; 
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

'''
