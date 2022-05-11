import React, { useEffect, useState } from "react";
import "../../assets/styles/custom.css";
import { Column, Row } from "simple-flexbox";
import { history } from "../../managers/history";
import { makeStyles } from "@material-ui/core/styles/";
import Web3 from "web3";
import Utils from "../../utility";
import { getTotalVotingAddress } from "../../services/proposalService";
import { useWeb3React } from "@web3-react/core";
import Jazzicon from "react-jazzicon";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Alert: {
    backgroundColor: "#ffffff !important",
  },
  buttondiv: {
    display: "flex",
    justifyContent: "center",
    marginTop: "6px",
    marginRight: "12px",
  },
  btnCss: {
    background: "#ffffff 0% 0% no-repeat padding-box",
    color: "#2149b9",
    marginTop: "10px",
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
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);

  useEffect(() => {
    window.web3 = new Web3(window.xdc ? window.xdc : window.ethereum);

    if (window.xdc) {
      //the error line
      window.web3 = new Web3(window.xdc);

      try {
        // window.ethereum.enable();

        let web3;
        web3 = new Web3(window.web3.currentProvider);
        console.log("+++", web3);
        // window.ethereum.enable();
        const accounts = window.web3.eth.getAccounts().then((accounts) => {
          if (!accounts || !accounts.length) {
            console.log("please login");
            // Utils.apiFailureToast("Wallet is not connected");
            return;
          }
          console.log(accounts[0]);
          setwallet(accounts[0]);
          fetchData(accounts[0]);
        });
      } catch (err) {
        alert("Something went wrong.");
      }
    } else if (window.xdc) {
      window.web3 = new Web3(window.web3.currentProvider);
      let web3;
      web3 = new Web3(window.web3.currentProvider);
      console.log("+++", web3);
      // window.ethereum.enable();

      const accounts = window.web3.eth.getAccounts().then((accounts) => {
        if (!accounts || !accounts.length) {
          console.log("please login");
          // Utils.apiFailureToast("Wallet is not connected");
          return;
        }
        console.log(accounts[0]);
        setwallet(accounts[0]);
        fetchData(accounts[0]);
      });
    } else {
      // Utils.apiFailureToast("Please install XDCPay extension");
    }
  }, []);

  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

  async function connectToWallet() {
    if (window.xdc) {
      //the error line
      window.web3 = new Web3(window.xdc);

      try {
        // window.ethereum.enable();

        let web3;
        web3 = new Web3(window.web3.currentProvider);
        const conn = await window.web3.currentProvider._events.disconnect[0]();
        console.log("+++++", conn);
        // window.ethereum.enable();

        let accounts = window.web3.eth.getAccounts().then((accounts) => {
          if (!accounts || !accounts.length) {
            // Utils.apiFailureToast("Wallet is not connected");
            setOpen5(true);
            return;
          }
          console.log("accounts[0] ", accounts[0]);
        });
      } catch (err) {
        alert("Something went wrong.");
      }
    } else {
      // Utils.apiFailureToast("Please install XDCPay extension");
      setOpen6(true);
    }
  }

  const [address, setAddress] = useState({ data: "" });
  const fetchData = async (param) => {
    const addresses = await getTotalVotingAddress();
    let isAllowedToCreateProposal = false;
    let showOpenProposal = false;
    addresses.dataList.map((address) => {
      if (address.address.toLowerCase() === param.toLowerCase()) {
        showOpenProposal = true;

        if (address.permission.allowProposalCreation === true)
          isAllowedToCreateProposal = true;
      }
    });
    if (
      isAllowedToCreateProposal &&
      document.getElementById("div_create_prop")
    ) {
      document.getElementById("div_create_prop").className = "create-wallet";
    }
    //  if(showOpenProposal && document.getElementById("div_create_open"))
    // {
    //   document.getElementById("div_create_open").className = "details";
    // }
    // else
    // {
    //   document.getElementById("div_create_prop").className="create-wallet-hide";
    // }
  };

  const reDirect = () => {
    history.push("/");
  };
  const closeAlert = () => {
    setOpen5(false);
    setOpen6(false);
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
              <button
                className="makeStyles-btnCss-3 btn"
                onClick={connectToWallet}
              >
                {wallet ? (
                  <>
                    {wallet ? (
                      <>
                        <Jazzicon
                          diameter={20}
                          seed={Math.round(Math.random() * 10000000)}
                        />{" "}
                        <div className="address-image">
                          {wallet.substr(0, 11)}
                        </div>
                      </>
                    ) : (
                      " "
                    )}
                    ...
                    {wallet ? wallet.substr(wallet.length - 5, 5) : ""}
                  </>
                ) : (
                  <>
                    <div className="circle"></div>
                    <p className="connect">Connect Wallet</p>
                  </>
                )}
              </button>
            </div>
            {/* {wallet.connected ? <button onClick={Disconnect}>Logout</button> : ""} */}
          </div>
        </Column>
      </Row>
      {/* ************ wallet not connectet *************** */}
      <Snackbar
        className="login-xdcpay"
        open={open5}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        // onClose={handleClose4}
      >
        <Alert severity="" className={classes.Alert}>
          <div style={{ display: "flex" }}>
            <span
              style={{
                marginRight: "10px",
                marginTop: "-7px",
                marginLeft: "-8px",
              }}
            >
              <img
                className="done-logo"
                style={{ height: "24px", width: "24px", marginTop: "10px" }}
                src={require("../../assets/styles/images/Error.svg")}
              ></img>
            </span>
            <span>
              <div className="unauthorized-message">
                <span>Please Login to XDCPay</span>
              </div>
            </span>
            <span
              onClick={closeAlert}
              style={{
                float: "right",
                cursor: "pointer",
                marginTop: "-5px",
                marginLeft: "15px",
                fontWeight: "600",
              }}
            >
              X
            </span>
          </div>
        </Alert>
      </Snackbar>

      {/* ////////////////////////////////// */}

      {/* ************ NOT iNstalled *************** */}
      <Snackbar
        className="install-xdcpay"
        open={open6}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        // onClose={handleClose4}
      >
        <Alert severity="" className={classes.Alert}>
          <div style={{ display: "flex" }}>
            <span
              style={{
                marginRight: "10px",
                marginTop: "-7px",
                marginLeft: "-8px",
              }}
            >
              <img
                className="done-logo"
                style={{ height: "24px", width: "24px", marginTop: "10px" }}
                src={require("../../assets/styles/images/Error.svg")}
              ></img>
            </span>
            <span>
              <div className="unauthorized-message">
                <span>Please install XDCPay extension</span>
              </div>
            </span>
            <span
              onClick={closeAlert}
              style={{
                float: "right",
                cursor: "pointer",
                marginTop: "-5px",
                marginLeft: "15px",
                fontWeight: "600",
              }}
            >
              X
            </span>
          </div>
        </Alert>
      </Snackbar>

      {/* ////////////////////////////////// */}
    </div>
  );
}

export default Header;
