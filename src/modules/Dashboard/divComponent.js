import React, { useState } from "react";
import { Column, Row } from "simple-flexbox";
import "../../assets/styles/custom.css";
import Grid from "@material-ui/core/Grid";
import { history } from "../../managers/history";
import FooterComponent from "../footer/footerComponent";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  gridOne: {
    width: "100%",
    "@media (min-width: 300px) and (max-width: 767px)": {
      display: "flex",
      justifyContent: "center",
    },
  },
}));

export default function DivBlocksComponent() {
  const viewGovernance = () => {
    history.push("/governance");
    window.scrollTo(0,0)
    
  };
  const viewCommunity = () => {
    history.push("/community");
    window.scrollTo(0,0)
  };
  const viewXdcForm = () => {
    history.push("/");
  };
  const classes = useStyles();

  return (
    <div>
    <Div>
      <Grid item xs={12}>
        <Grid container spacing={6}>
          <Grid className={classes.gridOne} item xs={12} sm={6} md={4}>
            <FirstBlock  onClick={viewGovernance}>
              <Row
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                }}
               
              >
                <Img
                  className="time-inactive"
                  src={require("../../assets/styles/images/Group 30.svg")}
                />
                <ImgRedirect
                  src={require("../../assets/styles/images/External-Link.svg")}
                />
              </Row>
              <RowHeading>Know about XDC Governance</RowHeading>
              <RowSubheading>
              Learn how XDC maintains the integrity of its global blockchain network.
              </RowSubheading>
            </FirstBlock>
          </Grid>

          <Grid className={classes.gridOne} item xs={12} sm={6} md={4}>
          <a style={{textDecoration:"none"}} href="https://www.reddit.com/r/xinfin/"> 
            <SecondBlock  onClick={viewXdcForm}>
              <Row
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                }}
               
              >
                <Img
                  className="time-inactive"
                  src={require("../../assets/styles/images/Group 32.svg")}
                />
              {/* <a href="https://www.reddit.com/r/xinfin/">  */}
               <ImgRedirect
                  src={require("../../assets/styles/images/External-Link.svg")}
                />
                {/* </a> */}
              </Row>
              <RowHeading>XDC Forum</RowHeading>
              <RowSubheading>
              Participate in XDC forums' open discussions and contribute to global blockchain development.
              </RowSubheading>
            </SecondBlock>
            </a>
          </Grid>
          <Grid className={classes.gridOne} item xs={12} sm={6} md={4}>
            <ThirdBlock  onClick={viewCommunity}>
              <Row
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                }}
               
              >
                <Img
                  className="time-inactive"
                  src={require("../../assets/styles/images/Community-Tools.svg")}
                />
                <ImgRedirect
                  src={require("../../assets/styles/images/External-Link.svg")}
                />
              </Row>
              <RowHeading>Community Tools</RowHeading>
              <RowSubheading>
              Explore and interact with the XDC Network through open community tools.
              </RowSubheading>
            </ThirdBlock>
          </Grid>
        </Grid>
      </Grid>
    </Div>
    </div>
  );
}
const Div = styled.div`
  width: 100%;
  max-width: 1280px;
  margin-top: 63px;
  margin-bottom: 108.5px;
`;
const Img = styled.img`
  width: 20px;
`;
const ImgRedirect = styled.img`
  width: 15px;
`;

const FirstBlock = styled.div`
  background: #fdfeff 0% 0% no-repeat padding-box;
  border: 1px solid #cee6fd;
  border-radius: 6px;
  width: 100%;
  height: 158px;
  padding: 20px;
  max-width: 380px;
  cursor:pointer;
`;
const SecondBlock = styled.div`
  background: #fdfeff 0% 0% no-repeat padding-box;
  border: 1px solid #cee6fd;
  border-radius: 6px;
  width: 100%;
  height: 158px;
  max-width: 380px;
  padding: 20px;
  cursor:pointer;
`;

const RowSubheading = styled.div`
  color: var(--unnamed-color-2a2a2a);
  text-align: left;
  font-family: "Inter";
  font-size: 15px;

  color: #2a2a2a;
`;
const ThirdBlock = styled.div`
  background: #fdfeff 0% 0% no-repeat padding-box;
  border: 1px solid #cee6fd;
  border-radius: 6px;
  width: 100%;
  height: 158px;
  padding: 20px;
  max-width: 380px;
  cursor:pointer;
`;
const RowHeading = styled.div`
  display: flex;
  flex-flow: row nowrap;
  color: var(--unnamed-color-2a2a2a);
  text-align: left;
  font-weight: 600;
  font-size: 17px;
  color: #2a2a2a;
`;
