const ethers = require("ethers");
const dotenv = require("dotenv");

dotenv.config();

const zkThonContractAddress = "0x3aC587078b344a3d27e56632dFf236F1Aff04D56";

const zkThonContractAbi = [
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

const main = async () => {
    try {
        const provider = new ethers.JsonRpcProvider(process.env.rpc_url);
        const account = new ethers.Wallet(process.env.priveKey, provider);

        const zkThonContract = new ethers.Contract(
            zkThonContractAddress,
            zkThonContractAbi
        );

        const submitUsernameTx = await zkThonContract
            .connect(account)
            .submitUsername("AjayiMike");
        console.log("txhash: ", submitUsernameTx.hash);
        await submitUsernameTx.wait();
        console.log("username has been successfully set!");
    } catch (error) {
        console.log("an error occured: ", error);
    }
};

main();

https://testnet-zkevm.polygonscan.com/tx/0x35bd64760d71ae8570252832aee66f975a3deebaa8326a3c55cfb2b0df9e3790
