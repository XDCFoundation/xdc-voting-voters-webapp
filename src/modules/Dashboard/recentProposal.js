import React, { useState, useEffect } from "react";
import { Column, Row } from "simple-flexbox";
import "../../assets/styles/custom.css";
import TableCell from "@material-ui/core/TableCell";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { history } from "../../managers/history";
import styled from "styled-components";
import Countdown from "react-countdown";
import moment from "moment";
import Utils from "../../utility";
import DivBlocksComponent from "../Dashboard/divComponent";
import FooterComponent from "../footer/footerComponent";
import { Tooltip } from "@material-ui/core";
import ReactDOM from "react-dom";
import Web3 from "web3";
import {getTotalVotingAddress} from "../../services/proposalService";
import Web3Dialog from "../header/mainDialog";
import HeaderMain from "../header/header";
import Loader from "../../assets/styles/images/NewLoader.gif";

const GreenLine = styled.div`
  background-color: #3ab70d;
  height: 3px;
  @media (min-width: 300px) and (max-width: 767px) {
    width: 50%;
  }
`;
const RedLine = styled.div`
  background-color: #f43d3d;
  height: 3px;
  @media (min-width: 300px) and (max-width: 767px) {
    width: 50%;
  }
`;

export default function RecentProposal(props) {
  const proposalRedirect = (address) => {
    console.log(address, "addres-detail");
    history.push({
      pathname: `/proposal-details/${address}`,
    });
    window.scrollTo(0, 0);
  };
  const handleView = () => {
    history.push("/view-all-proposals");
    window.scrollTo(0, 0);
  };

  const [wallet, setwallet] = useState("");
  const [show, setShow] = useState(0);
  
  const fetchData = async (param) => {
    const addresses = await getTotalVotingAddress();
    let isAllowedToCreateProposal = false;
    let showOpenProposal = false;
    addresses.dataList.map((address) => {
      if (address.address.toLowerCase() === param.toLowerCase()) {
        setShow(1);
      }
    });
  };

  useEffect(() => {
    if (window.ethereum) {
      //the error line
      window.web3 = new Web3(window.ethereum);

      try {
        window.ethereum.enable();

        let web3;
        web3 = new Web3(window.web3.currentProvider);
        console.log("+++", web3);
        window.ethereum.enable();
        const accounts = web3.eth.getAccounts().then((accounts) => {
          if (!accounts || !accounts.length) {
            // Utils.apiFailureToast("Wallet is not connected");
            return;
          }
          setwallet(accounts[0]);
          fetchData(accounts[0]);
          
        });
      } catch (err) {
        alert("Something went wrong.");
      }
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
      let web3;
      web3 = new Web3(window.web3.currentProvider);
      console.log("+++", web3);
      window.ethereum.enable();

      const accounts = web3.eth.getAccounts().then((accounts) => {
        if (!accounts || !accounts.length) {
          // Utils.apiFailureToast("Wallet is not connected");
          return;
        }
        setwallet(accounts[0]);
        fetchData(accounts[0]);
      });
    } else {
      Utils.apiFailureToast("Please install XDCPay extension");
    }
  }, []);

    return (
        <div>
            
            <Grid lg={13} className="tablegrid_address">
                <Grid component={Paper} style={{boxShadow: "0px 0px 0px 0px"}}>
                    <Table
                        className="table"
                        aria-label="Whitelisted Addresses"
                        style={{boxShadow: "0px 0px 0px 0px"}}
                    >
                        <TableHead></TableHead>
                        <TableBody>
                            {props.state.proposalsList && props.state.proposalsList.length ? (
                                props.state.proposalsList.map((proposal, index) => {
                                    let status =
                                        proposal.endDate > Date.now() ? "Open" : "Closed";
                                    let formatedTime = moment(proposal.createdOn).format("DD MMMM YYYY");
                                    const yesVotes = proposal.yesVotes.length;
                                    const noVotes = proposal.noVotes.length;
                                    const yesVotesWidth = (100 * yesVotes) / (yesVotes + noVotes);
                                    const noVotesWidth = (100 * noVotes) / (yesVotes + noVotes);
                                    if (status === "Closed") {
                                        console.log(proposal.endDate, Date.now(), proposal.timeRemaining, "timing")
                                        if (yesVotesWidth >= 66) status = "Approved";
                                        else status = "Rejected";
                                    }

                                    return (
                                        <TableRow className="table-mid-line">
                                            
                                           
                                            <Row className="table-between">
                                                <Column>
                                                    <TableCell
                                                        class="table-cell"
                                                        style={{border: "none"}}
                                                    >

                                                        {/* <div id="div_create_prop" className="detail-row-hide"> */}
                                                        <Row className="date">
                                                            Posted on{" "} 
                                                            {/* {Utils.epocToPrettyTime(proposal["cretaedOn"])} */}
                                                            {formatedTime}
                                                        </Row>
                                                        <Row className="name">
                                                            {!show==1?
                                                            proposal.pollingContract
                                                            : proposal.title}
                                                        </Row>
                                                        <Row className="status">
                                                            <p>Status: &nbsp;</p>
                                                            <span
                                                                className={
                                                                    status === "Open"
                                                                        ? "fc-blue"
                                                                        : status === "Approved"
                                                                            ? "fc-green"
                                                                            : "fc-red"
                                                                }
                                                            >
                                {status}
                              </span>
                            </Row>
                            {status === "Open" ? (
                              <></>
                            ) : (
                              <>
                                <Row class="poll-ended-mobile">
                                  {" "}
                                  <span style={{ marginRight: "5px" }}>
                                    {" "}
                                    <img
                                      style={{
                                        height: "14px",
                                        width: "14px",
                                        marginTop: "-2px",
                                      }}
                                      className="time-inactive-1"
                                      src={require("../../assets/styles/images/Time-Inactive.svg")}
                                    ></img>
                                  </span>{" "}
                                  Poll Ended
                                </Row>
                              </>
                            )}
                          </TableCell>
                        </Column>

                        <Column>
                          <TableCell
                            className="mobile-div-right"
                            style={{ border: "none" }}
                          >
                            {status === "Open" ? (
                              <>
                                <Row class="count-down-mobile">
                                  <span style={{ marginRight: "5px" }}>
                                    {" "}
                                    <img
                                      style={{
                                        height: "14px",
                                        width: "14px",
                                      }}
                                      className="m-b-4"
                                      src={require("../../assets/styles/images/Time-Active.svg")}
                                    />
                                  </span>
                                  <Tooltip
                                    placement="top"
                                    title={moment(proposal.endDate).format(
                                      "DD MMMM YYYY"
                                    )}
                                  >
                                    <Span>
                                      <Countdown
                                        className="count-down"
                                        date={proposal.endDate}

                                        // 2
                                      />
                                      &nbsp;Remaining
                                    </Span>
                                  </Tooltip>
                                </Row>
                                <Row className="justify-content-end">
                                  <div
                                    className={
                                      show === 1 ? "details" : "details-hide"
                                    }
                                    onClick={() =>
                                      proposalRedirect(
                                        proposal["pollingContract"]
                                      )
                                    }
                                  >
                                    Details
                                  </div>
                                </Row>
                                {/* </div> */}
                              </>
                            ) : (
                              <>
                                <Row className="poll-ended">
                                  {" "}
                                  <span style={{ marginRight: "5px" }}>
                                    {" "}
                                    <img
                                      style={{
                                        height: "14px",
                                        width: "14px",
                                        marginTop: "-2px",
                                      }}
                                      className="time-inactive"
                                      src={require("../../assets/styles/images/Time-Inactive.svg")}
                                    ></img>
                                  </span>{" "}
                                  Poll Ended
                                </Row>
                                <Row className="percent-line">
                                  <div className="bar-line">
                                    <GreenLine
                                      style={{ width: yesVotesWidth + "%" }}
                                    ></GreenLine>
                                    <RedLine
                                      style={{ width: noVotesWidth + "%" }}
                                    ></RedLine>
                                  </div>{" "}
                                </Row>
                                <Row className="vote-number">
                                  {yesVotes + noVotes} {(yesVotes+noVotes).length>1?"Votes":"Vote"} 
                                </Row>
                              </>
                            )}
                          </TableCell>
                        </Column>
                      </Row>
                    </TableRow>
                  );
                })
              ) : (
                <div className="display-flex justify-content-center p-t-50">
                  {" "}
                  <img className="load" src={Loader}/>
                  {/* No Record found */}
                </div>
              )}
              <Row onClick={handleView} className="view-all">
                {props.state.proposalsList.length > 0
                  ? "View All Proposals"
                  : ""}
              </Row>
            </TableBody>
          </Table>
        </Grid>
      </Grid>
      <div>
        <DivBlocksComponent />
      </div>
      {/* <div style={{borderTop:"1px solid black"}}></div> */}
      <div>
        <FooterComponent />
      </div>
    </div>
  );
}

const Span = styled.span`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: #909090;
`;
