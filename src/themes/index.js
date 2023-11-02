import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  fonts: {
    // heading: `'Space Grotesk', sans-serif`,
    // body: `'Space Grotesk', sans-serif`,
  },
  styles: {
    global: {
      // Set the default text color here
      //   color: "#FFF",
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "500",
        borderRadius: "4px",
        fontSize: "16px",
      },
      variants: {
        solid: {
          background: "#7301B6",
          color: "#FFF",
        },
        outline: {
          color: "#7301b6",
          borderWidth: "2px",
          borderColor: "#7301b6",
        },
      },
    },
    ModalContent: {
      baseStyle: {
        background: "red",
      },
    },
    Text: {
      baseStyle: {
        color: "#300159",
      },
    },
  },
});

export default customTheme;
