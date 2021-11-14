require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'just problem forget venture strong razor miss puppy include end army general'; 
let testAccounts = [
"0x243f799d8502f1c1d144dfb01f0ca3fc3f9fe06046718d521865d6ad8e811740",
"0x2c524119966a9cb539a06e9f7135e0ba1ef4d40690fd298e17e037b943aebae2",
"0x281720e40b1188009bff6caa10b9bd7db076251020cbcf6bd82a6ad429dcd911",
"0xff9b8bc450b446ddf0ae0869531efc32371311249ad129c0c687f6ef66dccbcc",
"0x55bf2c36bfac5e1fad157eba2f74313d58c90651043356b9171bc191b60a2a3b",
"0xa80aa618d0fd393e9b9e1f4576c2ace1bb57138d0ad82dedbf25bd7f6c0c6525",
"0x30cb2535908616338029e470c262e54938a35a4abe0f82f08280a3e6def40202",
"0x11c574fde0c0908e7b38257ccf888e6ebfeca4f55d1ea1ddb7c33f5d76b6e22b",
"0xaf52872f78a40cf263eb3a1a267b27ea75f495f32c0dfb21f1f87d4837d9a828",
"0xc5b460af0f76c290c2751b6f8ccf7d612a7fd8f1746ce75eebfdf66be832681d"
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


