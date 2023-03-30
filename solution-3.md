```js
const { ethers } = require("ethers")
const { parseEther } = require("ethers/lib/utils")
require("dotenv").config()

const node = "https://rpc.public.zkevm-test.net"
const provider = new ethers.providers.JsonRpcProvider(node)

const contractAddress = "0x055b1d600A4Ff5b3ca23A7B43A630418221F1489"

const abi = process.env.ABI

const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)
const contract = new ethers.Contract(contractAddress, abi, wallet)

const receiver = "0xfc3ccc5f8adb82de6Ff89262a4E6965BA711C9A1"


async function sendSpring() {
    const balance = await contract.balanceOf(wallet.address)
    console.log("Balance: ", ethers.utils.formatEther(balance)) // 1000.0
    await contract.transfer(receiver, parseEther("10.0"))
    .then ( (tx) => {
        console.log("Transfer successful")
        console.log("Transaction hash: ", tx.hash)
        }
    )
}
sendSpring()
```
