import React, { useEffect, useState } from "react";
import "../../assets/styles/custom.css";
import jazzicon from 'jazzicon';
import { Column, Row } from "simple-flexbox";
import { history } from "../../managers/history";
import { makeStyles } from "@material-ui/core/styles/";
import Web3 from "web3";
import Utils from "../../utility";
import { getTotalVotingAddress } from "../../services/proposalService";
import {injected} from "../../services/web3Connector"
import {useWeb3React} from "@web3-react/core"
import blockies from "ethereum-blockies";
import FooterComponent from "../footer/footerComponent";

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
  const [wallet, setwallet] = useState("");
  const [iconT, setIcon] = useState("");
  useEffect(() => {
    // var body = document.querySelector('body')
    // for(var i = 0; i < 60; i++) {
    //   var el = jazzicon(100, Math.round(Math.random() * 10000000))
    //   console.log("dsjfkksdgfkjhjldsf ",el)
    //   body.appendChild(el)
    // }

    let web3;
    web3 = new Web3(window.web3.currentProvider);
    console.log("+++",web3);
    window.ethereum.enable();
    const accounts = web3.eth.getAccounts().then((accounts) => {
      if (!accounts || !accounts.length) {
        Utils.apiFailureToast("Wallet is not connected");
        return;
      }
      console.log(accounts[0])
      setwallet(accounts[0])
      fetchData(accounts[0]);
    });
  }, []);

  const {active, account, library, connector, activate, deactivate } = useWeb3React()


  async function connectToWallet(){
    let web3;
    web3 = new Web3(window.web3.currentProvider);
        const conn = await window.web3.currentProvider._events.disconnect[0]();
        console.log("+++++",conn)
    // window.ethereum.enable();
    const accounts = web3.eth.getAccounts().then((accounts) => {
      if (!accounts || !accounts.length) {
        Utils.apiFailureToast("Wallet is not connected");
        return;
      }
      console.log("accounts[0] ",accounts[0])
    });
  }

  const [address, setAddress] = useState({ data: "" });
  const fetchData = async (param) => {
    const addresses = await getTotalVotingAddress();
    let isAllowedToCreateProposal = false;
    addresses.dataList.map((address) => {
      if ((address.address.toLowerCase()) === param.toLowerCase()) {
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
            {/*<XdcConnect*/}
            {/*  btnClass={wallet.connected ? classes.btnCss : classes.btnCss}*/}
            {/*  btnName={wallet.connected ? wallet.address : "Connect wallet"}*/}
            {/*  onConnect={(wallet) => {*/}
            {/*    setwallet(wallet);*/}
            {/*    fetchData(wallet.address);*/}
            {/*  }}*/}
            {/*  onDisconnect={(wallet) => {*/}
            {/*    setwallet(wallet);*/}
            {/*  }}*/}
            {/*/>*/}
            <div className="xdc-connect">
              <button className="makeStyles-btnCss-3 btn" onClick={connectToWallet}>
                {wallet ?  <>{wallet ? wallet.substr(0, 11) : " "}...
                              {wallet
                                ? wallet.substr(wallet.length - 5, 5)
                                : ""}</> : <><div className="circle"></div><p className="connect">Connect Wallet</p></>}
              </button>
            </div>
            {/* {wallet.connected ? <button onClick={Disconnect}>Logout</button> : ""} */}
          </div>
        </Column>
      </Row>
    </div>
  );
}

export default Header;
