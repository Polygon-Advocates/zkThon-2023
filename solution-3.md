
### Code to interact with the smartcontract
```sol
import zkAbi from './zkTAbi.json'
const { ethers } = require("ethers");
require('dotenv').config()




function init(){
    const provider = new ethers.providers.JsonRpcProvider('https://rpc.public.zkevm-test.net');
    const cA = '0x3aC587078b344a3d27e56632dFf236F1Aff04D56'
    const contract = new ethers.Contract(cA, zkAbi, provider);
        return {contract, provider}
}

const getCurrentSubmission = async (contract) => {
  const currentSubmission = await contract.getCurrentSubmission();
  return currentSubmission
}

const submitUsername = async (contract, signer, username) => {
  const tx = await contract.connect(signer).submitUsername(username)
  await tx.wait()
  return tx.hash
}

const main = async () => {
  try {
      const { provider, contract } = init()
      // console.log(contract)
      // return;
      const beforeSubmission = await getCurrentSubmission(contract)
      console.log(`Before: ${beforeSubmission}`)
      const privateKey = process.env.METAMASK_PRIVATE_KEY
      console.log(privateKey)
      const signer = new ethers.Wallet(privateKey, provider)
      const username = "CodeLeom"
      const txHash = await submitUsername(contract, signer, username)
      console.log(`Submitted Username is ${username} at ${txHash}`)
      const afterSubmission = await getCurrentSubmission(contract)
      console.log(`After: ${afterSubmission}`)

  } catch (err) {
      console.log(err)
  }
}

main()

```

> Transaction URL
https://testnet-zkevm.polygonscan.com/tx/0x1cb8a78711557cad965fdb979385cc47a076a4c373b88a866b82612619c2ba4e