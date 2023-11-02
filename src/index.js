import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";
import WalletConnect from "components/wallet/WalletConnect";
import { WalletProvider } from "contexts/useWallet";
import customTheme from "themes";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <WalletConnect>
      <BrowserRouter>
        <ChakraProvider theme={customTheme}>
          <Toaster
            position="bottom-right"
            reverseOrder={true}
            toastOptions={{
              style: {
                padding: "8px",
                fontSize: "16px",
                color: "#57527E",
                borderRadius: "5px",
                background: "#E8FDFF",
              },
            }}
          />
          <WalletProvider>
            <App />
          </WalletProvider>
        </ChakraProvider>
      </BrowserRouter>
    </WalletConnect>
  </React.StrictMode>
);
