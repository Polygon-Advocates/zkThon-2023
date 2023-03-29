Transaction url:- [0x74bd7c9088a9d575156dccbdf39c7fbdf1030d0bcf68e308cf7b085759a311db](https://explorer.public.zkevm-test.net/tx/0x74bd7c9088a9d575156dccbdf39c7fbdf1030d0bcf68e308cf7b085759a311db)

'''js

const Web3 = require('web3');
const tokenAbi = process.env.TOKEN_ABI;

const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/your_infura_project_id'));

const tokenAddress = '0x1c371c9fad14498d600dca074638d50a54d9f55b'; //token(contract) address
const fromAddress = '0xb62eEF01a4f2fEF740Cf83C72C1e4F92Ff720f9B'; //
const privateKey = 'YOUR_PRIVATE_KEY'; //kindly replace with yours

const token = new web3.eth.Contract(tokenAbi, tokenAddress);

async function mintToken(toAddress, amount) {
  const nonce = await web3.eth.getTransactionCount(fromAddress);
  const gasPrice = await web3.eth.getGasPrice();}

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

mintToken('0xfc3ccc5f8adb82de6Ff89262a4E6965BA711C9A1', 100000);

'''
