Transaction URL - https://testnet-zkevm.polygonscan.com/tx/0x2689a7ba526601791538482a9d7ecb8dc1907c2418078da1a38b9300cf5b982b

Contract Address - 0xfd77913a96dbb4409631a1a473cee17e9554bfd5

Transaction Hash - 0x2689a7ba526601791538482a9d7ecb8dc1907c2418078da1a38b9300cf5b982b

```js
const Web3 = require('web3');
const tokenAbi = process.env.TOKEN_ABI;

const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/your_infura_project_id'));

const tokenAddress = '0xfd77913a96dbb4409631a1a473cee17e9554bfd5'; // Replace with the address of your token
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

mintToken('Address', 1000000);

```
