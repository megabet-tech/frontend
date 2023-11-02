import { Box, Flex, Image } from "@chakra-ui/react";
import AppLogo from "assets/app-logo-trans.png";
import { AiOutlineMenu, AiOutlinePlusCircle } from "react-icons/ai";
import { isMobile } from "react-device-detect";
import "./navbar.css";
import Sidebar from "components/sidebar";

const Navbar = () => {
  // if (isMobile)
  return (
    <Flex className="navbar-container">
      <Sidebar />
      <Image className="navbar-logo" alt="logo-app" src={AppLogo} />
      <Flex className="menu-button">
        <AiOutlinePlusCircle className="menu-button-icon" />
      </Flex>
    </Flex>
  );
  // return (
  //   <Flex className="navbar-container">
  //     <Flex className="menu-button">
  //       <AiOutlineMenu className="menu-button-icon" />
  //     </Flex>
  //     <Image className="navbar-logo" alt="logo-app" src={AppLogo} />
  //     <Flex className="menu-button">
  //       <AiOutlinePlusCircle className="menu-button-icon" />
  //     </Flex>
  //   </Flex>
  // );
};

export default Navbar;
