import { Button, Flex } from "@chakra-ui/react";
import "./walletAccount.css";
import { useWallet } from "contexts/useWallet";

const WalletAccount = () => {
  const { logoutAccountHandler } = useWallet();
  return (
    <Flex direction="column" className="wallet-account-container">
      <Button variant="outline" onClick={() => logoutAccountHandler()}>
        Log Out
      </Button>
    </Flex>
  );
};
export default WalletAccount;
