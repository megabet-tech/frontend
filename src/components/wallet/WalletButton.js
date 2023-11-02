import {
  Button,
  Collapse,
  Flex,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { MGBAlertDialog } from "components/Alert";
import { supportedChain } from "constants";
import { useWallet } from "contexts/useWallet";
import { useState } from "react";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";
import { BiWalletAlt } from "react-icons/bi";
import { useAccount } from "wagmi";
import "./walletButton.css";
import { addressShortener } from "utils";
import WalletAccount from "./WalletAccount";

const WalletNotConnected = ({ closeSidebar }) => {
  const { connectWallet } = useWallet();

  return (
    <>
      <Button
        onClick={() => {
          if (closeSidebar) closeSidebar();
          connectWallet();
        }}
        className="connect-button"
      >
        Connect Wallet
      </Button>
    </>
  );
};

const WalletConnected = () => {
  const { currentAccount } = useWallet();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Flex direction="column" mt="4px">
      <Flex
        className="connected-account-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Flex flex={1} align="center">
          <Flex className="connected-account-button-icon">
            <BiWalletAlt size={24} color="#7301b6" />
          </Flex>
          <Text className="connected-account-button-address">
            {addressShortener(currentAccount?.address)}
          </Text>
        </Flex>

        {isOpen ? (
          <BsCaretUpFill color="#7301b6" />
        ) : (
          <BsCaretDownFill color="#7301b6" />
        )}
      </Flex>
      <WalletAccount />
    </Flex>
  );
};

const WalletButton = (props) => {
  const { address, isConnecting, isDisconnected, connector } = useAccount();
  const [expandNetwork, setExpandNetwork] = useState(false);
  const { currentNetwork, updateNetwork } = useWallet();
  const { currentAccount } = useWallet();
  const [selectedNetwork, setSelectedNetwork] = useState(null);
  const confirmAlertDisclosure = useDisclosure();

  return (
    <Flex direction="column">
      <MGBAlertDialog
        disclosure={confirmAlertDisclosure}
        title="Confirm switching"
        content={`Switch to ${selectedNetwork}`}
        onClick={() => {
          setExpandNetwork(false);
          updateNetwork(selectedNetwork);
        }}
      />
      <Flex
        className="network-button"
        onClick={() => setExpandNetwork(!expandNetwork)}
      >
        <Flex className="network-button-label">
          <Image
            className="network-button-icon"
            alt="logo-network"
            src={currentNetwork?.icon}
          />
          <Text className="network-button-text">{currentNetwork?.name}</Text>
        </Flex>
        {expandNetwork ? (
          <BsCaretUpFill color="#FFF" />
        ) : (
          <BsCaretDownFill color="#FFF" />
        )}
      </Flex>
      <Collapse in={expandNetwork} animateOpacity>
        {supportedChain
          .filter((e) => e?.key != currentNetwork?.key)
          .map((e, index) => (
            <Flex
              className="network-button-item"
              key={`network-item-${index}`}
              onClick={() => {
                setSelectedNetwork(e.key);
                confirmAlertDisclosure.onOpen();
              }}
            >
              <Image
                className="network-button-icon"
                alt="logo-network"
                src={e?.icon}
              />
              <Text className="network-button-item-text">{e?.name}</Text>
            </Flex>
          ))}
      </Collapse>
      {currentAccount ? <WalletConnected /> : <WalletNotConnected {...props} />}
    </Flex>
  );
};

export default WalletButton;
