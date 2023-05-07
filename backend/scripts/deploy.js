const hre = require("hardhat");

async function main() {
  const Insta = await hre.ethers.getContractFactory("Insta");
  const insta = await Insta.deploy();

  await insta.deployed();

  console.log(`Lock with 1 ETH and  deployed to ${insta.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// 0x20ea47A9CBc4B2c4Aa21567e3DaDdDe77f9BD3f0
