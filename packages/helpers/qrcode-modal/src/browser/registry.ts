import { IAppRegistry, IAppEntry } from "@walletconnect/types";

const officialAlgorandWallet: IAppEntry = {
  // hex encoding of 32 random bytes
  id: "23138217b046ae8d9d07e62b3337fb288c4445f92f64be067809cd0a8f9454b9",
  name: "Pera Wallet",
  homepage: "https://perawallet.app",
  chains: [
    // need to change once a standard emerges, perhaps https://github.com/ChainAgnostic/CAIPs/pull/55
    "algorand",
  ],
  // randomly generated UUID
  image_id: "1765f9aa-f99e-414e-826b-6b570d480999",
  image_url: {
    sm: "https://algorand-app.s3.amazonaws.com/app-icons/Pera-walletconnect-128.png",
    md: "https://algorand-app.s3.amazonaws.com/app-icons/Pera-walletconnect-128.png",
    lg: "https://algorand-app.s3.amazonaws.com/app-icons/Pera-walletconnect-128.png",
  },
  app: {
    browser: "",
    ios: "https://apps.apple.com/us/app/algorand-wallet/id1459898525",
    android: "https://play.google.com/store/apps/details?id=com.algorand.android",
    mac: "",
    windows: "",
    linux: "",
  },
  mobile: {
    native: "algorand-wc:",
    universal: "",
  },
  desktop: {
    native: "",
    universal: "",
  },
  metadata: {
    shortName: "Pera Wallet",
    colors: {
      // "Pera Wallet yellow"
      primary: "rgb(255, 238, 85)",
      secondary: "",
    },
  },
};

const deflyWallet: IAppEntry = {
  // hex encoding of 32 random bytes
  id: "d60449e250b2be1d5387f31eb323eaaca3a55ccf888999da09d9546c86cda073",
  name: "Defly Wallet",
  homepage: "https://defly.app",
  chains: [
    // need to change once a standard emerges, perhaps https://github.com/ChainAgnostic/CAIPs/pull/55
    "algorand",
  ],
  // randomly generated UUID
  image_id: "d917ff98-f307-4422-94b5-9bee0fc19ee4",
  image_url: {
    sm: "https://static.defly.app/app-icons/defly-walletconnect-128.png",
    md: "https://static.defly.app/app-icons/defly-walletconnect-128.png",
    lg: "https://static.defly.app/app-icons/defly-walletconnect-128.png",
  },
  app: {
    browser: "",
    ios: "https://apps.apple.com/us/app/defly/id1602672723",
    android: "https://play.google.com/store/apps/details?id=io.blockshake.defly.app",
    mac: "",
    windows: "",
    linux: "",
  },
  mobile: {
    native: "defly-wc:",
    universal: "",
  },
  desktop: {
    native: "",
    universal: "",
  },
  metadata: {
    shortName: "Defly",
    colors: {
      primary: "rgb(0, 0, 0)",
      secondary: "",
    },
  },
};

export const registry: IAppRegistry = {
  [officialAlgorandWallet.id]: officialAlgorandWallet,
  [deflyWallet.id]: deflyWallet,
};
