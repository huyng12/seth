// Do not run this file via node, use "pnpm deploy instead"
// This script should be run under "hardhat run"

async function bootstrap() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contract with account:", deployer.address);

    const balance = await deployer.getBalance();
    console.log("Account balance:", balance.toString(), "wei");

    const Seth = await ethers.getContractFactory("Seth");
    const seth = await Seth.deploy();
    console.log("Deployed contract at address:", seth.address);
}

bootstrap()
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
