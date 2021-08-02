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
        <div className="header-div">
            <div className="headerleft">
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
            </div>

            <div className="display-flex">
                <Column className="mid-div">
                <Row className="xdc-governance">XDC Governance</Row>
                <Row className="xdc-para">Decentralized community for maintaining the integrity of the XinFin Blockchain through discussion and on-chain voting.</Row>
                </Column>
                <Row className="div-box">
                <Column className="div-1">
                    <Row className="div-1-row">65</Row>
                    <Row className="div-1-row1">Proposal Passed</Row>
                </Column>
                <Column className="div-1">
                    <Row className="div-1-row">150</Row>
                    <Row className="div-1-row1">Voting Address</Row>
                </Column>
                <Column className="div-1">
                    <Row className="div-1-row">4538</Row>
                    <Row className="div-1-row1">Votes Casted</Row>
                </Column>
                </Row>
            </div>
            

            
        </div>

    )
}

