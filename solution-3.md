Code:
```javascript
const { ethers } = require('ethers');
require('dotenv').config();
const abi = [
  'event NewSubmission(address sender, string message)',
  'function getCurrentSubmission() public view returns (string memory)',
  'function submitUsername(string memory _username) public',
];
// Initialize the provider and contract
function initContract() {
  const provider = new ethers.providers.JsonRpcProvider(
    'https://rpc.public.zkevm-test.net'
  );
  const contractAddress = '0x3aC587078b344a3d27e56632dFf236F1Aff04D56';
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
    const username = 'coollaitar';
    await submitUsername(contract, wallet, username);
    console.log(`Submitted username: ${username}`);
  } catch (err) {
    console.log(err);
  }
}
main();
```
# Transaction Hash

https://testnet-zkevm.polygonscan.com/tx/0x67a3a1aadafbe529d4db1420f57b5cf5474cd42e319629055c127c1e29bbdbc3
