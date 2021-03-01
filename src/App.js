import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";
import { ChakraProvider } from "@chakra-ui/react";
import { ConfirmationModalProvider } from "./ConfirmationModalContext";

function App() {
  return (
    <ChakraProvider>
      <ConfirmationModalProvider>
        <Form />
      </ConfirmationModalProvider>
    </ChakraProvider>
  );
}

export default App;
