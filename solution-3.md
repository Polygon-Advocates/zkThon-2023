Performed transfer function of the contract 0xf90c6e4ef210f05415c9f0db42d5e92906388c06

```bash
# Transaction Address
TxHash - 0x53a3aad8e2cd04eaf7a3b4f6d43b21e735b81037a8009b8c1a6d11eed7a6391c
https://testnet-zkevm.polygonscan.com/tx/0x53a3aad8e2cd04eaf7a3b4f6d43b21e735b81037a8009b8c1a6d11eed7a6391c

# Contract Address
https://testnet-zkevm.polygonscan.com/address/0xf90c6e4ef210f05415c9f0db42d5e92906388c06
Contract Address - 0xf90c6e4ef210f05415c9f0db42d5e92906388c06
```

Code -

```solidity

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";

contract ChadToken is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("ChadToken", "CHAD") {
        _mint(msg.sender, 1000000000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}

```
Ethersjs code to interact the contract's transfer function
for transfering 200 tokens

```ethersjs

const { ethers } = require('ethers');
require('dotenv').config();

// Replace the contract address with your own value
const contractAddress = '0xf90c6e4ef210f05415c9f0db42d5e92906388c06';

// Set up a provider and signer using the private key from the environment variable
const provider = new ethers.providers.JsonRpcProvider();
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

// Create an instance of the ChadToken contract
const contract = new ethers.Contract(contractAddress, abi, signer);

// Set the recipient and amount to transfer
const recipient = '0xd9a9D3c265a875b0F97C45db50ade3c0a3fbEFd0';
const amount = ethers.utils.parseUnits('200', 'ether'); // Transfer 200 CHAD tokens

// Call the transfer function
async function transfer() {
  const tx = await contract.transfer(recipient, amount);
  console.log('Transaction hash:', tx.hash);
}

transfer();


```