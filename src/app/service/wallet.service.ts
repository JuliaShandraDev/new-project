// import { Injectable } from '@angular/core';
//
// import { TempleWallet } from '@temple-wallet/dapp';
// import { InMemorySigner } from '@taquito/signer';
// import { TezosToolkit } from '@taquito/taquito';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class WalletService {
//
//   constructor() { }
//
//   async syncWallet(): Promise<void> {
//    const Tezos = new TezosToolkit('https://YOUR_PREFERRED_RPC_URL');
//
//     // Tezos.setProvider({ signer: await InMemorySigner.fromSecretKey('edsk...') });
//
// // Using the contract API, the follwing operation is signed using the configured signer:
// //     await Tezos.contract.transfer({ to: "KT1N11kC9LuDnhAWV4r7fr3dFfDUB3HXwkix", amount: 2 });
//
//     // InMemorySigner.fromSecretKey('spsk2Fiz7sGP5fNMJrokp6ynTa4bcFbsRhw58FHXbNf5ProDNFJ5Xq')
//     //   .then((theSigner: any) => {
//     //     Tezos.setProvider({ signer: theSigner });
//     //     //We can access the public key hash
//     //     return Tezos.signer.publicKeyHash();
//     //   })
//     //   .then((publicKeyHash: any) => {
//     //     console.log(`The public key hash associated is: ${publicKeyHash}.`);
//     //   })
//     //   .catch((error: any) =>  console.log(`Error: ${error} ${JSON.stringify(error, null, 2)}`))
//   }
//
// }
