Our last challenge was to interact with the previously deployed Smart Contract, minting a new zkT Token. \
It has been done with the ethers library.

The transaction is the following one: [Link](https://explorer.public.zkevm-test.net/tx/0xd2f743de008c8afb09aa1000c7ccb60f14dfdb0234d632a7bb591662ffe96df0)
- 0xd2f743de008c8afb09aa1000c7ccb60f14dfdb0234d632a7bb591662ffe96df0 


```
<!DOCTYPE html>
<html>
    <head>
        <script
      src="https://cdn.ethers.io/lib/ethers-5.2.umd.min.js"
      type="application/javascript"
        ></script>
        <title>My NFT</title>
    </head>
   
   <body>
    <h1></h1>
    <div id="wallet"></div>
    <br/>
    <button id="mint">Mint</button>
    <script>
        const contractABI = "INSERT HERE YOUR ABI";
            

        //WALLET
        const provider = new ethers.providers.JsonRpcProvider('https://rpc.public.zkevm-test.net');
        const network = 'polygon';
        const privateKey = '"INSERT HERE YOUR PRIVATE KEY';
        const wallet = new ethers.Wallet(privateKey, provider);

        //CONTRACT that we are going to interact with
        //This contract was deployed in order to mint a ERC721 token: zkT.
        const contractAddress = "0xF6b705595E95c8D94E22B38570e79f8BaFa39558";

        const contract = new ethers.Contract(contractAddress, contractABI, wallet);

        //wallet connection
        (async function () {
        document.getElementById("wallet").innerText =
          "Your wallet is " + wallet.address + " press the button to mint NFT \n This is a NFT minting test on ZK-EVM, for the zkThon";
        })();
           
        // My function call
        async function safeMint() {
            console.log(wallet);
            const result = await contract.safeMint(wallet.address);
            console.log(result);
        }        
        
         document.getElementById("mint").addEventListener("click", function() {
            console.log("Minting NFT")
            safeMint();
        });
        </script>
</body>
</html>


```
