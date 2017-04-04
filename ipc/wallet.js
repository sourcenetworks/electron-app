const Promise = require('bluebird');
const Source = require('@sourcenetworks/background-lib').default;
const promiseIpc = require('electron-promise-ipc').default;

module.exports = (config) => {

  var url = 'http://localhost:8545';
  var addresses;
  var address = 0xedb5a1aabbf073d7c69305a94f47a119943e8818;
  var myMnemonic = '';

  promiseIpc.on('createAccount', (password) => {

    return Source.generateMnemonic()
      .then(mnemonic => {
        myMnemonic = mnemonic;
        console.log(myMnemonic);
        return Source.recoverKeystore(password, mnemonic)
          .then(data => {
            data.keystore.generateNewAddress(data.pwDerivedKey, 5);
            addresses = data.keystore.getAddresses().map(addr => `0x${addr}` );
            address = addresses[0];
            return console.log(address);
          });
      });
    });

  // @todo: sign and send a transaction
  promiseIpc.on('createProvider', (password) => {

    console.log('hello world');
    console.log();

    return Source.createProvider({
      rpcUrl: url, // We'll have to check for this
      getAccounts: (callback) => {
        return callback(null, addresses);
      },
      approveTransaction: (txData, callback) => {
        return callback(null, true);
      },
      signTransaction: (txData, callback) => {
        return signTransaction(txData, password)
        .then(signedTx => callback(null, signedTx));
      },
    }).then(({engine}) => console.log('set up the provider at ' + engine.rpcSubprovider.url));
  });
};
