import React, { useEffect, useState } from "react";
import "../../assets/styles/custom.css";
import { XdcConnect, Disconnect } from "xdc-connect";
import { Column, Row } from "simple-flexbox";
import { history } from "../../managers/history";
import { makeStyles } from "@material-ui/core/styles/";
import Web3 from "web3";
import Utils from "../../utility";
import { getTotalVotingAddress } from "../../services/proposalService";
import {injected} from "../../services/web3Connector"
import {useWeb3React} from "@web3-react/core"
import blockies from "ethereum-blockies";

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
    // var icon = blockies.create({ // All options are optional
    //   seed: 'randstring', // seed used to generate icon data, default: random
    //   color: '#dfe', // to manually specify the icon color, default: random
    //   bgcolor: '#aaa', // choose a different background color, default: random
    //   size: 15, // width/height of the icon in blocks, default: 8
    //   scale: 3, // width/height of each block in pixels, default: 4
    //   spotcolor: '#000' // each pixel has a 13% chance of being of a third color,
    //   // default: random. Set to -1 to disable it. These "spots" create structures
    // });
    // console.log("+++",icon)
    // document.body.appendChild(icon);
    // setIcon(icon)
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
                src={require("../../assets/styles/images/xdc_logo.svg")}
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
              <button className="makeStyles-btnCss-3 btn btn-primary" onClick={connectToWallet}>
                {wallet ? wallet : "Connect wallet"}
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
