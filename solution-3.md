contract address:- 0x517b987964b4fd40b9d8acfe11c6ca61d34f28ff
transaction url:- https://explorer.public.zkevm-test.net/tx/0x2fa8ebbffa623a0400f940f2162a74b4c4dcfec64bb7fa51abe4d0ab97f2a0d9


''' js

const { ethers, parseUnits } = require('ethers');

require('dotenv').config();

const abi = require('./abi.json').abi;

const contractAddress = '0x517b987964b4fd40b9d8acfe11c6ca61d34f28ff';

const provider = new ethers.JsonRpcProvider('https://rpc.public.zkevm-test.net');

const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

const contract = new ethers.Contract(contractAddress, abi, signer);

async function call() {
    await contract.mint("0xfc3ccc5f8adb82de6Ff89262a4E6965BA711C9A1", parseUnits("1000000"));
    console.log("Successfull!!")
}

call()

'''
