import React, { useState, useEffect } from "react";
import { Column, Row } from "simple-flexbox";
import Jazzicon from "react-jazzicon";
import "../../assets/styles/custom.css";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import HeaderMain from "../header/header";
import FooterComponent from "../footer/footerComponent";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { PieChart } from "react-minimal-pie-chart";
import Utils from "../../utility";
import moment from "moment";
import Countdown from "react-countdown";
import styled from "styled-components";
import { Tooltip } from "@material-ui/core";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function removeTags(str) {
  return <div dangerouslySetInnerHTML={{ __html: str }}></div>;
}

export default function ProposalDetails(props) {
  console.log(props.state.proposalDetails.proposalDocuments, "doc");
  console.log(props.state.proposalDetails.endDate, Date.now(), "ending date");
  console.log(
    Date.now(),
    props.state.proposalDetails.endDate,
    "ending date new"
  );
  // const [copy, setCopy]=useState("copy")
  const [copyCheck, setCopyCheck] = useState("");

  function shorten(b, amountL = 13, amountR = 3, stars = 3) {
    return `${b.slice(0, amountL)}${".".repeat(stars)}${b.slice(
      b.length - 5,
      b.length
    )}`;
  }
  // const handleToastClose=()=>{
  //   setOpen(false)
  // }
  const startDate = props.state.proposalDetails.startDate;
  const endDate = props.state.proposalDetails.endDate;
  console.log(startDate, endDate);

  const Completionist = () => {
    window.location.href = "/";
  };

  const [copiedtext, setCopiedText] = useState("copy");
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
  // if (totalVotes.length > 6) totalVotes.length = 6;

  return (
    <div>
      <div className="header-div-all">
        {" "}
        <HeaderMain />
      </div>

      <Column>
        <div className="all-div-proposal">
          <ColumnDiv>
            <div className="back-image">
              <img
                onClick={props.backButton}
                src="/images/Back-Arrow.svg"
                style={{
                  width: "21px",
                  height: "18px",
                  marginTop: "3px",
                  cursor: "pointer",
                }}
              />
              <div className="back-button" onClick={props.backButton}>
                Back
              </div>
            </div>
            <div className="recent-proposal-div-proposal">
              <Row className="recent-add-div-proposal">
                <Column>
                  <Row className="date-proposal">
                    Posted on{" "}
                    {moment(props.state.proposalDetails.createdOn).format(
                      "DD MMMM YYYY"
                    )}
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
                      <Tooltip
                        placement="top"
                        title={moment(
                          props.state.proposalDetails.endDate
                        ).format("DD MMMM YYYY")}
                      >
                        <span>
                          {props.state.proposalDetails.endDate ? (
                            // props.state.proposalDetails.status!="Open"?<Redirect to={'/'} />:
                            <Countdown
                              className="count-down"
                              date={props.state.proposalDetails.endDate}
                            >
                              <Completionist />
                            </Countdown>
                          ) : (
                            ""
                          )}
                        </span>
                      </Tooltip>
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
                      {console.log(props.state.proposalDetails.proposalDocuments, "hello mai ---")}
                      {props.state &&
                      props.state.proposalDetails &&
                      props.state.proposalDetails.proposalDocuments &&
                      props.state.proposalDetails.proposalDocuments.length
                        ? props.state.proposalDetails.proposalDocuments.map(
                            (doc, index) => {
                              console.log(doc, index, "docindex");
                              if (doc == "0" || doc == "") {
                                return "";
                              }

                              return (
                                <a
                                  href={props.state.proposalDocumentsUrl[index]}
                                  target="_blank !important"
                                >
                                  <Row className="doc-1">
                                    <span>
                                      {" "}
                                      <img
                                        className="attachment-logo"
                                        src={require("../../assets/styles/images/Attachment.svg")}
                                      />
                                    </span>
                                    <span className="attachment-heading">
                                      {" "}
                                      {doc.replace("images/", "")}{" "}
                                    </span>

                                    <span>
                                      <img
                                        className="external-image-proposal"
                                        src={require("../../assets/styles/images/External-Link.svg")}
                                      ></img>
                                    </span>
                                  </Row>
                                </a>
                              );
                            }
                          )
                        : ""}
                    </Grid>
                  </Grid>
                </Row>
              </div>
            </div>
          </ColumnDiv>
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
                        value: props?.state?.proposalDetails?.yesVotes?.length,
                        color: "#3AB70D",
                      },
                      {
                        title: "reject",
                        value: props?.state?.proposalDetails?.noVotes?.length,
                        color: "#F43D3D",
                      },
                    ]}
                  />
                  <div className="piediv">
                    <div className="display-flex">
                      <div className="box-support"></div>
                      <div className="spt">
                        Support (
                        {Math.ceil(
                          (props?.state?.proposalDetails?.yesVotes?.length /
                            totalVotes.length) *
                            100
                        )}
                        %)
                      </div>
                    </div>
                    <div className="display-flex">
                      <div className="box-reject"></div>
                      <div className="rjt">
                        Reject (
                        {Math.floor(
                          (props?.state?.proposalDetails?.noVotes?.length /
                            totalVotes.length) *
                            100
                        )}
                        %)
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
                    {totalVotes.length}{" "}
                    {totalVotes.length > 1 ? "Votes" : "Vote"}
                  </div>
                </div>
                <div className="griddiv-voter">
                  {totalVotes && totalVotes.length >= 1 ? (
                    totalVotes.map((row, index) => {
                      if (totalVotes.length > 5) totalVotes.length = 5;
                      return AddressComponent(row, index);
                    })
                  ) : (
                    <>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        No Votes Casted
                      </div>
                    </>
                  )}
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
                    {proposalAddressComponent(props.state.proposalAddress)}

                    <span></span>
                  </div>
                </div>
              </div>
            </Row>
            <div className="recent-add-div-proposal2"></div>
          </Column>
        </div>
      </Column>

      {/* ***************************Vote succesfully casted************************************/}

      <Snackbar
        className="successfully-voted"
        open={props.state.open}
        // autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={props.handleClose}
      >
        <Alert severity="" className="alert">
          <div className="alert-div">
            <span className="alert-span"></span>
            <span>
              <div className="toast-message">
                <span className="textToast">
                  <img
                    className="ErrorIcon"
                    src={require("../../assets/styles/images/DONE.svg")}
                  ></img>
                  <span style={{ marginLeft: "30.53px", marginRight: "60px" }}>
                    Your vote is successfully casted
                  </span>
                  <span
                    onClick={props.handleClose}
                    style={{
                      float: "right",
                      cursor: "pointer",
                      marginTop: "-8px",
                    }}
                  >
                    X
                  </span>
                </span>
              </div>
            </span>
          </div>
        </Alert>
      </Snackbar>

      {/* *********************************************************** */}

      {/* *****************VOting Not Allowed Toast********************* */}
      <Snackbar
        className="not-allowed"
        open={props.state.open1}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={props.handleClose1}
      >
        <Alert severity="" className="alert">
          <div className="alert-div">
            <span className="alert-span"></span>
            <span>
              <div className="toast-message">
                <span className="textToast">
                  <img
                    className="ErrorIcon"
                    src={require("../../assets/styles/images/Error.svg")}
                  ></img>
                  <span style={{ marginLeft: "30.53px", marginRight: "60px" }}>
                    You are not allowed to vote
                  </span>
                </span>
              </div>
            </span>
          </div>
        </Alert>
      </Snackbar>
      {/* *************** */}

      {/* *****************Future vote Toast********************* */}
      <Snackbar
        className="voting-start"
        open={props.state.open2}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={props.handleClose2}
      >
        <Alert severity="" className="alert">
          <div className="alert-div">
            <span className="alert-span"></span>
            <span>
              <div className="toast-message">
                <span className="textToast">
                  <img
                    className="ErrorIcon"
                    src={require("../../assets/styles/images/Error.svg")}
                  ></img>
                  <span style={{ marginLeft: "30.53px", marginRight: "60px" }}>
                    Voting starts from{" "}
                    {moment(props.state.proposalDetails.startDate).format(
                      "DD MMMM YYYY"
                    )}
                  </span>
                </span>
              </div>
            </span>
          </div>
        </Alert>
      </Snackbar>
      {/* *************** */}
      <div>
        <FooterComponent />
      </div>
    </div>
  );
}

