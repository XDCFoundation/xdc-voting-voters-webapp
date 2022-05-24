import React, { useState, useEffect } from "react";
import { Column, Row } from "simple-flexbox";
import { history } from "../../managers/history";
import "../../assets/styles/custom.css";
import HeaderMain from "./header";
import RecentProposal from "../Dashboard/";

// import {
//   getTotalVotesCasted,
//   getTotalPassedProposals,
//   getTotalVotingAddress,
// } from "../../services/proposalService";
import Web3Dialog from "./mainDialog";

export default function Header(props) {
  // const [getVotesCasted, setGetVotesCasted] = useState([]);
  // const [getPassedProposals, setGetPassedProposals] = useState([]);
  // const [getTotalVoting, setGetTotalVoting] = useState([]);

  // useEffect(() => {
  //   getVotes();
  //   getPassed();
  //   getVoting();
  // }, []);

  // const getVotes = async () => {
  //   const response = await getTotalVotesCasted().catch((err) => {
  //     console.log(err);
  //   });

  //   setGetVotesCasted(response?.countData);
  // };

  // const getVoting = async () => {
  //   const response = await getTotalVotingAddress().catch((err) => {
  //     console.log(err);
  //   });
  //   setGetTotalVoting(response?.dataList?.length);
  // };

  // const getPassed = async () => {
  //   const response = await getTotalPassedProposals().catch((err) => {
  //     console.log(err);
  //   });
  //   setGetPassedProposals(response);
  // };

  const createView = () => {
    history.push("/create");
    window.scrollTo(0, 0);
  };
  return (
    <div>
      {/* {window.innerWidth < 1024 ? <Web3Dialog /> : ""} */}
      <Column className="header-div-all">
        {/* <img  className="ErrorIcon"  style={{width:"55px", height:"55px"}} src={require("../../assets/styles/images/Background.png")}></img> */}
        <div>
          {" "}
          <HeaderMain />{" "}
        </div>

        {/* !***********************!  */}

        {/* <Row className="row-2">
          <div className="row-2-width">
            <Column className="mid-div">
              <Row className="xdc-governance">XDC Governance </Row>

              <Row className="xdc-para">
                <div className="para-div">
                  Decentralized community for maintaining the integrity of the
                  XDC Blockchain through discussion and on-chain voting.
                </div>
              </Row>
            </Column>
            <div className="mobile-alldiv">
              <Row className="div-box">
                <Row className="mobile-divbox">
                  <Column className="div-1">
                    <Row className="div-1-row">{getPassedProposals}</Row>
                    <Row className="div-1-row1">Proposal Passed</Row>
                  </Column>
                  <Column className="div-1">
                    <Row className="div-1-row">{getTotalVoting}</Row>
                    <Row className="div-1-row1">Voting Addresses</Row>
                  </Column>
                </Row>
                <Row className="mobile-lower-div">
                  <Column className="div-1">
                    <Row className="div-1-row">{getVotesCasted}</Row>
                    <Row className="div-1-row1">Votes Casted </Row>
                  </Column>
                </Row>
              </Row>
            </div>
          </div>
        </Row> */}

        <div className="recent-div">
          {/* <div> */}

          <div className="recent-proposal-div">
            <div style={{ marginTop: "-76px" }}>
              <Row className="profile-div">
                <Column>
                  <Row>
                    <Column className="camera-div">
                      <img src="/images/camera.svg" className="camera-icon" />
                    </Column>

                    <Column className="profile-info">
                      <Row>
                        {" "}
                        <Row className="profile-name">Unnnamed</Row>
                        <img src="/images/pencil.svg" className="pencil-icon" />
                      </Row>
                      <Row className="profile-address">xdcf56..56d6a</Row>
                    </Column>
                  </Row>
                </Column>
                <Column>
                  <Column>
                    <div
                      onClick={createView}
                      id="div_create_prop"
                      className="create-wallet-hide create-wallet"
                    >
                      <p>Create Proposal</p>
                    </div>
                  </Column>
                </Column>
              </Row>
            </div>

            <Row className="recent-add-div">
              <Column className="heading">
                {" "}
                <Row>
                  Your Proposals{" "}
                  <input
                    placeholder="Search"
                    className="search-proposal"
                    type="text"
                    autoComplete="off"
                  />
                </Row>
              </Column>

              <Column className="proposal-filter">
                <Row>
                  <Column>
                    <Row className="filter">
                      <input className="proposal-checkbox" type="checkbox" />{" "}
                      Created by me
                    </Row>
                  </Column>
                  <Column>
                    <Row className="filter">
                      {" "}
                      <input className="proposal-checkbox" type="checkbox" />
                      Voted by me
                    </Row>
                  </Column>
                </Row>
                {/* <div
                  onClick={createView}
                  id="div_create_prop"
                  className="create-wallet-hide create-wallet"
                >
                  <p>Create Proposal</p>
                </div> */}
              </Column>
            </Row>
            <div className="griddiv">
              <RecentProposal />
            </div>
          </div>

          {/* </div> */}
        </div>
        {/* <div> <FooterComponent/> </div> */}
      </Column>
    </div>
  );
}
