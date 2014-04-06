var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {return new Buffer(hex, 'hex');};

exports.livenet = {
  name: 'livenet',
  addressVersion: 0x1E,
  magic: hex('c0c0c0c0'),
  genesisBlock: {
    height: 0,
    nonce: 99943,
    version: 1,
    hash: hex('1a91e3dace36e2be3bf030a65679fe821aa1d6ef92e7c9902eb318182c355691'),
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1386325540,
    merkle_root: hex('5b2a3f53f605d62c53e62932dac6925e3d74afa5a4b459745c36d42d0ed26a69'),
    bits: 0x1e0ffff0
  },
  addressPubkey: 0x1E,
  addressScript: 5,
  bip32public: 0x0488b21e,
  bip32private: 0x0488ade4,
  keySecret: 128,
};

exports.testnet = {
  name: 'testnet',
  addressVersion: 0x6f,
  magic: hex('fcc1b7dc'),
  genesisBlock: {
    height: 0,
    nonce: 414098458,
    version: 1,
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602,
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    bits: 486604799,
  },
  genesisBlockTx: module.exports.livenet.genesisBlockTx,
  proofOfWorkLimit: module.exports.livenet.proofOfWorkLimit,
  checkpoints: [], // need to put checkput blocks here
  addressPubkey: 111,
  addressScript: 196,
  bip32public: 0x043587cf,
  bip32private: 0x04358394,
  keySecret: 239,
};