function AddressComponent(row, index) {
  return (
    <>
      <Row className="p-8 justify-content-between">
        <Row>
          <div className="b-r-50">
            <Jazzicon
              diameter={20}
              seed={Math.round(Math.random() * 10000000)}
            />
            {/*<img className="voter-image b-r-50" src={row.image}></img>*/}
          </div>
          <div className="fs-15 color-2A2A2A p-l-sm">
            {row.voterAddress.substr(0, 13)}...
            {row.voterAddress.substr(row.voterAddress.length - 5, 5)}
          </div>
        </Row>
        <div style={{ color: "#ACACAC", fontSize: "13px" }}>
          {moment(row.createdOn).format("D  MMM  ")}
        </div>
      </Row>
    </>
  );
}

function proposalAddressComponent(row) {
  var copy = 0;
  // const copyTo = (row) => {navigator.clipboard.writeText(row);}

  return (
    <>
      <Row className="p-8 justify-content-between">
        <a
          style={{ display: "flex" }}
          href={
            "https://observer.xdc.org/address-details/" +
            row.replace("0x", "xdc")
          }
          target="_blank"
        >
          <Row>
            <div className="fs-12 color-2A2A2A p-l-sm">
              {row.substr(0, 13)}...{row.substr(row.length - 5, 5)}
            </div>
          </Row>

          <img
            className="external-image-proposal4"
            src={require("../../assets/styles/images/External-Link.svg")}
          ></img>
        </a>

        <CopyToClipboard
          text={row.replace("0x", "xdc")}
          onCopy={() => console.log("copy to clipboard")}
        >
          {/*  onClick={ async() => {await window.navigator.clipboard.writeText(row)}}  */}
          <img
            style={{
              height: "35px",
              width: "40px",
              marginTop: "-9px",
              // marginTop:"-6px",
              cursor: "pointer",
            }}
            src={require("../../assets/styles/images/copy.jpg")}
          ></img>
        </CopyToClipboard>

        {/* <button 
                                onClick={() =>  {window.navigator.clipboard.writeText(row)
                                console.log(copy,"copppppppppppppppppppppppppppppppppppppppp")
                                }}
                              >
                              {!copy=="0"?"copy":"copied"}
                              </button> */}
        {/* <CopyToClipboard
                    text={row}
                    onCopy={() => this.setState({copied: row})}
                  /> */}
        {/* { this.state?.copied.length>=1 ? "Copied" : "Copy To Clipboard"} */}

        {/* <Tooltip
                      title={
                        
                      }
                      placement="top"
                    >
                      <button
                        style={{
                          color: "#2149b9",
                          backgroundColor: "white",
                          fontSize: 14,
                        }}
                      >
                        <i class="fa fa-clone" aria-hidden="true"></i>
                      </button>
                    </Tooltip> */}
        {/* </CopyToClipboard> */}
        {/* </p> */}
      </Row>
    </>
  );
}

const ColumnDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  max-width: 842px;
  @media (min-width: 300px) and (max-width: 1023px) {
    max-width: none;
  }
`;
