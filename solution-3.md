# Code :
const { ethers } = require('ethers');
const network = 'polygon';
const provider = new ethers.providers.JsonRpcProvider(
  'https://rpc.public.zkevm-test.net'
);

const privateKey = "<PRIVATE_KEY>";
const wallet = new ethers.Wallet(privateKey, provider);
// Contract ABI and address
const contractABI = [
  'event NewSubmission(address sender, string message)',
  'function getCurrentSubmission() public view returns (string memory)',
  'function submitUsername(string memory _username) public',
];
const contractAddress = '0x3aC587078b344a3d27e56632dFf236F1Aff04D56';

const contract = new ethers.Contract(contractAddress, contractABI, wallet);

async function getCurrentSubmission() {
  const result = await contract.getCurrentSubmission();
  console.log(result);
}
async function submitUsername(newUsername) {
  await contract.submitUsername(newUsername);
  console.log('Submitted new username:', newUsername);
}

getCurrentSubmission();
submitUsername('NEW_USERNAME');


# Contract Address  :
https://explorer.public.zkevm-test.net/address/0x3aC587078b344a3d27e56632dFf236F1Aff04D56

# Transaction Hash of Contract Interaction where I send few tokens to my other wallet address 0x3e18832fC412Cc636D1fF315236694126D71D376 :
https://explorer.public.zkevm-test.net/tx/0xd574e9a6f6948805e8bfca142773c8294762600f8ecdf31c833460d5664b5e5e
