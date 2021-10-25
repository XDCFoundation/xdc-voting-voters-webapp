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
  };
  const viewCommunity = () => {
    history.push("/community");
  };
  const viewXdcForm = () => {
    history.push("/");
  };
  const classes = useStyles();

  return (
    <Div>
      <Grid item xs={12}>
        <Grid container spacing={5}>
          <Grid className={classes.gridOne} item xs={12} sm={6} md={4}>
            <FirstBlock>
              <Row
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                }}
                onClick={viewGovernance}
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit quisque
                venenatis.
              </RowSubheading>
            </FirstBlock>
          </Grid>

          <Grid className={classes.gridOne} item xs={12} sm={6} md={4}>
            <SecondBlock>
              <Row
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                }}
                onClick={viewXdcForm}
              >
                <Img
                  className="time-inactive"
                  src={require("../../assets/styles/images/Group 32.svg")}
                />
                <ImgRedirect
                  src={require("../../assets/styles/images/External-Link.svg")}
                />
              </Row>
              <RowHeading>XDC Forum</RowHeading>
              <RowSubheading>
                Mauris neque urna, sodales at molestie ut, pulvinar eu lorem.
              </RowSubheading>
            </SecondBlock>
          </Grid>
          <Grid className={classes.gridOne} item xs={12} sm={6} md={4}>
            <ThirdBlock>
              <Row
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                }}
                onClick={viewCommunity}
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
                Cras porttitor iaculis sapien eu fringilla Cras in ligula
                egestas ipsum quis urna.
              </RowSubheading>
            </ThirdBlock>
          </Grid>
        </Grid>
      </Grid>
    </Div>
  );
}
const Div = styled.div`
  width: 100%;
  max-width: 1280px;
  margin-top: 50px;
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
  height: 150px;
  padding: 20px;
  max-width: 380px;
`;
const SecondBlock = styled.div`
  background: #fdfeff 0% 0% no-repeat padding-box;
  border: 1px solid #cee6fd;
  border-radius: 6px;
  width: 100%;
  height: 150px;
  max-width: 380px;
  padding: 20px;
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
  height: 150px;
  padding: 20px;
  max-width: 380px;
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
