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
import { Tooltip } from '@material-ui/core';

export default function RecentProposal(){
    React.useEffect(() => {
        let address = [
          {
            Adress: "Posted on 2 July 2021",
            AddedOn: "XDC-ABC Bootstrapping Partnership Proposal",
            Votes: "Open",
            Poll:"Poll Ended",
            Bar:"Line",
            Vote:"145",
            id: 1,
          },
          {
            Adress: "Posted on 24 June 2021",
            AddedOn: "Adding more features to XDC Explorer 2.0",
            Votes: "Passed",
            Poll:"Poll Ended",
            Bar:"Line",
            Vote:"120",
            id: 2,
          },
          {
            Adress: "Posted on 16 June 2021",
            AddedOn: "Relaunch of XinFin.org website",
            Votes: "Failed",
            Poll:"Poll Ended",
            Bar:"Line",
            Vote:"135",
            id: 3,
          },
          {
            Adress: "Posted on 24 June 2021",
            AddedOn: "Launching NFT Marketplace to increase circulation of XDC",
            Votes: "Passed",
            Poll:"Poll Ended",
            Bar:"Line",
            Vote:"125",
            id: 4,
          },
          {
            Adress: "Posted on 24 June 2021",
            AddedOn: "Partnership with Circle Stable Coin",
            Votes: "Passed",
            Poll:"Poll Ended",
            Bar:"Line",
            Vote:"89",
            id: 5,
          },
          
        ]
    
          ;
        setAddress(
          address.map((d) => {
            return {
              select: false,
              Adress: d.Adress,
              AddedOn: d.AddedOn,
              Votes: d.Votes,
              Poll: d.Poll,
              Bar: d.Bar,
              Vote:d.Vote,
              id: d.id,
            };
          })
        );
      }, []);

      const [address, setAddress] = React.useState([]);

    return(
        <div>
            <Row className="recent-add-div">
                <Column className="heading">Recent Proposals</Column>
                <Column>
                <div className="create-wallet">
               {/* <div className="circle"></div> */}
           
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
        {/* <TableRow>
          <TableCell style={{
            border: "none", paddingLeft: "4%", fontWeight: "500", fontSize: "15px",
            fontFamily: "unset"
          }} align="left">

            <span className={"tableheaders"}>Address</span>
          </TableCell>

          <TableCell
            style={{
              border: "none", paddingLeft: "0%", fontWeight: "500", fontSize: "15px",
              fontFamily: "unset"
            }}
            align="left"
          >
            <span className={"tableheaders"}>Added On</span>
          </TableCell>
          <TableCell
            style={{
              border: "none", fontWeight: "500", fontSize: "15px",
              fontFamily: "unset"
            }}
            align="left"
          >
            <span className={"tableheaders"}>Votes</span>
          </TableCell>

        </TableRow> */}
      </TableHead>
      <TableBody>
        {/* {filteredProducts.map((product)=>{ */}



        {address.map((row, index) => {


          return (

            // address={filteredData && filteredData.length ? filteredData : address}
            <TableRow
          className="table-mid-line"

            //   style={
            //     index % 2 !== 1
            //       ? { background: "#f9f9f9" }
            //       : { background: "white" }
            //   }
            >
                <Row  className="table-between">
<Column>
              <TableCell style={{ border: "none"}}  >

                {/* <a className="linkTable" >
                  <Tooltip placement="top" title={row.Adress}>

                    <span className="tabledata"  >
                      {(row.Adress)}{" "}

                    </span>
                   
                  </Tooltip>
                </a> */}
                <Row className="date">{row.Adress}</Row>
               
               <Row className="name">{row.AddedOn} </Row>
               <Row className="status"><p>Status:</p> 
              {row.Votes}
               </Row>
             
              </TableCell>
              {/* <hr className="table-mid-line"/> */}
              </Column>
              {/* <TableCell style={{ border: "none", paddingLeft: "0%" }} align="left" >
               
                <span className="tabledata"> {row.AddedOn}</span>
               
              </TableCell>
              <TableCell style={{ border: "none" }} align="left" >
               
                <span className="tabledata">{row.Votes}</span>
               
              </TableCell> */}
             
              <Column>
              <TableCell style={{ border: "none"}} >
                {/* <a className="linkTable" >
                  <span className="tabledata"  >  Delete</span>
                </a> */}

<Row>{row.Poll}</Row>
               <Row><div className="bar-line"></div> </Row>
               <Row>{row.Vote}</Row>

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
<div style={{paddingTop:"10%"}}></div>
        </div>
    )
}