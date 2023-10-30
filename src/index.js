import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
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
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
