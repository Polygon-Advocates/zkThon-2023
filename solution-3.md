# Solution 3

## Code

```ts
import * as dotenv from "dotenv";
dotenv.config();
import { ethers, Contract } from "ethers";
import { contractABI } from "./contractABI";

const main = async () => {
  const jsonRpcUrl = process.env.RPC_URL || "";
  const privateKey = process.env.PRIVATE_KEY || "";
  const provider = new ethers.JsonRpcProvider(jsonRpcUrl);

  const signer = new ethers.Wallet(privateKey, provider);

  const smartContractZkThon = new Contract(
    "0x3aC587078b344a3d27e56632dFf236F1Aff04D56",
    contractABI,
    signer
  );

  const txn = await smartContractZkThon.submitUsername("Arun89-crypto");

  await txn.wait();

  console.log("Username : Arun89-crypto submitted successfully");
};

main();

```

## Transaction URL

[Transaction URL : https://explorer.public.zkevm-test.net/tx/0xd34e2545431a3d75938cf4ea1e5ae98953c42f0383fe5811220d7c5c8cc693ed](https://explorer.public.zkevm-test.net/tx/0xd34e2545431a3d75938cf4ea1e5ae98953c42f0383fe5811220d7c5c8cc693ed)
