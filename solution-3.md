const { ethers } = require('ethers');

const ZkThonAbi = [
    "function submitUsername(string memory _username)"
];

const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);

const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

const IZkToken = new ethers.Interface(ZkThonAbi);
const zkCallData = IZkToken.encodeFunctionData("submitUsername", ['@abhishek-Kumar009']);

async function main() {
    const updateUserNameOption = {
        to: '0x3aC587078b344a3d27e56632dFf236F1Aff04D56',
        value: 0,
        data: zkCallData
    };

    const updateUserNameTx = await signer.sendTransaction(updateUserNameOption);

    console.log(updateUserNameTx, 'Update txn details');
};

main();
