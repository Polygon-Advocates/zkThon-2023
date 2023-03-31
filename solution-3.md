# url transaction
https://explorer.public.zkevm-test.net/tx/0x80c197aa9fcd3ebed98a5e0b617f75edd1df4275f1eb54dd5b071c35afb8745a

# source code
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Interacción con Smart Contract zkThon</title>
    <script src="https://cdn.ethers.io/scripts/ethers-v3.min.js" charset="utf-8" type="text/javascript">
    </script>
    <script type="text/javascript">
      const process = async function () {
        if (typeof window.ethereum !== "undefined") {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const accounts = await ethereum.request({
            method: "eth_requestAccounts",
          });
          const contractAddress = "0x3aC587078b344a3d27e56632dFf236F1Aff04D56";
          const contractABI = [{"type":"constructor","stateMutability":"nonpayable","inputs":[{"type":"string","name":"_username","internalType":"string"}]},{"type":"event","name":"NewSubmission","inputs":[{"type":"address","name":"sender","internalType":"address","indexed":false},{"type":"string","name":"message","internalType":"string","indexed":false}],"anonymous":false},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"getCurrentSubmission","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"submitUsername","inputs":[{"type":"string","name":"_username","internalType":"string"}]}];
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );

          console.log("provider", provider);
          console.log("contract", contract);
          console.log("wallet", accounts[0]);
          console.log("signer", signer);

          const name = await contract.getCurrentSubmission();
          console.log("current Submission", name);

          const newName = "dappsar";
          const transaction = await contract.submitUsername(newName);
          await transaction.wait();
          console.log("transaction", transaction);
        
        } else {
          console.error('metamask not installed or blocked');
        }
      }

      process();
    </script>
  </head>
  <body>
    <h1>Interaccion con Smart Contract zkThon</h1>
  </body>
</html>
```