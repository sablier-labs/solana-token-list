# Sablier Solana Token List

> [!WARNING]
>
> This repository is deprecated. The token list now lives in
> [`sablier-labs/sablier-labs.github.io`](https://github.com/sablier-labs/sablier-labs.github.io).
> File new token requests through the
> [dedicated issue template](https://github.com/sablier-labs/sablier-labs.github.io/issues/new?template=token-request-evm.md).

Legacy instructions below remain for historical context only.

## Hosting

The Sablier Interface pulls the token list from the following URLs:

- [solana-token-list.sablier.com](https://solana-token-list.sablier.com/tokenlist.json) (GitHub Pages)
- [solana-token-list.sablier.io](https://solana-token-list.sablier.io) (an IPFS gateway, used as a fallback)

## Cluster and ChainId

In the EVM space every chain / network will adopt a numeric chainId. SVM on the other hand uses clusters
(`mainnet-beta`, `devnet`, `testnet`) to differentiate between networks. We introduce a pseudo chain identifier to
clusters to extends existing functionality relying on numeric identifiers to SPL tokens.

| Cluster        | Pseudo ChainId |
| -------------- | -------------- |
| `mainnet-beta` | `900000010`    |
| `devnet`       | `900000020`    |
| `testnet`      | N/A            |
