import React, { useState, useEffect } from "react";
import { Column, Row } from "simple-flexbox";
import { Button } from "@material-ui/core";
import CustomInput from "../../common/components/CustomInput";
import { history } from "../../managers/history";
import "../../assets/styles/custom.css";
import utility from "../../utility";
import HeaderMain from "./header";
import RecentProposal from "../Dashboard/";
import DivBlocksComponent from "../Dashboard/divComponent";
import FooterComponent from "../footer/footerComponent";
// import {getTotalVotesCasted} from "../../services/proposalService";
import Utils from '../../utility';
import { getTotalVotesCasted, getTotalPassedProposals, getTotalVotingAddress } from '../../services/proposalService';

// import {Passed} from "../Dashboard/index";

// import BaseComponent from "../baseComponent";

// import Web3 from 'web3';

// let proposalContractAbi = require('../../common/abis/proposalContractAbi.json').abi;

export default function Header(props) {


  //  const getPassedVote = async () => {
  //     let web3;
  //     web3 = new Web3(window.web3.currentProvider);
  //     window.ethereum.enable();
  //     const contract = new web3.eth.Contract(proposalContractAbi);
  //     const count = await contract.methods.get_total_passed_proposals().call();
  //     console.log(count,"counttttttttttttttt");
  //     if (count <= 0)
  //         return 0;
  //     return count;

  // }
  // getProposalPassed = async () => {
  //   let web3;
  //   web3 = new Web3(window.web3.currentProvider);
  //   console.log(window.web3.currentProvider)
  //   window.ethereum.enable();
  //   const contract = new web3.eth.Contract(masterContractAbi, "0x89CfE6bb2a708A336dEBcD8A6DE028146Ab1f841");
  //   const createProposalResponse = await contract.methods.created_Proposal_list().call().catch(err => {
  //       console.log(err, "====")
  //   })
  //   console.log(createProposalResponse, "====")
  // }
  const [getVotesCasted, setGetVotesCasted] = useState([])
  const [getPassedProposals, setGetPassedProposals] = useState([])
  const [getTotalVoting, setGetTotalVoting] = useState([])

  useEffect(() => {
    // setPageNumber((pagecount)/10);
    getVotes();
    getPassed();
    getVoting();
  }, []);

  const getVotes = async () => {
    const response = await getTotalVotesCasted().catch(err => {
      console.log(err);
    });

    setGetVotesCasted(response.countData);

  }

  const getVoting = async () => {
    const response = await getTotalVotingAddress().catch(err => {
      console.log(err);
    });

    setGetTotalVoting(response.length);

  }


  const getPassed = async () => {
    const response = await getTotalPassedProposals().catch(err => {
      console.log(err);
    });

    setGetPassedProposals(response.length);

  }


  const createView = () => {
    history.push("/create");
  };
  return (
    <div>
      <Column className="header-div">
        <div>
          {" "}
          <HeaderMain />{" "}
        </div>

        {/* !***********************!  */}

        <Row className="row-2">
          <div className="row-2-width">
            <Column className="mid-div">
              <Row className="xdc-governance">XDC Governance</Row>
              <Row className="xdc-para">
                <div className="para-div">
                  Decentralized community for maintaining the integrity of the
                  XinFin Blockchain through discussion and on-chain voting.
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
                    <Row className="div-1-row1">Voting Address</Row>
                  </Column>
                </Row>
                <Row className="mobile-lower-div">
                  <Column className="div-1">
                    <Row className="div-1-row">{getVotesCasted}</Row>
                    <Row className="div-1-row1">Votes Casted</Row>
                  </Column>
                </Row>
              </Row>
            </div>
          </div>
        </Row>
        <div className="recent-div">
          <div className="recent-proposal-div">
            <Row className="recent-add-div">
              <Column className="heading">Recent Proposals</Column>
              <Column>
                <div onClick={createView} className="create-wallet">
                  <p>Create Proposal</p>
                </div>
              </Column>
            </Row>
            <div className="griddiv">
              <RecentProposal />
            </div>

            {/* <Row onClick={handleView} className="view-all">
              View All Proposals
            </Row> */}

            <div>
              <DivBlocksComponent />
            </div>
          </div>
        </div>
      </Column>

      <div>
        <FooterComponent />
      </div>
    </div>
  );
}
