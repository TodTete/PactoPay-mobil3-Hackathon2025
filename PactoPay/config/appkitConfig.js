// app/config/appkitConfig.js
import "@walletconnect/react-native-compat";
import { mainnet, polygon, arbitrum } from "@wagmi/core/chains";
import { createAppKit, defaultWagmiConfig } from "@reown/appkit-wagmi-react-native";

const projectId = process.env.REOWN_PROJECT_ID || "9650653f7e11614d96af74f01e484c66";

const metadata = {
  name: "PactoPay",
  description: "PactoPay - Pagos transparentes para freelancers",
  url: "https://pactopay.example",
  icons: ["https://example.com/placeholder-icon.png"],
  redirect: {
    native: process.env.APP_SCHEME || "pactopay://",
    universal: process.env.UNIVERSAL_LINK || "https://your-universal-link.example",
  },
};

const chains = [mainnet, polygon, arbitrum];

export const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

createAppKit({
  projectId,
  metadata,
  wagmiConfig,
  defaultChain: mainnet,
  enableAnalytics: false,
});
