# Solution III: Interact With A Deployed Contract On zkEVM Testnet

**Transaction hash** - https://explorer.public.zkevm-test.net/tx/0x2561a7bbddb3a50aac68a07dbcdce4814f5105a6db1e5f527b8bd9cdafbbe706

MInted 2 tokens of TZK(TokenZK built on polygon zkevm)

```html
<html>
<head>
	<title>Interact with ERC20 Smart Contract</title>
	<script src="https://cdn.ethers.io/lib/ethers-5.0.umd.min.js"></script>
</head>
<body>
	<h1>Interact with ERC20 Smart Contract</h1>
	<p>Enter the amount of tokens to mint:</p>
	<input type="text" id="amount" />
	<button onclick="mintTokens()">Mint Tokens</button>
	<div id="output"></div>
	<script>
		// Set up a provider for connecting to the Ethereum network
		const provider = new ethers.providers.JsonRpcProvider("https://rpc.public.zkevm-test.net/");

		// Set the address of the deployed ERC20 contract
		const contractAddress = '0xA607A2A31915ff27cd52871aB450047CC1c88a2b';

		// Set the private key of the account that will be used to mint tokens
		const privateKey = '<YOUR_PRIVATE_KEY>';

		// Create a new instance of the ERC20 contract
		const abi = [
						{
							"anonymous": false,
							"inputs": [
								{
									"indexed": true,
									"internalType": "address",
									"name": "previousOwner",
									"type": "address"
								},
								{
									"indexed": true,
									"internalType": "address",
									"name": "newOwner",
									"type": "address"
								}
							],
							"name": "OwnershipTransferred",
							"type": "event"
						},
						{
							"inputs": [],
							"name": "owner",
							"outputs": [
								{
									"internalType": "address",
									"name": "",
									"type": "address"
								}
							],
							"stateMutability": "view",
							"type": "function"
						},
						{
							"inputs": [],
							"name": "renounceOwnership",
							"outputs": [],
							"stateMutability": "nonpayable",
							"type": "function"
						},
						{
							"inputs": [
								{
									"internalType": "address",
									"name": "newOwner",
									"type": "address"
								}
							],
							"name": "transferOwnership",
							"outputs": [],
							"stateMutability": "nonpayable",
							"type": "function"
						}
					];
					
		const contract = new ethers.Contract(contractAddress, abi, provider);

		// Set the account that will be used to mint tokens
		const account = new ethers.Wallet(privateKey, provider);

		// Set the gas price and gas limit for the transaction
		const gasPrice = ethers.utils.parseUnits('10', 'gwei');
		const gasLimit = 500000;

		// Function to mint tokens when the button is clicked
		async function mintTokens() {
			const amount = ethers.utils.parseUnits(document.getElementById('amount').value, 'ether');

			// Call the mint function on the ERC20 contract
			const tx = await contract.connect(account).mint(account.address, amount, {
				gasPrice: gasPrice,
				gasLimit: gasLimit
			});

			document.getElementById('output').innerHTML = 'Transaction Hash: ' + tx.hash;
		}
	</script>
</body>
</html>
 ```
