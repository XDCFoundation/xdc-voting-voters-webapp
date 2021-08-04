import React, { useState } from 'react'
import { Column, Row } from "simple-flexbox";
import { Button } from "@material-ui/core";
import CustomInput from "../../common/components/CustomInput";
import { history } from "../../managers/history";
import "../../assets/styles/custom.css";
// import "../../assets/styles/images";
import utility from '../../utility';
// import validator from 'validator';

export default function Header() {


    return (
        <div>
            {/* <div className="headerleft">
                <span style={{display:"flex"}}>
                <span className="display-flex">
           <span><img className="header-logo" src={require("../../assets/styles/images/xdc_logo.svg")} ></img></span> 
           <span className="xdc"><p>XDC</p></span> 
           </span>
           <span>
           <div className="connect-wallet">
               <div className="circle"></div>
           
              <p>connect wallet</p> 
           </div>
           </span>
           </span>
            </div> */}

            <Column className="header-div">
            <Row className="row-1">
                <Column>
                <Row>
                <Column>
                <img className="header-logo" src={require("../../assets/styles/images/xdc_logo.svg")} ></img>
                </Column>
                <Column className="xdc">
                <p>XDC</p>
                </Column>
                </Row>
                </Column>
                <Column>
                <div className="connect-wallet">
               <div className="circle"></div>
           
              <p>connect wallet</p> 
           </div>
                </Column>


            </Row>
            

            {/* !***********************!  */}
            <Row className="row-2">
                <Column className="mid-div">
                <Row className="xdc-governance">XDC Governance</Row>
                <Row className="xdc-para"><div className="para-div"> Decentralized community for maintaining the integrity of the XinFin Blockchain through discussion and on-chain voting.</div></Row>
                </Column>
              <div className="mobile-alldiv">  <Row className="div-box">
              <Row className="mobile-divbox"> <Column className="div-1">
            
                    <Row className="div-1-row">65</Row>
                    <Row className="div-1-row1">Proposal Passed</Row>
                </Column>
                <Column className="div-1">
                    <Row className="div-1-row">150</Row>
                    <Row className="div-1-row1">Voting Address</Row>
                </Column>
                </Row> 
                <Row className="mobile-lower-div">
                <Column className="div-1">
                    <Row className="div-1-row">4538</Row>
                    <Row className="div-1-row1">Votes Casted</Row>
                </Column>
                </Row>
                </Row>
                </div>
            </Row>
            </Column>

            
        </div>

    )
}

