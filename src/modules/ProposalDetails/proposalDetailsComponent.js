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
import HeaderMain from "../header/header";
import RecentProposal from "../Dashboard/recentProposal";
import FooterComponent from "../footer/footerComponent";
import parse from "html-react-parser";
import Pdf from "../Dashboard/Proposal-ABC_ Terms & Conditions.pdf";
import Doc from "../Dashboard/Proposal-ABC_ Terms & Conditions.docx";
import { makeStyles, mergeClasses } from "@material-ui/styles";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { PieChart } from "react-minimal-pie-chart";
import ReactDOM from "react-dom";
import Utils from "../../utility";
import { ProposalService } from "../../services/index";
import moment from "moment";
import Web3 from "web3";

import { useLocation, useParams } from "react-router";
import { castVotingProposal } from "../../services/proposalService";
import { getVotePercentageOnProposal } from "../../services/proposalService";
// let masterContractAbi = require("../../common/abis/masterContractAbi.json").abi;

let proposalContractAbi =
  require("../../common/abis/proposalContractAbi.json").abi;

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function removeTags(str) {
  return <div dangerouslySetInnerHTML={{ __html: str }}></div>;
}

export default function ProposalDetails(props) {
  React.useEffect(() => {
    let newaddress = [
      {
        image: "/images/network.svg",
        name: "xdc5c7257f7088b9bb6939764bf479b4220f52d3857",
        time: "1 hr 5 min ago",
      },
      {
        image: "/images/network.svg",
        name: "xdcbc30809b5e2d894ec485dbaa456694779712fdb9",
        time: "1 hr 5 min ago",
      },
    ];
    setAddress(
      newaddress.map((object) => {
        return {
          image: object.image,
          name: object.name,
          time: object.time,
        };
      })
    );
    setProposalAddress(proposalAddressObject.address);
  }, []);

  const [newaddress, setAddress] = React.useState([]);

  const [open3, setOpen3] = React.useState(false);
  const [pieData, setPieData] = React.useState([]);
  const [no, setNotSupport] = React.useState(0);
  const [yes, setSupport] = React.useState(0);

  const [isButtonClicked, setIsButtonClicked] = React.useState(false);
  const [proposalAddress, setProposalAddress] = useState("");
  const proposalAddressObject = useParams();
  useEffect(() => {
    getVotePercentage();
  }, []);

  const castProposalVote = async (isSupport) => {
    let web3;
    web3 = new Web3(window.web3.currentProvider);
    console.log(window.web3.currentProvider);
    window.ethereum.enable();

    web3.eth.getAccounts().then(async (accounts) => {
      if (!accounts || !accounts.length) {
        Utils.apiFailureToast("Please login to Xinpay extension");
        return;
      }
      const contract = new web3.eth.Contract(
        proposalContractAbi,
        proposalAddress
      );
      const acc = accounts[0];
      const castProposalResponse = await contract.methods
        .cast_vote_for_proposal(true, Date.now())
        .send({ from: acc })
        .catch((err) => {
          Utils.apiFailureToast("You have already voted for this proposal");
          return;
          console.log(err, "error in votecast");
        });
      //   console.log("methods in contract====>", contract.methods);
      setOpen3(true);
      setIsButtonClicked(true);
      console.log("castProposalResponse", castProposalResponse);
      const reqData = {
        pollingContract: proposalAddress,
        voterAddress: acc,
        support: Boolean(isSupport),
      };
      castProposal(reqData);
      getVotePercentage(proposalAddress);
      return castProposalResponse;
    });
  };

  function shorten(b, amountL = 13, amountR = 3, stars = 3) {
    return `${b.slice(0, amountL)}${".".repeat(stars)}${b.slice(
      b.length - 5,
      b.length
    )}`;
  }

  const handleClose3 = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen3(false);
  };

  const handleCloseDailog = () => {
    setOpen3(true);
    setIsButtonClicked(true);
  };

  //   const getVotePercentage = async (proposalAddress) => {
  //     // const getVote = await getVotePercentageOnProposal();
  //     // setsupport(getVote.yes);
  //     // console.log("yes", getVote.yes);

  //     const response = await getVotePercentageOnProposal().catch((err) => {
  //       console.log(err);
  //     });
  //     console.log("yes", response);
  //     // setsupport(response.yes);
  //     const data = [
  //       {
  //         title: "support",
  //         value: getVote.yes,
  //         color: "#3AB70D",
  //       },
  //       { title: "reject", value: getVote.No, color: "#F43D3D" },
  //     ];
  //     setPieData(data);
  //     return getVote;
  //   };

  const getVotePercentage = async () => {
    const getVote = await getVotePercentageOnProposal(proposalAddress);
    console.log("getvotepercentage", getVote);
    const yes = getVote.supportpercentage.yes;
    const no = getVote.supportpercentage.No;
    setSupport(getVote.supportpercentage.yes);
    setNotSupport(getVote.supportpercentage.No);

    // const data = [
    //   {
    //     title: "support",
    //     value: getVote.yes,
    //     color: "#3AB70D",
    //   },
    //   { title: "reject", value: getVote.No, color: "#F43D3D" },
    // ];
    // setPieData(data);
    return getVote;
  };
  const castProposal = async (reqData) => {
    const result = await castVotingProposal(reqData);
    console.log("result", result);
  };
  const notSupport = data.no;
  const support = data.yes;

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
                    Status: <span>{props.state.proposalDetails.status}</span>{" "}
                  </Row>
                </Column>
                <Column>
                  <Row className="time-proposal">
                    <span style={{ marginRight: "-170px" }}>
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
              {!isButtonClicked ? (
                <div className="recent-proposal-div-proposal2">
                  <div className="div2-heading">
                    Do you support this proposal?
                  </div>
                  <div className="button-div-support">
                    <button
                      onClick={() => {
                        handleCloseDailog();
                        castProposalVote(true);
                        getVotePercentage();
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
                        castProposalVote(false);
                        getVotePercentage();
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
                        value: { yes },
                        color: "#3AB70D",
                      },
                      {
                        title: "reject",
                        value: { no },
                        color: "#F43D3D",
                      },
                    ]}
                    // data={pieData}
                  />
                  <div className="piediv">
                    <div className="display-flex">
                      <div className="box-support"></div>
                      <div className="spt">Support{yes}%</div>
                    </div>
                    <div className="display-flex">
                      <div className="box-reject"></div>
                      <div className="rjt">Reject{data.no}%</div>
                    </div>
                  </div>
                </div>
              )}
            </Row>
            <Row>
              <div className="recent-proposal-div-proposal3">
                <div className="div2-voters">
                  <div className="voter-heading">Voters</div>
                  <div className="voter-number">122 Votes</div>
                </div>
                <div className="griddiv-voter">
                  <TableBody>
                    {newaddress.map((row, index) => {
                      return (
                        <TableRow className="table-mid-line">
                          <Row className="table-between">
                            <Row>
                              <Column>
                                <TableCell style={{ border: "none" }}>
                                  <Row>
                                    <span>
                                      <img
                                        className="voter-image"
                                        src={row.image}
                                      ></img>
                                    </span>
                                  </Row>
                                </TableCell>
                              </Column>

                              <Column>
                                <TableCell
                                  className="mobile-div-right"
                                  style={{ border: "none", marginLeft: "20px" }}
                                >
                                  <Row className="vote-address">
                                    {shorten(row.name)}
                                  </Row>
                                </TableCell>
                              </Column>
                            </Row>
                            <Row>
                              <Column>
                                <TableCell
                                  className="mobile-div-right"
                                  style={{ border: "none" }}
                                >
                                  <Row className="voter-number">{row.time}</Row>
                                </TableCell>
                              </Column>
                            </Row>
                          </Row>
                        </TableRow>
                      );
                    })}
                  </TableBody>
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
        open={open3}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={handleClose3}
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
