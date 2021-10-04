import React, { useState } from "react";
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
import divBlockComponent from "./divComponent";
import styled from "styled-components";

export default function RecentProposal(props) {

  const proposalRedirect =()=>{
    history.push('/proposal-details');
  }
  const handleView = () => {
    history.push("/view-all-proposals");
  };

  return (
    <div>
      <Grid lg={13} className="tablegrid_address">
        <Grid component={Paper} style={{ boxShadow: "0px 0px 0px 0px" }}>
          <Table
            className="table"
            aria-label="Whitelisted Addresses"
            style={{ boxShadow: "0px 0px 0px 0px" }}
          >
            <TableHead></TableHead>
            <TableBody>
              {props.proposals.map((proposal, index) => {
                return (
                
                  <TableRow className="table-mid-line">
                    <Row className="table-between">
                      <Column>
                        <TableCell style={{ border: "none" }}>
                          <Row className="date">Posted on {proposal["postedOn"]}</Row>
                          <Row className="name">{proposal["title"]} </Row>
                          <Row className="status">
                            <p>Status: &nbsp;</p>
                            <span
                              className={
                                proposal.status === "Open"
                                  ? "fc-blue"
                                  : proposal.status === "Passed"
                                  ? "fc-green"
                                  : "fc-red"
                              }
                            >
                              {proposal.status}
                            </span>
                          </Row>
                        </TableCell>
                      </Column>

                      <Column>
                        <TableCell
                          className="mobile-div-right"
                          style={{ border: "none" }}
                        >
                          {proposal.status === "Open" ? (
                            <>
                              <Row>
                                <span style={{ marginRight: "5px" }}>
                                  {" "}
                                  <img
                                    style={{
                                      height: "14px",
                                      width: "14px"
                                    }}
                                    className="m-b-4"
                                    src={require("../../assets/styles/images/Time-Active.svg")}
                                  />
                                </span>
                                <Span>
                                  {proposal.timeRemaining} Remaining
                                </Span>
                              </Row>
                              <Row>
                                <div className="details" onClick={proposalRedirect}>Details</div>
                              </Row>
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
                                  <div className="line-1"></div>
                                  <div className="line-2"></div>
                                </div>{" "}
                              </Row>
                              <Row className="vote-number">{proposal.passedVoteCount + proposal.failVoteCount} votes</Row>
                            </>
                          )}
                        </TableCell>
                      </Column>
                    </Row>
                    
                  </TableRow>
                 
                 
                );
                
              })}
              <Row onClick={handleView} className="view-all">
              View All Proposals
            </Row>
            </TableBody>
          </Table>
        </Grid>
      </Grid>

      <div style={{ paddingTop: "10%" }}></div>
    </div>
  );
}

const Span = styled.span`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: #909090;
`;
