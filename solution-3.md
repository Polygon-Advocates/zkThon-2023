TXN details - 0xb50ff370f0308207e6bebb97de2e57e8f9392e8c


https://testnet-zkevm.polygonscan.com/tx/0x22c01a3fc7524843678f7bccb37122c20f5f4c1222c7894ffe0e2744d978ca0c


### Code used 
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
    <h1></h1>
    <p> <span id="currentSubmission"></span></p>
    <label for="newUsername"></label>
    <input type="text" id="newUsername" />
    <button class="submit-btn"></button>

    <script>
      // Check if MetaMask is installed and connected
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);

        // Request account access if needed
        window.ethereum
          .request({ method: "eth_requestAccounts" })
          .then(() => {
            // Define contract ABI
            const abi = [
              {
                inputs: [
                  {
                    internalType: "string",
                    name: "_username",
                    type: "string",
                  },
                ],
                stateMutability: "nonpayable",
                type: "constructor",
              },
              {
                inputs: [],
                name: "getCurrentSubmission",
                outputs: [
                  {
                    internalType: "string",
                    name: "",
                    type: "string",
                  },
                ],
                stateMutability: "view",
                type: "function",
              },
              {
                inputs: [
                  {
                    internalType: "string",
                    name: "_username",
                    type: "string",
                  },
                ],
                name: "submitUsername",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function",
              },
            ];

            // Define contract address
            const contractAddress =
              "0xb50ff370f0308207e6bebb97de2e57e8f9392e8c";

            // Create contract instance
            const contract = new web3.eth.Contract(abi, contractAddress);
            console.log(contract);

            // Display current submission on page load
            contract.methods.getCurrentSubmission().call((error, result) => {
              if (error) {
                console.error(error);
                return;
              }
              document.getElementById("currentSubmission").textContent = result;
            });

            // Submit new username on button click
            const btn = document.querySelector(".submit-btn");
            function submitUsername() {
              const newUsername = document.getElementById("newUsername").value;
              contract.methods
                .submitUsername(newUsername)
                .send(
                  { from: web3.eth.defaultAccount },
                  (error, transactionHash) => {
                    if (error) {
                      console.error(error);
                      return;
                    }
                    console.log("Transaction hash:", transactionHash);
                  }
                );
            }
            btn.addEventListener("click", submitUsername);
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        console.error("MetaMask not detected");
      }
    </script>
  </body>
</html>
