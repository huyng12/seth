require("@nomiclabs/hardhat-waffle");

const { ALCHEMY_API_KEY, ROPSTEN_PRIVATE_KEY } = process.env;
if (
    typeof ALCHEMY_API_KEY === undefined ||
    typeof ROPSTEN_PRIVATE_KEY === undefined
) {
    throw Error(
        "Missing environment variables: ALCHEMY_API_KEY or ROPSTEN_PRIVATE_KEY"
    );
}

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    solidity: "0.8.4",
    networks: {
        ropsten: {
            url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
            accounts: [`0x${ROPSTEN_PRIVATE_KEY}`],
        },
    },
};
