# cpeg-app

> **Status: Testnet (Base Sepolia)**
> Mainnet deployment pending.

Full stack web application for the CPEG protocol on Base. Landing page, API server, and on-chain event indexer for real-time NFT tier tracking.

---

## What is CPEG

CPEG (Commit Photographic Experts Group) is a dynamic soulbound ERC-1155 NFT protocol on Base. Every wallet that holds CPEG tokens automatically receives a pixel art NFT that evolves in rarity based on how many tokens are held.

- Buy tokens. NFT mints automatically.
- Hold more. NFT upgrades automatically.
- Sell. NFT burns or downgrades automatically.
- Earn. Higher tier NFTs earn a larger share of trading fee rewards.

---

## Stack

- **Frontend:** React 18, Vite, Tailwind CSS, shadcn/ui, framer-motion
- **API:** Express 5, Pino logger
- **Database:** PostgreSQL, Drizzle ORM
- **Chain:** Base (EVM), ethers.js
- **Fonts:** Press Start 2P (pixel headings), Inter (body)
- **Package manager:** pnpm workspaces

---

## Structure

```
artifacts/
  clankpeg/        Landing page (React + Vite)
  api-server/      Express API + on-chain indexer
lib/
  api-spec/        OpenAPI 3.1 contract
  api-client-react/ Generated React Query hooks
  api-zod/         Generated Zod schemas
  db/              Drizzle ORM schema and migrations
contracts/         Smart contracts (separate pnpm workspace)
```

---

## Running Locally

```bash
pnpm install

# Landing page
pnpm --filter @workspace/cpeg run dev

# API server
pnpm --filter @workspace/api-server run dev

# Typecheck all packages
pnpm run typecheck
```

---

## Contracts (Base Sepolia)

| Contract | Address |
|---|---|
| MockCPEG token | `0x975eef6b0518d17fF300cd17D845bb3034C535CB` |
| CPEG NFT | `0x2E0033cBEf75c07c145080CC759cB04BAf0876E2` |

---

## Related Repos

- [cpeg-contracts](https://github.com/CPEGdev/cpeg-contracts) - Solidity smart contracts
- [cpeg-nft-registry](https://github.com/CPEGdev/cpeg-nft-registry) - On-chain NFT event ledger

---

## Links

- Website: https://cpeg.io
- GitHub: https://github.com/CPEGdev
