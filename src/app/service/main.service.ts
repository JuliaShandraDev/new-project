// import { Injectable } from '@angular/core';
//
// // import { TempleWallet } from '@temple-wallet/dapp';
// import { InMemorySigner } from '@taquito/signer';
// import { TezosToolkit } from '@taquito/taquito';
// import { BeaconWallet } from '@taquito/beacon-wallet';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class MainService {
//
//   constructor() {}
//   // http://localhost:4200/
//
//   syncWallet(): void{
//     const Tezos = new TezosToolkit('https://YOUR_PREFERRED_RPC_URL');
//     InMemorySigner.fromSecretKey('spsk2Fiz7sGP5fNMJrokp6ynTa4bcFbsRhw58FHXbNf5ProDNFJ5Xq')
//       .then((theSigner: any) => {
//         Tezos.setProvider({ signer: theSigner });
//         //We can access the public key hash
//         return Tezos.signer.publicKeyHash();
//       })
//       .then((publicKeyHash: any) => {
//         console.log(`The public key hash associated is: ${publicKeyHash}.`);
//       })
//       .catch((error: any) =>  console.log(`Error: ${error} ${JSON.stringify(error, null, 2)}`));
//   }
//
//   wallet(): void{
//     const Tezos = new TezosToolkit('https://YOUR_PREFERRED_RPC_URL');
//     const options = { name: 'exampleWallet' };
//     const wallet = new BeaconWallet(options);
//       // @ts-ignore
//     wallet.requestPermissions({ network: { type: 'hangzhounet' } })
//       .then((_) => wallet.getPKH())
//       .then((address) => console.log(`Your address: ${address}`));
//
//     Tezos.setWalletProvider(wallet);
//   }
// }
// // Адрес контракта токена: KT1N11kC9LuDnhAWV4r7fr3dFfDUB3HXwkix
// // Идентификатор токена: 2
