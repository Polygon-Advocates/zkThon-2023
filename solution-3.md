# code used to interact with the contract

import zkThon from "./contracts/zkThon.sol/zkThon.json";

const zkThonAddress = "0xF4e8601BC9Eb86beba458df6ACE0c45149BE7B93";

useEffect(() => {

const fetchUser = async () => {
const data = await readUserValue();
return data;
};

    fetchUser().catch(console.error);

}, []);

async function requestAccount() {
await window.ethereum.request({ method: "eth_requestAccounts" });
}

async function updateUser() {

if (typeof window.ethereum !== "undefined") {

await requestAccount();

const provider = new ethers.providers.Web3Provider(window.ethereum);

console.log({ provider });

const signer = provider.getSigner();

const contract = new ethers.Contract(zkThonAddress, zkThon.abi, signer);

const transaction = await contract.submitUsername("Samrat Mishra");

setIsLoading(true);

await transaction.wait();

setIsLoading(false);

readUserValue();
}
}

const changeUser = async () => {
await updateUser();
};

async function readUserValue() {

if (typeof window.ethereum !== "undefined") {

const provider = new ethers.providers.Web3Provider(window.ethereum);

console.log("provider", provider);

const contract = new ethers.Contract(zkThonAddress, zkThon.abi, provider);

console.log("contract", contract);

try {

const data = await contract.getCurrentSubmission();

console.log(data);

console.log("Current User: ", data);

setUser(data);

} catch (err) {

console.log("Error: ", err);

alert(
"Switch your MetaMask network to Polygon zkEVM testnet and refresh this page!"

);
}
}
}

# contract address

0xF4e8601BC9Eb86beba458df6ACE0c45149BE7B93

# tranction Hash for the contract call

0x30d5d396cba62025606865bbdfbb5eb99d463ea1558751608b65610ffa0a64e9
