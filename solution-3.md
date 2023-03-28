contract address:- 0x350f2a74a4b1928c19d72b932436fe308281cc10

transaction url:- https://explorer.public.zkevm-test.net/tx/0x61273f3370991625817580f2b058f084452b897e6963d23cda8873ee40de9f8c

'''js
const Web3 = require('web3');
const tokenAbi = zkOurToken.env.TOKEN_ABI;

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

const tokenAddress = '0x350f2a74a4b1928c19d72b932436fe308281cc10'; // Replace with the address of your token
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

mintToken('0xfc3ccc5f8adb82de6Ff89262a4E6965BA711C9A1', 1000000);
'''
