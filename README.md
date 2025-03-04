# Sablier Community Token List (Solana)

To add your token to the list, submit a request by
[creating a GitHub issue](https://github.com/sablier-labs/community-token-list-solana/issues/new?assignees=&labels=token+request&template=token-request.md&title=Add+%7BTOKEN_SYMBOL%7D%3A+%7BTOKEN_NAME%7D).

## Cluster and ChainId

In the EVM space every chain / network will adopt a numeric chainId. SVM on the other hand uses clusters
(`mainnet-beta`, `devnet`, `testnet`) to differentiate between networks. We introduce a pseudo chain identifier to
clusters to extends existing functionality relying on numeric identifiers to SPL tokens.

| Cluster        | Pseudo ChainId |
| -------------- | -------------- |
| `mainnet-beta` | `900000010`    |
| `devnet`       | `900000020`    |
| `testnet`      | N/A            |

## Disclaimer

Filing an issue does not guarantee addition to the default token list.

We do not review token addition requests in any particular order, and we do not guarantee that your request will be
accepted.

## Credits

Credits to Moody Salem and the Uniswap Labs team for creating the [Token Lists](https://github.com/Uniswap/token-lists)
standard.
