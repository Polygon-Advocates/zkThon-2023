```JavaScript
const { ethers } = require("ethers");
require("dotenv").config();

const abi = [
  "event NewSubmission(address sender, string message)",
  "function getCurrentSubmission() public view returns (string memory)",
  "function submitUsername(string memory _username) public",
];

// Initialize the provider and contract
function initContract() {
  const provider = new ethers.providers.JsonRpcProvider("https://rpc.public.zkevm-test.net");
  const contractAddress = "0x3aC587078b344a3d27e56632dFf236F1Aff04D56";
  const contract = new ethers.Contract(contractAddress, abi, provider);
  return { contract, provider };
}

// Fetch the current submission
async function getCurrentSubmission(contract) {
  const submission = await contract.getCurrentSubmission();
  return submission;
}

// Submit a username
async function submitUsername(contract, wallet, username) {
  const tx = await contract.connect(wallet).submitUsername(username);
  await tx.wait();
}

// Main function to interact with the contract
async function main() {
  try {
    const { contract, provider } = initContract();

    const submission = await getCurrentSubmission(contract);
    console.log(`Current submission: ${submission}`);

    const privateKey = process.env.PRIVATE_KEY;
    const wallet = new ethers.Wallet(privateKey, provider);

    const username = "edwardtay";
    await submitUsername(contract, wallet, username);
    console.log(`Submitted username: ${username}`);
  } catch (err) {
    console.log(err);
  }
}

main();
```

#### Transaction URL:
https://testnet-zkevm.polygonscan.com/tx/0x8a948c0eb72ecd9739d523369b988aa7125326136dbb459f7138c39fa9cf5bf2
