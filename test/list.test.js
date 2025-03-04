const packageJson = require("../package.json");
const { expect } = require("chai");
const buildList = require("../src/buildList");
const { assertIsAddress } = require("@solana/kit");

let defaultTokenList;

before(async function () {
  // https://stackoverflow.com/questions/44149096
  this.timeout(540000);
  defaultTokenList = await buildList();
});

describe("buildList", function () {
  it("contains no duplicate addresses", function () {
    const map = {};
    for (let token of defaultTokenList.tokens) {
      const key = `${token.cluster}-${token.address}`;
      expect(typeof map[key]).to.equal("undefined");
      map[key] = true;
    }
  });

  it("all addresses are valid", function () {
    for (let token of defaultTokenList.tokens) {
      expect(() => assertIsAddress(token.address)).to.not.throw();
    }
  });

  it("version matches package.json", function () {
    expect(packageJson.version).to.match(/^\d+\.\d+\.\d+$/);
    expect(packageJson.version).to.equal(
      `${defaultTokenList.version.major}.${defaultTokenList.version.minor}.${defaultTokenList.version.patch}`,
    );
  });
});
