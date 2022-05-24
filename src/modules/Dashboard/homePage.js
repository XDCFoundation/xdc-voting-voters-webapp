import React from "react";
import styled from "styled-components";
import { Column, Row } from "simple-flexbox";
import "../../assets/styles/custom.css";
import HeaderMain from "../header/header";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FooterComponent from "../footer/footerComponent";
import Paper from "@material-ui/core/Paper";
import { history } from "../../managers/history";
import { GOVERNANCE_DESCRIPTION } from "../../constants";
import FaqComponent from "../XvdFaq/xvdFaq";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    maxWidth: "1280px",
    // position: "absolute",
    marginTop: "-102px",
    marginBottom: "40px",
    zIndex: "1",
    top: "145px",

    width: "100%",
    "@media (min-width: 300px) and (max-width: 567px)": {
      maxWidth: "95%",
    },
    "@media (min-width: 567px) and (max-width: 767px)": {
      maxWidth: "500px",
    },
    "@media (min-width: 767px) and (max-width: 1440px)": {
      maxWidth: "95%",
    },
  },
  rowDiv: {
    width: "100%",
    alignItems: "center",
    height: "53px",
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    borderRadius: "6px",
    opacity: "1",
    justifyContent: "space-between",
  },
  line: {
    width: "100%",
    marginTop: "0px",
    marginBottom: "0px",
  },
  mainContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  gridOne: {
    display: "flex",
    justifyContent: "center",
    padding: "30px",
    width: "100%",
    "@media (min-width: 300px) and (max-width: 767px)": {
      display: "flex",
      justifyContent: "center",
      padding: "5px !important",
    },
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "100%",
    maxWidth: "240px",
    height: "220px",
    display: "flex",
    justifyContent: "center",
    background: "#FDFEFF 0% 0% no-repeat padding-box",
    border: "1px solid #E3E7EB",
    borderRadius: "6px",
    opacity: 1,
    "@media (min-width: 300px) and (max-width: 767px)": {
      height: "137px",
      width: "150px",
    },
  },
}));

