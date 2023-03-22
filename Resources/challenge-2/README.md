# Resources to help with challenge-2

## Summary

In this challenge, you will deploy a simple ERC20 or ERC721 token on the Polygon zkEVM testnet. First let's understand what is ERC20 and ERC721.

- **ERC20** is a standard for tokens on the Ethereum blockchain. ERC20 tokens are fungible, meaning that each token is exactly equal to any other token.
- **ERC721** is a standard for non-fungible tokens (NFTs) on the Ethereum blockchain. They are unique, distinguishable from each other and are not interchangeable.

## How to build an ERC20 token

- Go to [OpenZeppelin's Contract Wizard](https://docs.openzeppelin.com/contracts/4.x/wizard) and select the ERC20 token template.
- Enter the `Name` and the `Symbol` of the token.
- And select a feature `Mintable`.
- Then click on `Open in Remix` button. It will redirect you to Remix IDE.
- Click on **Compile** and wait for it to get compiled.
- Now click on **Deploy and run transaction** and select **Injected Web3** as the environment.
- Select the account and zkEVM Testnet network. _Make sure to have some zkEVM testnet tokens ready in the selected account, you can refer [here](#get-test-tokens-for-the-polygon-zkevm-testnet)._
- Click on **Deploy**, then your Metamask will Popup and click on **Confirm**.

> _Voila!!_ You have successfully deployed your ERC20 token on the Polygon zkEVM testnet.

## Get Test Tokens for the Polygon zkEVM testnet

Watch the tutorial [here](https://wiki.polygon.technology/docs/zkEVM/develop#bridge-assets-to-zkevm) to get test tokens for the Polygon zkEVM testnet.

## To develop something more interesting, refer [here](https://wiki.polygon.technology/docs/zkEVM/develop)
