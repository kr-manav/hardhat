const { ethers, upgrades } = require('hardhat');

async function main () {
  const erc20 = await ethers.getContractFactory('ERC20Upgradeable');
  console.log('Deploying Box...');
  const erctoken = await upgrades.deployProxy(erc20, ["MANAV", "MNV"], { initializer: '__ERC20_init' });
  await erctoken.deployed();
  console.log('Box deployed to:', erctoken.address);
}

main();