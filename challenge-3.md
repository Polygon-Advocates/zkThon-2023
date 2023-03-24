# 🌳 Challenge III: Interact With A Deployed Contract On zkEVM Testnet 


## Code of the execution script:

```JavaScript
const { ethers } = require("ethers");
require("dotenv").config();

const abi = [
  "event NewSubmission(address sender, string message)",
  "function getCurrentSubmission() public view returns (string memory)",
  "function submitUsername(string memory _username) public",
];

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(
    "https://rpc.public.zkevm-test.net"
  );

  const contractAddress = "0x3aC587078b344a3d27e56632dFf236F1Aff04D56";
  const contract = new ethers.Contract(contractAddress, abi, provider);

  const submission = await contract.getCurrentSubmission();
  console.log(`Current submission: ${submission}`);

  const privateKey =
    "private key";
  const wallet = new ethers.Wallet(privateKey, provider);

  const username = "Sud0-AP";
  const tx = await contract.connect(wallet).submitUsername(username);
  await tx.wait();

  console.log(`Submitted username: ${username}`);
}

main().catch((err) => console.log(err));

```

## Transaction URL:

https://explorer.public.zkevm-test.net/tx/0xf2d7de6eee08a37e890a35bda440d6f4c5dae2908a957db9679b96249d51becd

## Transaction Hash :

0xf2d7de6eee08a37e890a35bda440d6f4c5dae2908a957db9679b96249d51becd


## Contract Address:

0x3aC587078b344a3d27e56632dFf236F1Aff04D56
