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


export default function RecentProposal() {
    React.useEffect(() => {
        let address = [
            {
                Date: "Posted on 2 July 2021",
                Name: "XDC-ABC Bootstrapping Partnership Proposal",
                Status: "Open",
                Poll: "Poll Ended",
                Bar: "Line",
                Vote: "145 votes",
                id: 1,
            },
            {
                Date: "Posted on 24 June 2021",
                Name: "Adding more features to XDC Explorer 2.0",
                Status: "Passed",
                Poll: "Poll Ended",
                Bar: "Line",
                Vote: "120 votes",
                id: 2,
            },
            {
                Date: "Posted on 16 June 2021",
                Name: "Relaunch of XinFin.org website",
                Status: "Failed",
                Poll: "Poll Ended",
                Bar: "Line",
                Vote: "135 votes",
                id: 3,
            },
            {
                Date: "Posted on 24 June 2021",
                Name: "Launching NFT Marketplace to increase circulation of XDC",
                Status: "Passed",
                Poll: "Poll Ended",
                Bar: "Line",
                Vote: "125 votes",
                id: 4,
            },
            {
                Date: "Posted on 24 June 2021",
                Name: "Partnership with Circle Stable Coin",
                Status: "Passed",
                Poll: "Poll Ended",
                Bar: "Line",
                Vote: "89 votes",
                id: 5,
            },

        ]

            ;
        setAddress(
            address.map((d) => {
                return {
                    select: false,
                    Date: d.Date,
                    Name: d.Name,
                    Status: d.Status,
                    Poll: d.Poll,
                    Bar: d.Bar,
                    Vote: d.Vote,
                    id: d.id,
                };
            })
        );
    }, []);

    const [address, setAddress] = React.useState([]);

    return (
        <div>
            <Row className="recent-add-div">
                <Column className="heading">Recent Proposals</Column>
                <Column>
                    <div className="create-wallet">


                        <p>Create Proposal</p>
                    </div>
                </Column>
            </Row>
            <div className="griddiv">


                <Grid lg={13} className="tablegrid_address">
                    {/* <Grid class="tabletop-header">Whitelisted Addresses</Grid> */}
                    <Grid component={Paper} style={{ boxShadow: "0px 0px 0px 0px" }}>

                        <Table className="table" aria-label="Whitelisted Addresses" style={{ boxShadow: "0px 0px 0px 0px" }}>
                            <TableHead>
                            </TableHead>
                            <TableBody>
                                {/* {filteredProducts.map((product)=>{ */}



                                {address.map((row, index) => {


                                    return (

                                        // address={filteredData && filteredData.length ? filteredData : address}
                                        <TableRow
                                            className="table-mid-line"


                                        >
                                            <Row className="table-between">
                                                <Column>
                                                    <TableCell style={{ border: "none" }}  >


                                                        <Row className="date">{row.Date}</Row>

                                                        <Row className="name">{row.Name} </Row>
                                                        <Row className="status"
                                                      
                                                        ><p>Status:</p>
                                                        
                                                           <span className={row.Status==="Open"?"fc-blue":row.Status==="Passed"?"fc-green":"fc-red"}>{row.Status}</span> 
                                                        </Row>

                                                    </TableCell>

                                                </Column>


                                                <Column>
                                                    <TableCell style={{ border: "none" }} >



                                                       { row.Status=="Open"?<><Row><span style={{marginRight:"-135px"}}>01:50:48 Remaining</span><span style={{ marginRight: "5px" }}> <img style={{ height: "14px", width: "14px",marginTop:"-3px" }} className="time-inactive" src={require("../../assets/styles/images/Time-Active.svg")} ></img></span></Row><Row><div className="details">Details</div></Row></>:<><Row className="poll-ended"> <span style={{ marginRight: "5px" }}> <img style={{ height: "14px", width: "14px", marginTop:"-2px" }} className="time-inactive" src={require("../../assets/styles/images/Time-Inactive.svg")} ></img></span> {row.Poll}</Row>
                                                        <Row className="percent-line"><div className="bar-line"><div className="line-1"></div><div className="line-2"></div></div> </Row>
                                                        <Row className="vote-number">{row.Vote}</Row></>}

                                                    </TableCell>
                                                </Column>
                                            </Row>
                                        </TableRow>
                                    );
                                })}

                            </TableBody>
                        </Table>
                    </Grid>
                </Grid>
            </div>
            <Row className="view-all">View All Proposals</Row>
            <div style={{ paddingTop: "10%" }}></div>
        </div>
    )
}