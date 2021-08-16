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
import HeaderMain from '../header/header';
import RecentProposal from '../Dashboard/recentProposal';
export default function viewAllProposal() {



    return (
        <div>
            <div className="header-div-all"> <HeaderMain /></div>
            <div className="all-div">
                <div className="recent-proposal-div">
                    <Row className="recent-add-div">
                        <Column>
                            <Row>
                                <Column className="heading">All Proposals</Column>
                                <Column><Row className="input-search"><span><img className="time-inactive" src={require("../../assets/styles/images/Search.png")} ></img></span><span><input type="text" placeholder="Search"></input></span></Row></Column>
                            </Row>
                        </Column>
                        <Column>
                        </Column>
                    </Row>
                    <div className="griddiv-1"><RecentProposal /></div>
                </div>
            </div>

        </div>
    )
}