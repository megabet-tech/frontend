import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Flex,
  DrawerCloseButton,
  Image,
  Button,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import AppLogo from "assets/app-logo-trans.png";
import "./sidebar.css";
import WalletButton from "components/wallet/WalletButton";

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex className="menu-button" onClick={() => onOpen()}>
        <AiOutlineMenu className="menu-button-icon" />
      </Flex>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Flex justify="center">
              <Image className="navbar-logo" alt="logo-app" src={AppLogo} />
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <WalletButton closeSidebar={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
