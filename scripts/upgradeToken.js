// scripts/upgrade_box.js
const { ethers, upgrades } = require('hardhat');

async function main () {
  const BoxV2 = await ethers.getContractFactory('NewERC20Upgradeable');
  console.log('Upgrading Box...');
  await upgrades.upgradeProxy('0x32A88a6b3978A39250243Aa2d21b2469DBD4984F', BoxV2);
  console.log('Box upgraded');
}

main();