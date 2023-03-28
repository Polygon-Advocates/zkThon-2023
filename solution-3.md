Just performed a transfer transaction of 100 tokens from.

```bash
# Transaction Address
TxHash - 0xdc969381f0091f60d410716e423991a5e7c665fd6bc5fb8e501c2a0ec0cc4e31
https://testnet-zkevm.polygonscan.com/tx/0xdc969381f0091f60d410716e423991a5e7c665fd6bc5fb8e501c2a0ec0cc4e31

# Contract Address
Contract Address - 0xC5a867cc1E6c39bD5E6453F1792FEB1d55FaF72C
https://explorer.public.zkevm-test.net/address/0xC5a867cc1E6c39bD5E6453F1792FEB1d55FaF72C/contracts
```

Smart Contract Code -

```solidity

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";

contract AVT_zkThon is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("AVT_zkThon", "AVT") {
        _mint(msg.sender, 1000000000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}

```
JS file code -
```javascript
const Web3 = require('web3');

// Your contract's ABI goes here
const ABI = process.env.ABI;
// Http Providers 
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
// Contract Address
const contractAddress = "0xC5a867cc1E6c39bD5E6453F1792FEB1d55FaF72C";
// Account you want to transfer token from
const fromAddress = '0x64436CeA8886a5E19211E620753E735B7AA43A40';
// Private key of that account
const privateKey = process.env.PRIVATE_KEY;
// contract instance
const token = new web3.eth.Contract(ABI, contractAddress);
// funtion to transfer tokens
async function transferTokens(toAddress, amount) {
  const nonce = await web3.eth.getTransactionCount(fromAddress);
  const gasPrice = await web3.eth.getGasPrice();
  const txParams = {
    nonce: nonce,
    gasPrice: gasPrice,
    gasLimit: 500000,
    to: tokenAddress,
    value: 0,
    data: token.methods.transfer(toAddress, amount).encodeABI()
  };
  const signedTx = await web3.eth.accounts.signTransaction(txParams, privateKey);
  const txReceipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
  console.log(`Transaction hash: ${txReceipt.transactionHash}`);
  console.log(`Status: ${txReceipt.status}`);
}
//invoking the function
transferTokens(' To address ', 1); // Add to address here
```
