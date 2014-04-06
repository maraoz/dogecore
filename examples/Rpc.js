'use strict';

var run = function() {
  // Replace '../bitcore' with 'bitcore' if you use this code elsewhere.
  var bitcore = require('../bitcore');
  var RpcClient = bitcore.RpcClient;
  var hash = '1a91e3dace36e2be3bf030a65679fe821aa1d6ef92e7c9902eb318182c355691';


//rpcuser=dogecoinrpc
//rpcpassword=HxbLBhfT3fZ7HyGeP4a5JgX3zQUK6JhUAcwqj1hHJeUi

  var config = {
    protocol: 'http',
    user: 'dogecoinrpc',
    pass: 'HxbLBhfT3fZ7HyGeP4a5JgX3zQUK6JhUAcwqj1hHJeUi',
    host: '127.0.0.1',
    port: '22555',
  };

  var rpc = new RpcClient(config);

  rpc.getBlock(hash, function(err, ret) {
    if (err) {
      console.error('An error occured fetching block', hash);
      console.error(err);
      return;
    }
    console.log(ret);
  });
};

module.exports.run = run;
if (require.main === module) {
  run();
}
