import { Box } from "@chakra-ui/react";
import Navbar from "components/navbar";

const DefaultLayout = ({ children }) => {
  return (
    <Box
      background="#FFF"
      sx={{
        paddingTop: "8 px",
        minHeight: "100vh",
      }}
      //   bgImage={BackgroundImage}
      bgSize="cover"
    >
      <Navbar />
      <Box
        w="calc(100vw - 24px)"
        mx="auto"
        sx={{ paddingTop: "12px" }}
        overflow="auto"
      >
        {children}
      </Box>
    </Box>
  );
};

export default DefaultLayout;
