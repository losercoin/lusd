const ERC20Token = artifacts.require("ERC20Token");

module.exports = function(deployer) {
  const lpAddress = '0x28118A66Ae5F6b5DCC2AFAa764689081F279aCE0'; //testnet
  //const lpAddress = '0x3642b52519ba81fD8a204b306D2369A0cc1BC612'; //mainnet
  deployer.deploy(ERC20Token, lpAddress);
};
