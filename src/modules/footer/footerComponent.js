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

export default function FooterComponent() {



    return (
        <div>

           
            <div className="main-footer"></div>
            <div >
                <div className="recent-div-footer">
                    <div className="recent-proposal-div-footer">

                        <Row>
                            <Column>
                            <Row>
                        <Column>
                            <img className="footer-logo" src={require("../../assets/styles/images/XDC-Logo-Blue.svg")} ></img>
                        </Column>
                        <Column >
                            <div className="xdc-footer">XDC</div>
                        </Column>
                        </Row>
                        </Column>

                        <Column className="footer-column">
                        <Row className="footer-column-heading" >Community</Row>
                        <Column className="sub-column-heading">
                        <Row>Discord</Row>
                        <Row>Github</Row>
                        <Row>Twitter</Row>
                        <Row>Telegram</Row>
                        <Row>Forum</Row>
                        </Column>
                        </Column>

                        <Column className="footer-column">
                        <Row className="footer-column-heading" >Governance</Row>
                        <Column className="sub-column-heading">
                        <Row>Overview  </Row>
                        <Row>Forum</Row>
                        <Row>FAQs</Row>
                        </Column>
    
                        </Column>

                        <Column className="footer-column3">
                            <Row className="footer-column-heading" >
                            New Proposal Alert
                            </Row>
                            <Row>
                                {/* <input className="footer-search">
                                    Add Email

                                </input> */}
                                <span><input className="footer-search" type="email" placeholder="Add Email"></input>
                                </span>
                                    <span><img className="forward-image" src={require("../../assets/styles/images/ForwardLogo.svg")} ></img></span>
                                
                            </Row>
                      
                        </Column>
                        
                        </Row>
                        <Row className="reserved">© 2021 XinFin. All Right Reserved</Row>
                        

                        <Row>
                        
                        </Row>
                        






                       
                    </div>
                   
                </div>
               
            </div>
           
        </div>
    )
}