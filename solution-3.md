TX: https://explorer.public.zkevm-test.net/tx/0xdd5381d0f7bd93b1a9e212367427194fa1c6997ed46bc99ac492fb91536bdcd9

```html

<!DOCTYPE html >
  <html>
    <head>
      <script
        src="https://cdn.ethers.io/lib/ethers-5.2.umd.min.js"
        type="application/javascript"
      ></script>
      <title>Task 3</title>
    </head>

    <body>
      <h1></h1>
      <div id="wallet"></div>
      <br />
      <button id="transact">Execute!</button>
      <script>
      //const { Contract, JsonRpcProvider, Wallet } = require("ethers");
  //require('dotenv').config()
  const ABI = [
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
  const CADDRESS = "0x3aC587078b344a3d27e56632dFf236F1Aff04D56";
  const PRIVATE_KEY = "YOUR PRIVATE KEY HERE";
  const main = async () => {
    const provider = new ethers.providers.JsonRpcProvider('https://rpc.public.zkevm-test.net');
    const network = 'polygon';
    const contract = new ethers.Contract(CADDRESS, ABI, provider);
    const signer = new ethers.Wallet(PRIVATE_KEY, provider);
    const block = await contract.connect(signer).submitUsername('IgnacioNavarro');
    await block.wait();
    console.log(block.hash);
  };


  //main();

  document.getElementById("transact").addEventListener("click", function() {
            console.log("Transaction progress...")
            main();
        });
      </script>
    </body>
  </html>


```
