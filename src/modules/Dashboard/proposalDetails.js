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
import FooterComponent from "../footer/footerComponent";

export default function ProposalDetails() {



    return (
        <div>
            <div className="header-div-all"> <HeaderMain /></div>
            <div className="all-div-proposal">
                <div className="recent-proposal-div-proposal">
                    <Row className="recent-add-div-proposal">
                        <Column>

                            <Row className="date">Posted on 2 July 2021</Row>
                            <Row className="name">XDC-ABC Bootstrapping Partnership Proposal </Row>
                            <Row className="status">Status: Open </Row>

                        </Column>
                        <Column>
                            <Row style={{ marginRight: "150px" }}>
                                <span style={{ marginRight: "-160px" }}>
                                    01:50:48 Remaining
                                </span>
                                <span style={{ marginRight: "5px" }}>
                                    {" "}
                                    <img
                                        style={{
                                            height: "14px",
                                            width: "14px",
                                            marginTop: "-3px",
                                        }}
                                        className="time-inactive"
                                        src={require("../../assets/styles/images/Time-Active.svg")}
                                    ></img>
                                </span>
                            </Row>
                        </Column>
                    </Row>
                    <div className="griddiv-1">

                        <Row>

                            {/* <div style={{padding:"15px"}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis magna at sem consectetur, vitae ultrices sem molestie. Maecenas vitae dolor eu lectus maximus ultrices. Curabitur vestibulum nec quam in dictum. Duis malesuada iaculis dapibus mauris blandit rhonc: 1. Proin a tristique augue integer mauris magna. 2. Vivamus tempus dapibus lectus ac rutrum. 3. Duis malesuada iaculis dapibus. Maecenas id arcu lacus. Integer arcu ligula, tristique vitae bibendum ac, ultrices id diam. Aliquam vel est scelerisque, volutpat felis id, cursus erat. Vestibulum consectetur, orci in convallis tempor, ligula augue ullamcorper nibh, id pulvinar lectus libero sed nulla. Ut egestas justo urna, et euismod nibh tristique sed. Pellentesque tristique enim egestas lorem imperdiet, id lobortis odio auctor. Suspendisse sodales sagittis libero. Vivamus in ullamcorper eros, a luctus mauris. Nulla facilisi. Fusce viverra turpis vulputate eros faucibus, quis consectetur leo egestas. Proin placerat arcu ac dui placerat commodo. Curabitur mollis orci augue, vitae porttitor risus euismod eu. Ut nec posuere arcu. Vivamus pulvinar arcu et faucibus maximus. Duis malesuada iaculis dapibus. Mauris blandit rhoncus tellus rutrum tempor. In pretium nulla eget dolor molestie, non lobortis lorem tempus. Aenean ullamcorper urna non nisi tempor auctor. Suspendisse et ipsum bibendum, malesuada diam eget, congue erat. Duis lobortis elementum gravida. Sed ut dapibus arcu. Cras porttitor iaculis sapien eu fringilla. Cras in ligula urna. Vestibulum feugiat convallis felis ac dignissim. Duis placerat velit quam, vitae imperdiet elit maximus vel. Nam tincidunt ultricies ultrices. Nullam ac odio convallis dui volutpat luctus. Morbi luctus ornare pellentesque. Praesent rhoncus lectus id suscipit cursus. Morbi purus metus, tempor quis eleifend vitae, lacinia sit amet urna. Proin egestas ipsum quis tellus fermentum finibus et non urna.
                            </div> */}

                            <Grid lg={13} className="tablegrid_address">
                                <Grid component={Paper} style={{ boxShadow: "0px 0px 0px 0px" }}>
                                    <Row> <div className="details-content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis magna at sem consectetur, vitae ultrices sem molestie. Maecenas vitae dolor eu lectus maximus ultrices. Curabitur vestibulum nec quam in dictum. Duis malesuada iaculis dapibus mauris blandit rhonc: 1. Proin a tristique augue integer mauris magna. 2. Vivamus tempus dapibus lectus ac rutrum. 3. Duis malesuada iaculis dapibus. Maecenas id arcu lacus. Integer arcu ligula, tristique vitae bibendum ac, ultrices id diam. Aliquam vel est scelerisque, volutpat felis id, cursus erat. Vestibulum consectetur, orci in convallis tempor, ligula augue ullamcorper nibh, id pulvinar lectus libero sed nulla. Ut egestas justo urna, et euismod nibh tristique sed. Pellentesque tristique enim egestas lorem imperdiet, id lobortis odio auctor. Suspendisse sodales sagittis libero. Vivamus in ullamcorper eros, a luctus mauris. Nulla facilisi. Fusce viverra turpis vulputate eros faucibus, quis consectetur leo egestas. Proin placerat arcu ac dui placerat commodo. Curabitur mollis orci augue, vitae porttitor risus euismod eu. Ut nec posuere arcu. Vivamus pulvinar arcu et faucibus maximus. Duis malesuada iaculis dapibus. Mauris blandit rhoncus tellus rutrum tempor. In pretium nulla eget dolor molestie, non lobortis lorem tempus. Aenean ullamcorper urna non nisi tempor auctor. Suspendisse et ipsum bibendum, malesuada diam eget, congue erat. Duis lobortis elementum gravida. Sed ut dapibus arcu. Cras porttitor iaculis sapien eu fringilla. Cras in ligula urna. Vestibulum feugiat convallis felis ac dignissim. Duis placerat velit quam, vitae imperdiet elit maximus vel. Nam tincidunt ultricies ultrices. Nullam ac odio convallis dui volutpat luctus. Morbi luctus ornare pellentesque. Praesent rhoncus lectus id suscipit cursus. Morbi purus metus, tempor quis eleifend vitae, lacinia sit amet urna. Proin egestas ipsum quis tellus fermentum finibus et non urna.
                                    </div>
                                    </Row>
                                    <Row className="doc-1">
                                        <div>
                                            <span> <img
                                                className="attachment-logo"
                                                src={require("../../assets/styles/images/Attachment.svg")}
                                            ></img></span>
                                            <span className="attachment-heading">Proposal Terms and Conditions.pdf</span>
                                            <span><img className="external-image-proposal" src={require("../../assets/styles/images/External-Link.svg")} ></img></span>
                                        </div>

                                    </Row>
                                    <Row className="doc-1">
                                        <div>
                                            <span> <img
                                                className="attachment-logo"
                                                src={require("../../assets/styles/images/Attachment.svg")}
                                            ></img></span>
                                            <span className="attachment-heading">About ABC Corporation.doc</span>
                                            <span><img className="external-image-proposal1" src={require("../../assets/styles/images/External-Link.svg")} ></img></span>
                                        </div>
                                    </Row>
                                </Grid>
                            </Grid>

                        </Row>
                        <Row>

                        </Row>
                        <Row>

                        </Row>
                    </div>
                </div>
            </div>

            <div>
                <FooterComponent />
            </div>

        </div>
    )
}