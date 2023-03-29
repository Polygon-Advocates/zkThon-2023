contract address:- 0x2517f83901a8bf718edccf8fdf9de7b6371b1cd0


transection url:-https://explorer.public.zkevm-test.net/tx/0x8a528d68beb500c63155048a3d35b2a484a6cdcec6505282b0ed263987d423a4

'''js

const Web3 = require('web3');
const tokenAbi = process.env.TOKEN_ABI;

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

const tokenAddress = '0x2517f83901a8bf718edccf8fdf9de7b6371b1cd0'; 
const fromAddress = '0x72D9E6131961d5F4F398a194D135b7edB91fad05'; 
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
    data: token.methods.mint(0x6196893199581Be613D722C44e7C72A443A87dc9, amount).encodeABI()
  };

  const signedTx = await web3.eth.accounts.signTransaction(txParams, privateKey);
  const txReceipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
}

mintToken('0x6196893199581Be613D722C44e7C72A443A87dc9', 100000);

'''
