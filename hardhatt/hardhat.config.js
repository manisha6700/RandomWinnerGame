require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const {QUICKNODE_HTTP_URL,
PRIVATE_KEY,
POLYGONSCAN_KEY} = process.env

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai:{
      url:QUICKNODE_HTTP_URL,
      accounts:[PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey:{
      polygonMumbai: POLYGONSCAN_KEY
    }
  }
};
