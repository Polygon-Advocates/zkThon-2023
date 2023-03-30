
# zkThon challenge-3 solution

### Contract Address: 0x608cfd60770ccbabb175e2c947aa6582d4cdcefb

## This is the transaction url link

#### https://testnet-zkevm.polygonscan.com/tx/0x29880e6a290f7b316ad4c4ffd56290a440dd58a7571e5de4a6b897799cfaff4d

## The code I used to interact with the contract

```
import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers';
import contractAddress from './utils/zkthon-address.json';
import abi from './utils/zkthon-abi.json'

const App = () => {
  const [amount, setAmount] = useState(0);
  const [account, setAccount] = useState("");
  const [address, setAddress] = useState("");


  const ifConnected = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        alert("Metamask not installed")
      }

      const accounts = await ethereum.request({ method: "eth_accounts" })
      if (accounts.length > 0) {
        setAccount(accounts[0]);
        console.log("connected to: ", accounts[0]);
      } else {
        console.log("No account found")
      }

    } catch (e) {
      console.log(e);
    }
  }

  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        alert("Metamask not installed")
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" })
      setAccount(accounts[0]);
      console.log(accounts[0]);

    } catch (e) {
      console.log(e);
    }
  }

  const transferToken = async() => {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const zkThon = new ethers.Contract(
          contractAddress.address,
          abi.abi,
          signer
        )

        const transferTx = await zkThon.transfer(`${address}`, `${amount}`);
        transferTx.wait();


      } else {
        console.log("Eth object not found")
      }
    } catch (e) {
      console.log(e);
    }

  }

  

  useEffect(()=> {
    ifConnected();
  },[]);



  return (
    <div className='flex flex-col justify-center items-center gap-4 bg-black  h-screen text-white'>
        <button className='w-28 h-10 bg-sky-800 font-semibold rounded-md' onClick={connectWallet}>
          {account !== null ? (
            <span>Connected</span>
          ) : (
            <span>Connect Wallet</span>
          )}
        </button>
        <h2 className='font-bold text-xl'>Your are connected to this address: {account}</h2>
        <input onChange={e => setAddress(e.target.value)} className='w-1/3 h-10 outline-none rounded-md text-black px-3 font-semibold' placeholder='Enter the address' />
        <input onChange={e => setAmount(e.target.value)} className='w-1/3 h-10 outline-none rounded-md text-black px-3 font-semibold' placeholder='Enter the amount' />
        <button onClick={transferToken} className='w-36 h-10 bg-sky-700 font-semibold hover:bg-sky-500 rounded-md'>Transfer</button>
    </div>
  )
}

export default App

```

