# Resources to help with challenge-3

## Steps to Get Started 🏃🏻‍♂️ with the Challenge

- Configure your wallet for the zkEVM Testnet for development [here](https://wiki.polygon.technology/docs/zkEVM/develop#connecting-to-zkevm).

- Checkout this [video](https://www.youtube.com/watch?v=GNBHDCGFxtw) by Steph Orpilla, Devrel Engineer - Polygon Labs to help you with setting up the local development and building a fullstack dApp with Polygon zkEVM, link to the repo [here](https://github.com/oceans404/fullstack-zkevm) for reference.
- Claim some tokens required to work with Polygon zkEVM testnet [here](https://wiki.polygon.technology/docs/zkEVM/develop#bridge-assets-to-zkevm)

- Take a look at the following solidity contract for reference, which has been deployed to [this contract address on zkEVM Testnet](https://explorer.public.zkevm-test.net/address/0x3aC587078b344a3d27e56632dFf236F1Aff04D56).

```solidity
//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract ZkThon {
    // Events that allows for emitting a message
    event NewSubmission(address sender, string message);

    // Variables
    string username;

    // Main constructor run at deployment
    constructor(string memory _username) {
        username = _username;
        emit NewSubmission(msg.sender, _username);
    }

    // Get function
    function getCurrentSubmission() public view returns (string memory) {
        return username;
    }

    // Set function
    function submitUsername(string memory _username) public {
        username = _username;
        emit NewSubmission(msg.sender, _username);
    }
}
```

- Look over this solidity code to understand its functions and inputs to better understand the contract functionality.

- After understanding the contract functionality, create a simple script to interact with the contract in a programming language of your choosing by updating the `username` with your github username. To interact with the contract more easily, you could use a library like [ethers](https://docs.ethers.org/v5/), [viem](https://viem.sh), or [Web3.js](https://web3js.readthedocs.io/en/v1.8.2/), to name a few options.

- Use your script to call the `submitUsername` function on the contract while supplying your github username (without the @). For a reference example on how this may be done, you could utilise [**Steph's video**](https://youtu.be/GNBHDCGFxtw). If you get stuck, you could always ask us questions in this [**Telegram group**](https://t.me/zkThon), and we'll attempt to assist you.

- Retrieve the transaction URL that was completed onchain with your updated github username and paste it into your new file for `solution-3.md`

**Example:**

```bash
https://explorer.public.zkevm-test.net/tx/0xc62996c8599534f93a404a5b9614357aa36c4166f5230d80bcecf4af995aded8
```
