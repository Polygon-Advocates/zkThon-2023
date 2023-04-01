https://explorer.public.zkevm-test.net/tx/0x75d3e504839800abc6025099bb697a56a269142da1e9a464354d598b851842d7
😀
```
const { ethers } = require("ethers");

// Ethereum network and provider
const network = "polygon";
const provider = new ethers.providers.JsonRpcProvider("https://rpc.public.zkevm-test.net");

// Wallet
const privateKey = "<PRIVATE_KEY>";
const wallet = new ethers.Wallet(privateKey, provider);

// Contract ABI and address
const contractABI = [
  "event NewSubmission(address sender, string message)",
  "function getCurrentSubmission() public view returns (string memory)",
  "function submitUsername(string memory _username) public",
];
const contractAddress = "0x3aC587078b344a3d27e56632dFf236F1Aff04D56";

// Contract instance
const contract = new ethers.Contract(contractAddress, contractABI, wallet);

// Example function calls
async function getCurrentSubmission() {
  const result = await contract.getCurrentSubmission();
  console.log(result);
}

async function submitUsername(newUsername) {
  await contract.submitUsername(newUsername);
  console.log("Submitted new username:", newUsername);
}

// Run example function calls
getCurrentSubmission();
submitUsername("NEW_USERNAME");
```
