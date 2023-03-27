TXN ID-0x9e21acb687280b7dddb3a2c875a3ec8fbcee6001bf367a0b277bd724441889c9
URL-https://testnet-zkevm.polygonscan.com/tx/0x9e21acb687280b7dddb3a2c875a3ec8fbcee6001bf367a0b277bd724441889c9
Contract-0x78cfcfec5a04b140c0ea83dfe6d6c290c62cfa16



<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
    <h1></h1>
    <p> <span id=""></span></p>
    <label for=""></label>
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
              "0x78cfcfec5a04b140c0ea83dfe6d6c290c62cfa16";

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
