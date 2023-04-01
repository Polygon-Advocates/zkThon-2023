https://testnet-zkevm.polygonscan.com/tx/0xd191fc4a472169cdd332afc7aa815d6d40b9c24651d5981a22a428e3b5590436

```js
// SPDX-License-Identifier: MIT
require('dotenv').config();
const ethers = require('ethers');
const BenToken = artifacts.require("BenToken");

const WALLET_PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY;

module.exports = async function (callback) {
  try {
    const provider = new ethers.providers.JsonRpcProvider(process.env.ALCHEMY_ENDPOINT);
    const wallet = new ethers.Wallet(WALLET_PRIVATE_KEY, provider);

    const benToken = await BenToken.deployed();
    const benTokenContract = new ethers.Contract(benToken.address, BenToken.abi, wallet);

    const recipient = "0xF5745cD4d5BC2E3B7352676544Ea632A9a30FecD";
    const amount = ethers.utils.parseUnits("1");

    const tx = await benTokenContract.mint(recipient, amount);
    await tx.wait();

    console.log(`Minted 1 BEN token to: ${recipient}`);
    callback();
  } catch (error) {
    console.error(error);
    callback(error);
  }
};
```
