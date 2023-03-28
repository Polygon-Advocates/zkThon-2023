https://explorer.public.zkevm-test.net/tx/0xf0f50238b15a6775e8bf701bc9eb5779a6e7c69bf5d6afe93088fe8a38bb1b0e
<br><br>const hre = require("hardhat");

async function main() {
  const submissionContract = await ethers.getContractAt(
    "ZkThon",
    "0x3aC587078b344a3d27e56632dFf236F1Aff04D56"
  );

  await submissionContract.submitUsername("0xMycaleum");

  const currentUsername = await submissionContract.getCurrentSubmission();

  console.log(`currentUsername`, currentUsername);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
