```js
require("dotenv").config();
const { ethers } = require("ethers");
const abi = [
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "submitUsername",
    inputs: [{ type: "string", name: "_username", internalType: "string" }],
  },
];
const contractAddress = "0x3aC587078b344a3d27e56632dFf236F1Aff04D56";
const provider = new ethers.JsonRpcProvider(
  "https://rpc.public.zkevm-test.net"
);
async function call() {
  const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  const contract = new ethers.Contract(contractAddress, abi, signer);
  const tx = contract.submitUsername("ivorymichaels");
  console.log("Tx: " + tx);
  const receipt = await tx;
  console.log("Receipt " + receipt);
}
call();
```

Transaction URL https://explorer.public.zkevm-test.net/tx/0x2322bd83abc179617eadee3b703f2e3969985e3b3d058fbd6d50ad9c2dd395c7 
