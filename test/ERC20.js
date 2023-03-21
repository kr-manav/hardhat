const { expect } = require("chai");
const { ethers, upgrades } = require("hardhat");

describe("Contract Version 1 test", async function () {
  it("Should return the greeting after deployment", async function () {
    // const OurUpgradeableNFT1 = await ethers.getContractFactory("ERC20Upgradeable");

    // const contract = await upgrades.deployProxy(OurUpgradeableNFT1, ["Manav", "MNV"], { initializer: '__ERC20_init', kind: 'transparent'});
    // await contract.deployed();
    // const ans = await contract.decimals();
    // console.log(ans)
    // expect(ans).to.equal(18);

    const BoxV2 = await ethers.getContractFactory('NewERC20Upgradeable');
  console.log('Upgrading Box...');
  await upgrades.upgradeProxy('0x8A791620dd6260079BF849Dc5567aDC3F2FdC318', BoxV2);
  console.log('Box upgraded');
  const ans = await contract.decimals();
    console.log(ans)
    expect(ans).to.equal(19);
  });
});




