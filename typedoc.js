module.exports = {
  out: 'website/build/typedoc',
  readme: 'packages/taquito/README.md',
  entryPoints: [
    './packages/taquito/src/taquito.ts',
    './packages/taquito-beacon-wallet/src/taquito-beacon-wallet.ts',
    './packages/taquito-http-utils/src/taquito-http-utils.ts',
    './packages/taquito-ledger-signer/src/taquito-ledger-signer.ts',
    './packages/taquito-local-forging/src/taquito-local-forging.ts',
    './packages/taquito-michelson-encoder/src/taquito-michelson-encoder.ts',
    './packages/taquito-remote-signer/src/taquito-remote-signer.ts',
    './packages/taquito-rpc/src/taquito-rpc.ts',
    './packages/taquito-signer/src/taquito-signer.ts',
    './packages/taquito-tezbridge-signer/src/taquito-tezbridge-signer.ts',
    './packages/taquito-tezbridge-wallet/src/taquito-tezbridge-wallet.ts',
    './packages/taquito-tzip12/src/taquito-tzip12.ts',
    './packages/taquito-tzip16/src/taquito-tzip16.ts',
    './packages/taquito-utils/src/taquito-utils.ts',
    './packages/taquito-contracts-library/src/taquito-contracts-library.ts'
  ],
  exclude: [
    '**/*.spec.ts',
    '**/data/**',
    '**/dist/**',
    '**/node_modules/**',
    '**/rollup*.ts',
    '**/test/**',
    '/coverage/**',
  ],
  name: 'Taquito',
  excludePrivate: true,
  gaID: 'G-SJYHCP5Z8P',
  media: './website/static/img/'
};
