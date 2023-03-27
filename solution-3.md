TXN NO- 0xb5fc1109b43d4136999b23183bb8e3f129ac48899954de388b341e29ae2b7cd9


URL- https://testnet-zkevm.polygonscan.com/tx/0xb5fc1109b43d4136999b23183bb8e3f129ac48899954de388b341e29ae2b7cd9


Contract- 0x4F8602A89C804FA8e61C3a7cA04A5E160b5C2588



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
              "0x33b111e7dfae0cdd2a5b9fff672ce310f16763aa";

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
