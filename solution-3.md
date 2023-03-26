Code:
```javascript
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
   
    const privateKey = process.env.PRIVATE_KEY;
    const wallet = new ethers.Wallet(privateKey, provider);
    const username = "adityakode";
    await submitUsername(contract, wallet, username);
    console.log(`Submitted username: ${username}`);
    
  } catch (err) {
    console.log(err);
  }
}
main();
```

#Transaction Hash: <br>
https://testnet-zkevm.polygonscan.com/tx/0xc1f9175984f703e7483e5056cfce2c2f8211fab2a1bf80d26807f9874af5defa
