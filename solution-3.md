# Solution 3

## 🌳 Challenge III: Interact With A Deployed Contract On zkEVM Testnet

txHash: [0x0bbb739f9401226a0ea0b682d137eeafff5e53aff059d32d69e118c241e1d8a9](https://testnet-zkevm.polygonscan.com/tx/0x0bbb739f9401226a0ea0b682d137eeafff5e53aff059d32d69e118c241e1d8a9)

contractAddress: [0xd1f91a9be1cc816e317fe8c69f32589182b85c09](https://testnet-zkevm.polygonscan.com/address/0xd1f91a9be1cc816e317fe8c69f32589182b85c09)

### Transfer 0.1 bbntv tokens

```javascript
  const amount = 0.1

  const transferTokenHandler = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Metamask not installed");
    }

    try {
      const unparsedToAmount = new BigNumber(amount).times(
        TEN.pow(new BigNumber(tokenDecimals))
      ).toString()

      const erc20Token = zkClient.erc20(tokenAddress);

      const result = await erc20Token.transfer(unparsedToAmount, toAddress);
      console.log(erc20Token);

      const txHash = await result.getTransactionHash();
      setTxHash(txHash)

      const txReceipt = await result.getReceipt();
      console.log('txReceipt:', txReceipt);

    } catch (err) {
      console.log(err)
    }
  }
```
Link to full code: [Polygon dApp POC using matic.js](https://github.com/ankitboghra/polygon-dapp-poc/blob/zkevm/src/App.js)
