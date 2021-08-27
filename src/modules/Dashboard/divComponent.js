import React, { useState } from 'react'
import { Column, Row } from "simple-flexbox";
import "../../assets/styles/custom.css";
import TableCell from '@material-ui/core/TableCell';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { history } from "../../managers/history";
import FooterComponent from '../footer/footerComponent';

export default function DivBlocksComponent() {
    


    return (
        <div>
           
            <div style={{ paddingTop: "10%" }}></div>
            {/* !+++++++++++++++++++++! */}
            <div className="blockdiv" style={{backgroundColor:"white"}}>
                <div>
                    <Row className="box-all">
                        <Row className="box-all1">
                           
                        <Row className="mobile-box-block">
                        <Column className="know-about-xdc">
                        <img className="external-image" src={require("../../assets/styles/images/External-Link.svg")} ></img>
                        <Row><img className="time-inactive" src={require("../../assets/styles/images/Group 30.svg")} ></img></Row>
                        <Row className="know-about-xdc-heading">Know about XDC Governance</Row>
                        <Row className="know-about-xdc-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit quisque venenatis.</Row>
                        </Column>
                        <Column className="xdc-forum">
                        <img className="external-image" src={require("../../assets/styles/images/External-Link.svg")} ></img>
                        <Row><img className="time-inactive" src={require("../../assets/styles/images/Group 32.svg")} ></img></Row>
                        <Row className="know-about-xdc-heading">XDC Forum</Row>
                        <Row className="know-about-xdc-para">Mauris neque urna, sodales at molestie ut, pulvinar eu lorem.</Row>
                        </Column>
                        </Row>
                       
                        <Row>
                        <Column className="community-tools">
                        <img className="external-image" src={require("../../assets/styles/images/External-Link.svg")} ></img>
                        <Row><img className="time-inactive" src={require("../../assets/styles/images/Community-Tools.svg")} ></img></Row>
                        <Row className="know-about-xdc-heading">Community Tools</Row>
                        <Row className="know-about-xdc-para">Cras porttitor iaculis sapien eu fringilla Cras in ligula egestas ipsum quis urna.</Row>
                        </Column>
                        </Row>
                        </Row>
                    </Row>
                </div>
            </div>
            <div><FooterComponent/></div>
        </div>
    )
}