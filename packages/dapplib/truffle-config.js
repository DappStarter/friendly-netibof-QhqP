require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remember smile inner enrich orange snow'; 
let testAccounts = [
"0xa044efbe5a8982b2fa557c610c7d8f81f3b9a0f566523b84d333b4f6b69b9999",
"0x41b1540a97e4976ea619e180fdaa731093699efb1ceef0406b68bfbc53a54bc4",
"0x7033acd94a911a705ae12a85c3a95591f18f0426803edb307b865d2d665c2bba",
"0xf40b3ad331644364019e41fe8733dfc0440b67a3cfb3b3f271563880edf32c6f",
"0x6d8095d11e832902cebc5c254c4cea7c56497903cdf0ac0d3b113c107b0354b5",
"0xfa707ee21ef18769862cf6a835cf16611bb695605d023cee310e4982cde4693c",
"0x6313d3867f60af229be131480d7e6b354a9aba343edfe13696f62cf942186284",
"0x0a975e74cb4e7ed625e268be5f73fa077ed949fa50f58ddc2bc08a1869ab876a",
"0xf97133ef0022eb363fad475710d87cd983af49da7790c3522441197c5818b827",
"0x614efc27bd5d5e687a23e62377230f4e47bf3fe58d6499db8ce8d392be9ca1c0"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


