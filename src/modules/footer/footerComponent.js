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

                        <Column >
                            <div className="footer-column">
                            Community
                            </div>
                       
                        </Column>

                        <Column >
                            <div className="footer-column">
                            Governance
                            </div>
                      
                        </Column>

                        <Column >
                            <div className="footer-column3">
                            New Proposal Alert
                            </div>
                      
                        </Column>
                        
                        </Row>

                        <Row>

                        </Row>







                       
                    </div>
                </div>
            </div>
        </div>
    )
}