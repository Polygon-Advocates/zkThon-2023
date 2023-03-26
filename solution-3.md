TXN detail - 0xe0370d3b210b60bcfd13b18e14e44386a08af57c36e482bef6954e36420295cd

Contract add - 0x205e1522c6d3feae87aa9e4130f3b3b5a8ac0300

URL - https://testnet-zkevm.polygonscan.com/tx/0xe0370d3b210b60bcfd13b18e14e44386a08af57c36e482bef6954e36420295cd



### Code - 

<!DOCTYPE html>
<html>
  <head>
    <title>ZkThon Contract Interaction S-3</title>
  </head>
  <body>
    <h1>ZkThon Contract Interaction solution-3</h1>
    <p>: <span id=""></span></p>
    <label for="monk_zkthon"></label>
    <input type="text" id="monk_zkthon" />
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
              "0x205e1522c6d3feae87aa9e4130f3b3b5a8ac0300";

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
