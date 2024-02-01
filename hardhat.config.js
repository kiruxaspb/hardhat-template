require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
const fs = require('fs');

require('dotenv').config({ path: '.env'});
const { INFURA, ETHSKAN } = process.env;

const PRIVATE_KEY = fs.readFileSync(".secret").toString();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.23", // Recommended use latest solc & solidity version
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA}`,
      accounts: [`0x${PRIVATE_KEY}`],
      chainId: 11155111
    },
    holesky: {
      url: `https://ethereum-holesky.publicnode.com`,
      accounts: [`0x${PRIVATE_KEY}`],
      chainId: 17000
    },
    bsc_test: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      accounts: [`0x${PRIVATE_KEY}`],
      chainId: 97 
    }
  }, 
  etherscan: {
    apiKey: ETHSKAN,
  },
};
