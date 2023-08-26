const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  const Marketplace = await hre.ethers.getContractFactory("Marketplace");
  const marketplace = await Marketplace.deploy();

  await marketplace.deployed();

  console.log("Marketplace contract deployed to:", marketplace.address);

  // Your other contract interactions here
  // ...
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
