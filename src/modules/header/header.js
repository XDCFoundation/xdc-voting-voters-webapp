import React, { useEffect, useState } from "react";
import "../../assets/styles/custom.css";
import { XdcConnect, Disconnect } from "xdc-connect";
import { Column, Row } from "simple-flexbox";
import { history } from "../../managers/history";
import { makeStyles } from "@material-ui/core/styles/";
import Web3 from "web3";
import Utils from "../../utility";
import { getTotalVotingAddress } from "../../services/proposalService";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  buttondiv: {
    display: "flex",
    justifyContent: "center",
    marginTop: "6px",
    marginRight: "12px",
  },
  btnCss: {
    background: "#ffffff 0% 0% no-repeat padding-box !important",
    color: "#2149b9!important",
    marginTop:"10px",
  },
  circle: {
    borderRadius: "50%",
    width: "10px",
    height: "10px",
    background: "##ffffff 0% 0% no-repeat padding-box",
    marginRight: "43px",
    marginLeft: "10px",
  },
}));

function Header() {
  const classes = useStyles();
  const [wallet, setwallet] = useState({});
  useEffect(() => {
    let web3;
    web3 = new Web3(window.web3.currentProvider);
    console.log(window.web3.currentProvider);
    window.ethereum.enable();
    const accounts = web3.eth.getAccounts().then((accounts) => {
      if (!accounts || !accounts.length) {
        Utils.apiFailureToast("Wallet is not connected");
        return;
      }
      fetchData(accounts[0]);
    });
  }, []);

  const [address, setAddress] = useState({ data: "" });
  const fetchData = async (param) => {
    const addresses = await getTotalVotingAddress();
    console.log("addresses ", addresses);
    let isAllowedToCreateProposal = false;
    addresses.dataList.map((address) => {
      if (address.address === param) {
        if (address.permission.allowProposalCreation === true)
          isAllowedToCreateProposal = true;
      }
    });
    if (isAllowedToCreateProposal && document.getElementById("div_create_prop"))
      document.getElementById("div_create_prop").className = "create-wallet";
  };

  const reDirect = () => {
    history.push("/");
  };
  return (
    <div>
      <Row className="row-1">
        <Column>
          <Row>
            <Column>
              <img
                className="header-logo"
                src={require("../../assets/styles/images/XDC-Icon-Logo.svg")}
              ></img>
            </Column>
            <Column className="xdc">
              <p onClick={reDirect}>XDC</p>
            </Column>
          </Row>
        </Column>
        <Column>
          <div className={classes.buttondiv}>
            {/* <div className="circle"></div> */}
            <XdcConnect
              btnClass={wallet.connected ? classes.btnCss : classes.btnCss}
             btnName ={ wallet.connected ? wallet.address : <><div className="circle"></div><p className="connect">Connect Wallet</p></>}
              onConnect={(wallet) => {
                setwallet(wallet);
                fetchData(wallet.address);
              }}
              onDisconnect={(wallet) => {
                setwallet(wallet);
              }}
            />
            {/* {wallet.connected ? <button onClick={Disconnect}>Logout</button> : ""} */}
          </div>
        </Column>
      </Row>
    </div>
  );
}

export default Header;
