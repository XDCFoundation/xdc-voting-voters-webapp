import React, { useState, useEffect } from "react";
import { Column, Row } from "simple-flexbox";
import "../../assets/styles/custom.css";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import HeaderMain from "../header/header";
import FooterComponent from "../footer/footerComponent";
import Pdf from "../Dashboard/Proposal-ABC_ Terms & Conditions.pdf";
import Doc from "../Dashboard/Proposal-ABC_ Terms & Conditions.docx";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { PieChart } from "react-minimal-pie-chart";
import Utils from "../../utility";
import moment from "moment";
import Countdown from "react-countdown";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function removeTags(str) {
  return <div dangerouslySetInnerHTML={{ __html: str }}></div>;
}

export default function ProposalDetails(props) {
  function shorten(b, amountL = 13, amountR = 3, stars = 3) {
    return `${b.slice(0, amountL)}${".".repeat(stars)}${b.slice(
      b.length - 5,
      b.length
    )}`;
  }

  let totalVotes = [];
  if (
    props.state &&
    props.state.proposalDetails &&
    props.state.proposalDetails.yesVotes &&
    props.state.proposalDetails.yesVotes.length
  )
    totalVotes = [...props.state.proposalDetails.yesVotes];

  if (
    props.state &&
    props.state.proposalDetails &&
    props.state.proposalDetails.noVotes &&
    props.state.proposalDetails.noVotes.length
  )
    totalVotes = [...totalVotes, ...props.state.proposalDetails.noVotes];
  if (totalVotes.length > 6) totalVotes.length = 6;

  return (
    <div>
      <div className="header-div-all">
        {" "}
        <HeaderMain />
      </div>

      <Column>
        <div className="all-div-proposal">
          <Column>
            <div className="back-image" onClick={props.backButton}>
              <img src="/images/Back-Arrow.svg" style={{ width: "15px" }} />
              <div className="back-button">Back</div>
            </div>
            <div className="recent-proposal-div-proposal">
              <Row className="recent-add-div-proposal">
                <Column>
                  <Row className="date-proposal">
                    Posted on{" "}
                    {moment(props.state.proposalDetails.createdOn).format("LL")}
                  </Row>
                  <Row className="name-proposal">
                    {props.state.proposalDetails.proposalTitle}{" "}
                  </Row>
                  <Row className="status-proposal">
                    Status: &nbsp;
                    <span>{props.state.proposalDetails.status}</span>{" "}
                  </Row>
                </Column>
                <Column>
                  <Row className="time-proposal">
                    <span style={{ marginRight: "5px" }}>
                      <img
                        style={{
                          height: "17px",
                          width: "17px",
                          marginTop: "-3px",
                        }}
                        className="time-inactive"
                        src={require("../../assets/styles/images/Time-Active.svg")}
                      ></img>
                      &nbsp;
                      <span>
                        {props.state.proposalDetails.endDate ? (
                          <Countdown
                            className="count-down"
                            date={props.state.proposalDetails.endDate}
                          />
                        ) : (
                          ""
                        )}
                      </span>
                    </span>
                    <span>Remaining</span>
                  </Row>
                </Column>
              </Row>
              <div className="griddiv-1">
                <Row>
                  <Grid
                    lg={13}
                    style={{ width: "100%" }}
                    className="tablegrid_address"
                  >
                    <Grid
                      component={Paper}
                      style={{ boxShadow: "0px 0px 0px 0px" }}
                    >
                      <Column className="text-main">
                        <Row className="heading-1">
                          {removeTags(props.state.proposalDetails.description)}
                        </Row>
                      </Column>
                      <Row className="doc-1">
                        <div>
                          <span>
                            {" "}
                            <img
                              className="attachment-logo"
                              src={require("../../assets/styles/images/Attachment.svg")}
                            ></img>
                          </span>
                          <a href={Pdf} target="_blank">
                            {" "}
                            <span className="attachment-heading">
                              Proposal Terms and Conditions.pdf
                            </span>
                          </a>
                          <span>
                            <img
                              className="external-image-proposal"
                              src={require("../../assets/styles/images/External-Link.svg")}
                            ></img>
                          </span>
                        </div>
                      </Row>
                      <Row className="doc-1">
                        <div>
                          <span>
                            {" "}
                            <img
                              className="attachment-logo"
                              src={require("../../assets/styles/images/Attachment.svg")}
                            ></img>
                          </span>
                          <a href={Doc} target="_blank">
                            {" "}
                            <span className="attachment-heading">
                              About ABC Corporation.doc
                            </span>
                          </a>
                          <span>
                            <img
                              className="external-image-proposal2"
                              src={require("../../assets/styles/images/External-Link.svg")}
                            ></img>
                          </span>
                        </div>
                      </Row>
                    </Grid>
                  </Grid>
                </Row>
                <Row></Row>
                <Row></Row>
              </div>
            </div>
          </Column>
          <Column className="mobile-rightdiv">
            <Row>
              {!props.state.isButtonClicked ? (
                <div className="recent-proposal-div-proposal2">
                  <div className="div2-heading">
                    Do you support this proposal?
                  </div>
                  <div className="button-div-support">
                    <button
                      onClick={() => {
                        props.castProposalVote(true);
                      }}
                      className="support-button"
                    >
                      Yes, I support
                    </button>
                  </div>
                  <div className="button-div-support">
                    {" "}
                    <button
                      onClick={() => {
                        props.castProposalVote(false);
                      }}
                      className="reject-button"
                    >
                      No, I Reject
                    </button>
                  </div>
                </div>
              ) : (
                <div className="recent-proposal-div-proposal2">
                  <div className="div2-heading">Vote Breakdown</div>

                  <PieChart
                    className="piechart"
                    data={[
                      {
                        title: "support",
                        value: props.state.proposalDetails.yesVotes.length,
                        color: "#3AB70D",
                      },
                      {
                        title: "reject",
                        value: props.state.proposalDetails.noVotes.length,
                        color: "#F43D3D",
                      },
                    ]}
                  />
                  <div className="piediv">
                    <div className="display-flex">
                      <div className="box-support"></div>
                      <div className="spt">
                        {props.state.proposalDetails.yesVotes.length}
                      </div>
                    </div>
                    <div className="display-flex">
                      <div className="box-reject"></div>
                      <div className="rjt">
                        {props.state.proposalDetails.noVotes.length}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Row>
            <Row>
              <div className="recent-proposal-div-proposal3">
                <div className="div2-voters">
                  <div className="voter-heading">Voters</div>
                  <div className="voter-number">
                    {totalVotes.length}&nbsp; Votes
                  </div>
                </div>
                <div className="griddiv-voter">
                  {totalVotes.map((row, index) => {
                    return AddressComponent(row);
                  })}
                  {/*{props?.state?.proposalDetails?.noVotes?.map((row, index) => {*/}
                  {/*    return AddressComponent(row)*/}
                  {/*})}*/}
                </div>
                <div className="view-voter" onClick={props.handleClickVoter}>
                  View All Voters
                </div>
              </div>
            </Row>

            <Row>
              <div className="recent-proposal-div-proposal4">
                <div className="display-flex p-polling-contract">
                  <div className="polling-heading">Polling Contract</div>
                  <div className="address-number">
                    {props.state.proposalAddress}
                    <span>
                      <img
                        className="external-image-proposal4"
                        src={require("../../assets/styles/images/External-Link.svg")}
                      ></img>
                    </span>
                  </div>
                </div>
              </div>
            </Row>
            <div className="recent-add-div-proposal2"></div>
          </Column>
        </div>
        <div className="proposalpage-footer">
          <FooterComponent />
        </div>
      </Column>

      <Snackbar
        open={props.open}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={props.handleClose}
      >
        <Alert severity="" className="alert">
          <div className="alert-div">
            <span className="alert-span">
              <img
                className="done-logo"
                src={require("../../assets/styles/images/DONE.svg")}
              ></img>
            </span>
            <span>
              <div className="toast-message">
                Your vote is successfully casted
              </div>
              <div className="toast-address">
                Thank you for your contribution in adding transparency to XDC
                network
              </div>
            </span>
          </div>
        </Alert>
      </Snackbar>
    </div>
  );
}

function AddressComponent(row) {
  return (
    <>
      <Row className="p-8 justify-content-between">
        <Row>
          <div className="b-r-50">
            <img className="voter-image b-r-50" src={row.image}></img>
          </div>
          <div className="fs-15 color-2A2A2A p-l-sm">
            {row.voterAddress.substr(0, 13)}...
            {row.voterAddress.substr(row.voterAddress.length - 5, 5)}
          </div>
        </Row>
        <div>{Utils.epocToPrettyTime(row.createdOn)}</div>
      </Row>
    </>
  );
}
