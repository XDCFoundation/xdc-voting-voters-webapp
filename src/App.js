import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import ConnectButton from "../src/modules/XIntegrate/ConnectButton";
import AccountModal from "../src/modules/XIntegrate/AccountModal";
import "@fontsource/inter";
import React, { Component }  from 'react';

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <ChakraProvider>    
        <ConnectButton handleOpenModal={onOpen} />
        <AccountModal isOpen={isOpen} onClose={onClose} />
    </ChakraProvider>
  );
}

export default App;