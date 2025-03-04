const { version } = require("../package.json");

const solanaMainnetBeta = require("./tokens/solana-mainnet-beta.json");
const solanaDevnet = require("./tokens/solana-devnet.json");

module.exports = function buildList() {
  const parsed = version.split(".");
  const list = {
    name: "Sablier Community Default (Solana)",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI: "https://files.sablier.com/icon-180x180.png",
    keywords: ["sablier", "default", "solana"],
    tokens: [...solanaMainnetBeta, ...solanaDevnet]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.cluster === t2.cluster) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.cluster.localeCompare(t2.cluster);
      }),
  };

  return list;
};
