# Solution 3

## 🌳 Challenge III: Interact With A Deployed Contract On zkEVM Testnet
- https://explorer.public.zkevm-test.net/tx/0x6a262574a5f7e1a6343dfd805ead01a4a1028b7127d5319c1fa47d929f2868a3

### CODE
```
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8" />
  <title>Connect MetaMask Wallet and Call Smart Contract on Polygon zkEVM Testnet</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/web3/1.9.0/web3.min.js"></script>
</head>

<body>
  <h1>Connect MetaMask Wallet and Call Smart Contract on Polygon zkEVM Testnet</h1>

  <p>
    <button onclick="connectWallet()">Connect Wallet</button>
  </p>

  <p>
    <button onclick="callSmartContract()">Call Smart Contract</button>
  </p>
  <script>

    const provider = new Web3.providers.HttpProvider("https://rpc.public.zkevm-test.net/");
    const web3 = new Web3(provider);

    const chainId = "0x476";
    const contractAddress = "0x3aC587078b344a3d27e56632dFf236F1Aff04D56";
    const contractABI = [
      {
        "type": "constructor",
        "stateMutability": "nonpayable",
        "inputs": [
          { "type": "string", "name": "_username", "internalType": "string" }
        ]
      },
      {
        "type": "event",
        "name": "NewSubmission",
        "inputs": [
          { "type": "address", "name": "sender", "internalType": "address", "indexed": false },
          { "type": "string", "name": "message", "internalType": "string", "indexed": false }
        ],
        "anonymous": false
      },
      {
        "type": "function",
        "stateMutability": "view",
        "outputs": [{ "type": "string", "name": "", "internalType": "string" }],
        "name": "getCurrentSubmission",
        "inputs": []
      },
      {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "submitUsername",
        "inputs": [{ "type": "string", "name": "_username", "internalType": "string" }]
      }
    ];

    // Create a new instance of the contract using the ABI and address
    //const contract = new web3.eth.Contract(abi, contractAddress);
    let contract;
    let walletAddress;

    async function connectWallet() {
      console.log('hellow');
      try {
        if (window.ethereum) {
          await window.ethereum.request({ method: "eth_requestAccounts" });
          window.web3 = new Web3(window.ethereum);
          const account = web3.eth.accounts;
          //Get the current MetaMask selected/active wallet
          walletAddress = account.givenProvider.selectedAddress;
          console.log(`Wallet: ${walletAddress}`);
        }
        else {
          console.log("No wallet");
        }
      } catch (error) {
        console.error(error);
      }
    }

    async function callSmartContract() {
      contract = new window.web3.eth.Contract(contractABI, contractAddress, { from: walletAddress });
      contract.methods.submitUsername('timff').send({
        from: walletAddress,
        gas: 100000
      })
        .then((receipt) => {
          console.log(receipt);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  </script>
</body>

</html>
```