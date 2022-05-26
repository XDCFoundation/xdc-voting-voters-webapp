import React, { Component, useEffect, useState } from "react";
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
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Popup from "./Popup";
import Dragdrop from "./dragDrop"
// import UploadFile from "./uploadFile";

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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [tab, setTab] = useState(1);

  const [buttonPopup, setButtonPopup] = React.useState(false);
  const [timedPopup, setTimedPopup] = React.useState(false);

  // const togglePopup = () => {
  //   setButtonPopup(!buttonPopup);
  // };
   
  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 3000);
  }, []);

  // const [proposals,setProposals]= useState(0);
  // const [overview,setOverview]= useState(0);
  // const [roadmap,setRoadmap]= useState(0);

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

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const reDirect = () => {
    history.push("/");
  };
  const toggleTab = (index) => {
    setTab(index);
    //   if(index==1){
    //     history.push("/");
    //     setTab(1);
    //   }

    //  else if(index==2){
    //     history.push("/yourProposals");
    //     setTab(2);
    //   }
    //  else if(index==3){
    //     history.push("/overview");
    //     setTab(3);
    //   }
    //  else if(index==4){
    //     history.push("/governance");
    //     setTab(4);
    //   }
  };
  // const reDirectProposals = (index) => {
  //   setProposals(index);
  //   history.push("/yourProposals");

  // };
  const view = () => {
    history.push("/overview");
  };

  const viewAddressGroup = () => {
    history.push("/AddressGroup");
  };
  // const reDirectRoadmap = () => {
  //   history.push("/");

  // };
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

            <Row className="hide-tabs">
              <Column className="tab">
                <p
                  onClick={() => {
                    toggleTab(1);
                    history.push("/");
                  }}
                  className={tab === 1 ? "tab-active" : "tab-inactive"}
                >
                  Governance
                </p>
              </Column>
              <Column className="tab">
                <p
                  onClick={() => {
                    toggleTab(2);
                    history.push("/yourProposals");
                  }}
                  className={tab === 2 ? "tab-active" : "tab-inactive"}
                >
                  Proposals
                </p>
              </Column>
              <Column className="tab">
                <p
                  onClick={() => {
                    toggleTab(3);
                    history.push("/overview");
                  }}
                  className={tab === 3 ? "tab-active" : "tab-inactive"}
                >
                  Overview
                </p>
              </Column>
              <Column className="tab">
                <p
                  onClick={() => {
                    toggleTab(4);
                    history.push("/governance");
                  }}
                  className={tab === 4 ? "tab-active" : "tab-inactive"}
                >
                  Roadmap
                </p>
              </Column>
            </Row>
          </Row>
        </Column>
        <Column>
          <div className="tab-mob-tab">
            <img
              className="header-logo"
              src={require("../../assets/styles/images/Wallet.svg")}
            ></img>
            <img
              className="header-logo"
              src={require("../../assets/styles/images/hamburgerMenu.svg")}
            ></img>
          </div>
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
                          c{wallet.substr(0, 11)}
                        </div>
                      </>
                    ) : (
                      " "
                    )}
                    ...
                    {wallet ? wallet.substr(wallet.length - 5, 5) : ""}
                    <button className="dropdown-button">
                      {" "}
                      <img
                        className="dropdown-icon"
                        src="/images/XDC-Dropdown.svg"
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                      ></img>
                      <Menu
                        id="simple-menu-item"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                      >
                        <MenuItem
                          // onClick={handleChangePassword}
                          className="menu-heading"
                          style={{ backgroundColor: "white" }}
                          onClick={() => setButtonPopup(true)}
                        >
                          Profile{" "}
                          <Popup
                            trigger={buttonPopup}
                            setTrigger={setButtonPopup}
                          >
                            <h3 className="profile-text">Profile</h3>
                            <p className="profile-subtext">
                              Setting a profile gives an identity to the
                              proposal created by you.
                            </p>
                            <div className="img-div-upload">
                            <div className="img-div-background">
                              <Dragdrop/>
                            </div>
                            </div>
                              <input type="text" className="input-profile" placeholder="     Unamed" />
                              <input type="submit" className="update-profile" value="Update" />
                          </Popup>
                        </MenuItem>
                        <hr className="menu-line" />
                        <MenuItem
                          onClick={viewAddressGroup}
                          className="menu-heading"
                          style={{ backgroundColor: "white" }}
                        >
                          Address Groups{" "}
                        </MenuItem>
                        <hr className="menu-line" />
                        <MenuItem
                          // onClick={() => {
                          //   logOut();
                          // }}
                          className="menu-heading"
                          style={{ backgroundColor: "white" }}
                        >
                          Log out
                        </MenuItem>
                      </Menu>
                    </button>
                  </>
                ) : (
                  <>
                    <div className="circle"></div>
                    <p className="connect">Connect Wallet</p>
                    {/* <button 
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                >
                
         con */}

                    {/* </button> */}
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
