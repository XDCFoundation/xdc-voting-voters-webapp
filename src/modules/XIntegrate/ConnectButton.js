import { Button, Box, Text } from "@chakra-ui/react";
import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import Identicon from "../XIntegrate/Identicon";
import React, { Component }  from 'react';

export default function ConnectButton({ handleOpenModal }) {
  const { activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);

  function handleConnectWallet() {
    activateBrowserWallet();
  }
  return account ? (
    <Box>
      <Button  onClick={handleOpenModal} >
        <Text>
          {account &&   `${account.slice(0, 6)}...${account.slice(
              account.length - 4,
              account.length
            )}`}
        </Text>
        <Identicon />
      </Button>
    </Box>
  ) : (
    <Button  onClick={handleConnectWallet} >
      Connect wallet
    </Button>
  );
}
