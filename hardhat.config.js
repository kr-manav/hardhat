require("@nomicfoundation/hardhat-toolbox");
require('@nomiclabs/hardhat-ethers');
require('@openzeppelin/hardhat-upgrades');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "goerli",
  networks: {
    hardhat: {
    },
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/rZe2OB0BpJ5r5HR3Aoj2f1e4nkTe9wxb",
      accounts: ["8cd6a6795c425bcbe6a63883f44b2bff98cb57275ceaadda43a947e56837cc75"]
    }
  },
  solidity: "0.8.18",
};