import { useWeb3Modal } from "@web3modal/wagmi/react";
import { supportedChain } from "constants";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useAccount, useDisconnect, useNetwork, useSwitchNetwork } from "wagmi";

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const { open, selectedNetworkId } = useWeb3Modal();
  const { address, isConnected } = useAccount();
  const { disconnect: disconnectWalletConnect } = useDisconnect();
  const [currentAccount, setCurrentAccount] = useState(null);
  const [currentExtensions, setCurrentExtensions] = useState([]);
  const [walletAccounts, setWalletAccounts] = useState(null);
  const [network, setNetwork] = useState(null);

  const updateNetwork = async (networkKey) => {
    setNetwork(networkKey);
    localStorage.setItem("localNetwork", networkKey);
  };

  const currentNetwork = useMemo(
    () => supportedChain.find((e) => e.key == network),
    [network]
  );

  const updateWalletAccount = async (account) => {
    try {
      setCurrentAccount(account);
      localStorage.setItem("localCurrentAccount", JSON.stringify(account));
    } catch (error) {
      // toast.error(error?.response?.data?.message);
      console.log(error);
    }
  };
  const logoutAccountHandler = () => {
    setCurrentAccount(null);
    setWalletAccounts(null);
    localStorage.setItem("localCurrentAccount", null);
    switch (network) {
      case "zkSync":
        disconnectWalletConnect();
        break;
    }
  };

  const connectZkSync = async () => {
    try {
      await open();
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    switch (network) {
      case "zkSync":
        connectZkSync();
        break;
    }
  };

  useEffect(() => {
    (() => {
      const localNetworkKey = localStorage.getItem("localNetwork");
      if (localNetworkKey) setNetwork(localNetworkKey);
      else updateNetwork(supportedChain[0].key);
      const accountData = localStorage.getItem("localCurrentAccount");
      if (accountData) {
        // toast.success("Account connected");
        setCurrentAccount(JSON.parse(accountData));
      }
    })();
  }, []);
  useEffect(() => {
    if (isConnected) setCurrentAccount({ address });
  }, [address, isConnected]);
  return (
    <WalletContext.Provider
      value={{
        currentAccount,
        updateWalletAccount,
        logoutAccountHandler,
        updateExtentions: setCurrentExtensions,
        currentExtensions,
        updateWalletAccounts: setWalletAccounts,
        walletAccounts,
        updateNetwork,
        currentNetwork,
        connectWallet,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);
