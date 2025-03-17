import { AlgorandClient } from "@algorandfoundation/algokit-utils";

export const algorand = AlgorandClient.fromConfig({
  algodConfig: {
    server: "https://mainnet-api.algonode.cloud",
  },
});

