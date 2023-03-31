# Transaction Link

https://explorer.public.zkevm-test.net/tx/0xcfa174345f669ddc06b72ecd675fca193ee2599c491475a799c46765c5ffa824

```js
const { ethers } = require("ethers");
require("dotenv").config()
const abi = [
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
const contractAddress = "0x3aC587078b344a3d27e56632dFf236F1Aff04D56";
const provider = new ethers.providers.JsonRpcProvider(
  "https://rpc.public.zkevm-test.net"
);
async function call() {
  const signer = new ethers.Wallet(process.env.ACCOUNT_PRIVATE_KEY, provider);
  const contract = new ethers.Contract(contractAddress, abi, signer);
  const tx = contract.submitUsername("0xPrakharG");
  console.log("TX: " + tx);
  const receipt = await tx;
  console.log("Receipt " + receipt);
}
call();
```