export default function HomePage() {
  //   const backButton = () => {
  //     history.push("/");
  //   };
  //   React.useEffect(() => {
  //     let address = [
  //       {
  //         image: "/images/Block-Explorer.svg",
  //         name: "Block Explorer",
  //       },
  //       {
  //         image: "/images/Network-Stats.svg",
  //         name: "Network Stats",
  //       },
  //       {
  //         image: "/images/Master-Nodes.svg",
  //         name: "Masternodes",
  //       },
  //       {
  //         image: "/images/XinPay.svg",
  //         name: "Web Wallet",
  //       },
  //       {
  //         image: "/images/Android-Wallet.svg",
  //         name: "Android Wallet",
  //       },
  //       {
  //         image: "/images/XinPay.svg",
  //         name: "XinPay",
  //       },
  //       {
  //         image: "/images/API-Documents.svg",
  //         name: "XinFin API",
  //       },
  //       {
  //         image: "/images/XinFin-Docs.svg",
  //         name: "XinFin Docs",
  //       },

  //       {
  //         image: "/images/One-Click-Install.svg",
  //         name: "One Click Installer",
  //       },
  //     ];

  //     setAddress(
  //       address.map((object) => {
  //         return {
  //           image: object.image,
  //           name: object.name,
  //         };
  //       })
  //     );
  //   }, []);

  //   const [address, setAddress] = React.useState([]);

  const createProposal = () => {
    history.push("/create");
  };
  const viewProposal = () => {
    history.push("/yourProposals");
  };

  const classes = useStyles();
  return (
    <div>
      <Column className="header-div">
        <div>
          {" "}
          <HeaderMain />{" "}
        </div>

        {/* <div className="header-homepage">
        <HeaderMain />
      </div> */}
        <Row className="row-2">
          <div className="row-2-width">
            <Column className="mid-div">
              <Row className="xdc-governance">XDC Governance </Row>

              <Row className="xdc-para">
                <div className="para-div">
                  Decentralized voting platform to make voting on your on-chain
                  proposals fast, easy and secure.
                </div>
              </Row>
              <Row className="proposal-buttons">
                <Column>
                  <button className="see-proposal" onClick={viewProposal}>
                    See your proposals
                  </button>
                </Column>
                <Column>
                  <button className="create-proposal" onClick={createProposal}>
                    Create Proposal
                  </button>
                </Column>
              </Row>
            </Column>
            <div className="mobile-alldiv">
              <img
                className="header-image"
                src={require("../../assets/styles/images/headerImage.svg")}
              ></img>
              <Row className="proposal-buttons-tab">
                <Column>
                  <button className="see-proposal-tab" onClick={viewProposal}>
                    See your proposals
                  </button>
                </Column>
                <Column>
                  <button
                    className="create-proposal-tab"
                    onClick={createProposal}
                  >
                    Create Proposal
                  </button>
                </Column>
              </Row>
              {/* <Row className="div-box">
                <Row className="mobile-divbox">
                  <Column className="div-1">
                    <Row className="div-1-row">getPassedProposals}</Row>
                    <Row className="div-1-row1">Proposal Passed</Row>
                  </Column>
                  <Column className="div-1">
                    <Row className="div-1-row">getTotalVoting}</Row>
                    <Row className="div-1-row1">Voting Addresses</Row>
                  </Column>
                </Row>
                <Row className="mobile-lower-div">
                  <Column className="div-1">
                    <Row className="div-1-row">getVotesCasted}</Row>
                    <Row className="div-1-row1">Votes Casted </Row>
                  </Column>
                </Row>
              </Row> */}
            </div>
          </div>
        </Row>
      </Column>
      <Column>
        <div className="governance-title">XDC Governance?</div>
        <div className="governance-description-box">
          <div className="governance-description">{GOVERNANCE_DESCRIPTION}</div>
        </div>
      </Column>
      <Column>
        <div className="governance-work">How XDC Governance works?</div>
        <div className="steps">
          <div className="step-tab">
            <div className="step-tab-1">
              <div className="step-1">
                <img
                  src={require("../../assets/styles/images/Step1.svg")}
                ></img>
                <div className="step1-heading">1. connect wallet</div>
                <div className="step1-des">
                  Connect authorised XDCPay wallet with XDC Governance
                </div>
              </div>
              <div className="step-2">
                <img
                  src={require("../../assets/styles/images/Step2.svg")}
                ></img>
                <div className="step1-heading">2. Create Proposal</div>
                <div className="step1-des">
                  Create a Proposal and add supporting documents
                </div>
              </div>
            </div>
            <div className="step-tab-2">
              <div className="step-3">
                <img
                  src={require("../../assets/styles/images/Step3.svg")}
                ></img>
                <div className="step1-heading">3. Add Voters</div>
                <div className="step2-des">
                  Add address groups that can vote on the proposal
                </div>
              </div>
              <div>
                <img
                  src={require("../../assets/styles/images/Step4.svg")}
                ></img>
                <div className="step1-heading">4. Track Proposals</div>
                <div className="step2-des">
                  Track the voting percentage on your proposals
                </div>
              </div>
            </div>
          </div>
        </div>
      </Column>
      <Column>
        <div className="faq">Frequently Asked Questions</div>
        <div className="faq-sec">
          <FaqComponent />
        </div>
      </Column>
      <div>
        <FooterComponent />
      </div>
    </div>
  );
}
const ColumnDiv = styled.div`
  justify-content: center;
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
`;
const RowDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  justify-content: center;

  a:hover {
    text-decoration: none !important;
  }
`;
const Back = styled.span`
  text-align: left;
  font-family: "Inter", sans-serif;
  font-size: 17px;
  color: #ffffff;
  cursor: pointer;
`;

const Span = styled.span`
  color: var(--unnamed-color-2a2a2a);
  text-align: center;
  letter-spacing: 0px;
  color: #2a2a2a;
  opacity: 1;
  white-space: nowrap;
  font-family: "Inter", sans-serif;
  font-size: 17px;
  font-weight: 600;
  margin-top: 10px;
  @media (min-width: 300px) and (max-width: 767px) {
    font-family: "Inter", sans-serif;
    margin-top: 10px;
    font-size: 11px;
  }
`;
const Spacing = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  height: auto;
  padding: 11px 24px;
  opacity: 1;
  background: #ffffff 0% 0% no-repeat padding-box;
  align-items: center;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  @media (min-width: 300px) and (max-width: 767px) {
    display: block;
  }
`;
const Container = styled.div`
  display: flex;
  word-break: break-all;
  width: 100%;
  align-items: center;
`;

const Div = styled.div`
  height: auto;
  padding: 46px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #e3e7eb;
  border-radius: 0% 0% 6px 6px;
  opacity: 1;
  @media (min-width: 300px) and (max-width: 767px) {
    padding: 30px;
  }
`;

const Heading = styled.span`
  white-space: nowrap;
  letter-spacing: 0px;
  color: #2a2a2a;
  opacity: 1;
  box-shadow: none;

  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 22px;
`;

const ImageView = styled.img`
  @media (min-width: 300px) and (max-width: 767px) {
    width: 60px;
  }
`;
