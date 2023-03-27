TX url: https://explorer.public.zkevm-test.net/tx/0xb596067652c969d707a0c9fce82c3fa3976ef354941b0b53e2f3333aa91b0da6

```js
const { Contract, JsonRpcProvider, Wallet } = require("ethers");
require('dotenv').config()

const CONTRACT_ABI = [
  {
    type: "constructor",
    stateMutability: "nonpayable",
    inputs: [{ type: "string", name: "_username", internalType: "string" }],
  },
  {
    type: "event",
    name: "NewSubmission",
    inputs: [
      {
        type: "address",
        name: "sender",
        internalType: "address",
        indexed: false,
      },
      {
        type: "string",
        name: "message",
        internalType: "string",
        indexed: false,
      },
    ],
    anonymous: false,
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "string", name: "", internalType: "string" }],
    name: "getCurrentSubmission",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "submitUsername",
    inputs: [{ type: "string", name: "_username", internalType: "string" }],
  },
];
const CONTRACT_ADDRESS = "0x3aC587078b344a3d27e56632dFf236F1Aff04D56";
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const main = async () => {
  const provider = new JsonRpcProvider("https://rpc.public.zkevm-test.net");
  const contract = new Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);
  const signer = new Wallet(PRIVATE_KEY, provider)

  const tx = await contract.connect(signer).submitUsername('ipapandinas')
  await tx.wait()
  console.log(tx.hash)
};

main();
```