import React, { useState } from "react";
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

export default function Header() {
 
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
                    <Row className="div-1-row">65</Row>
                    <Row className="div-1-row1">Proposal Passed</Row>
                  </Column>
                  <Column className="div-1">
                    <Row className="div-1-row">150</Row>
                    <Row className="div-1-row1">Voting Address</Row>
                  </Column>
                </Row>
                <Row className="mobile-lower-div">
                  <Column className="div-1">
                    <Row className="div-1-row">4538</Row>
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
