Transaction URL - https://explorer.public.zkevm-test.net/tx/0xaf7fe6775ed30157a601bcb73e0b0df8328c645d7241f21ad5476fcab09168c9

```js
const { ethers } = require("ethers");

// token abi
const tokenAbi = process.env.TOKEN_ABI;
const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
const tokenAddress = "0x3aC587078b344a3d27e56632dFf236F1Aff04D56";
const fromAddress = ""; // Replace with your address
const privateKey = "YOUR_PRIVATE_KEY"; // Replace with your private key
const token = new ethers.Contract(tokenAddress, tokenAbi, provider);

async function submitUsername(username) {
  const nonce = await provider.getTransactionCount(fromAddress);
  const gasPrice = await provider.getGasPrice();
  const txParams = {
    nonce: nonce,
    gasPrice: gasPrice,
    gasLimit: 500000,
    to: tokenAddress,
    value: 0,
    data: token.interface.encodeFunctionData("submitUsername", [username]),
  };
  const wallet = new ethers.Wallet(privateKey, provider);
  const signedTx = await wallet.signTransaction(txParams);
  const txReceipt = await provider.sendTransaction(signedTx);
  console.log(txReceipt);
}

submitUsername("username");
```

