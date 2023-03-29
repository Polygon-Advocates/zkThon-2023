# Javascript Code

```javascript
const { ethers } = require("ethers");
const abi = [{"type":"constructor","stateMutability":"nonpayable","inputs":[{"type":"string","name":"_username","internalType":"string"}]},{"type":"event","name":"NewSubmission","inputs":[{"type":"address","name":"sender","internalType":"address","indexed":false},{"type":"string","name":"message","internalType":"string","indexed":false}],"anonymous":false},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"getCurrentSubmission","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"submitUsername","inputs":[{"type":"string","name":"_username","internalType":"string"}]}];
const contractAddress = "0x3aC587078b344a3d27e56632dFf236F1Aff04D56";
const provider = new ethers.providers.JsonRpcProvider(
  "https://rpc.public.zkevm-test.net"
);


async function call() {
  const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  const contract = new ethers.Contract(contractAddress, abi, signer);
  const tx = contract.submitUsername("SnowboardTechie");
  console.log("TX: " + tx);
  const receipt = await tx;
  console.log("Receipt " + receipt);
}

call();
```

Contract Address: https://explorer.public.zkevm-test.net/address/0x3aC587078b344a3d27e56632dFf236F1Aff04D56

Trasaction Hash: https://explorer.public.zkevm-test.net/tx/0x69becd858cb8f81bd12f9882db44c53bb6c1e2bbfbc2e97f062bd1232ed88d43
