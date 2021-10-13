import React, {useEffect,useState } from "react";
import { XdcConnect, Disconnect } from "xdc-connect";
import { Column, Row } from "simple-flexbox";
import styled from "styled-components";
import { history } from "../../managers/history";
import { makeStyles } from "@material-ui/core/styles/";

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
console.log("wallet", wallet);
//new

  const [address, setAddress] = useState({data:""});
  
  const url = "http://xinfin-votingdapp-elb-924589235.us-east-1.elb.amazonaws.com:3002/searchbyaddess/";
  const fetchData = async (param) => {    
    
    try {
        const response = await fetch(url+param);//'xdc44444444444444444444444444444444444444444');
        const data = await response.json();
        setAddress({data:data.responseData.address});
        console.log(data);
        if(data.responseData.permission.allowProposalCreation)
        {
        document.getElementById("div_create_prop").className="create-wallet"; 
        }
        else
        {
          document.getElementById("div_create_prop").className="create-wallet-hide"; 
        }     
    } catch (error) {
        console.log("error", error);
    }
};
//new22
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

     <XdcConnect
       btnClass={  wallet.connected  ? classes.btnCss  : classes.btnCss  }
       btnName={wallet.connected ? wallet.address : "Connect wallet"}
       onConnect={         
        (wallet) => {setwallet(wallet);fetchData(wallet.address);}             
      } 
       onDisconnect={(wallet) => { setwallet(wallet);}} />
     {/* {wallet.connected ? <button onClick={Disconnect}>Logout</button> : ""} */}
     
  </div>
        </Column>
      </Row>
    </div>
 );
}
export default Header;

