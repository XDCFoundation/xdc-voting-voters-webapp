import React from "react";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";
import HeaderMain from "../header/header";
import "../../assets/styles/custom.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FooterComponent from "../footer/footerComponent";
import { ClickAwayListener } from "@material-ui/core";
import { useHistory } from "react-router";
import { history } from "../../managers/history";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    maxWidth: "1280px",
    // position: "absolute",
    marginTop: "-104px",
    marginBottom: "40px",
    zIndex: "1",
    top: "145px",

    width: "100%",
    "@media (min-width: 300px) and (max-width: 567px)": {
      maxWidth: "300px",
    },
    "@media (min-width: 567px) and (max-width: 767px)": {
      maxWidth: "500px",
    },
    "@media (min-width: 767px) and (max-width: 1440px)": {
      maxWidth: "95%",
    },
  },
  rowdiv: {
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
  maincontainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
}));

export default function Xvdoverview() {
  const histor = useHistory();
  const backButton = () => {
    // histor.goBack();
    history.push("/");
  };
  const Click = () => {
    // window.scrollerTop(0,0);
  };
  function scrollWindow() {
    window.scrollTo(0, 0);
  }
  React.useEffect(() => {
    let address = [
      {
        heading: "",
        paragraph:
          "XDC Governance is the voting dApp that enables the members of the XDC Network to participate in important decisions by conducting fair blockchain-backed voting for every proposal. The application enables users to create proposals and supports on-chain voting. Using Voting dApp, the XDC platform aims to bring transparency and provide fair voting rights to all the network participants.",
        subparagraphone:
          " XDC Voting dApp can be used by the decentralized XDC community on two levels, as mentioned below:",
          subparagraphTwo:
          "XDC Admin: Using the voting dApp, the XDC Admin can vote, make proposals, add and eliminate to alter the group of whitelisted voters.",
          subparagraphThree:
          "Whitelisted Voters/ Masternode Voters: Voters on XDC can make a proposal and cast their votes as per the proposals."
      },
      {
        heading: "What Integrations does the XDC Voting dApp have?",
        paragraph:
          "The XDC Voting dApp is embedded with two fundamental integrations:",
        subparagraphTwo:
          "XDC Blockchain: XDC blockchain, an enterprise-grade hybrid blockchain with delegated Proof-of-Stake consensus, has a testnet called Apothem Network. XDC Voting dApp is integrated with Apothem network to foster data management and support.",
          subparagraphThree:
          "XDCPay: The Chrome browser wallet extension, XDCPay, connects the wallet to the XDC dApp and allows you to access the application on your browser.",
          subparagraphFour:
          "The XDC Voting dApp will improve the dynamics of decision making, proposal creation and voting for the decentralized XDC community. Every XDC member participating in the voting through this application gets equal voting rights and extensive opportunities to express their views.",
          subparagraphFive:
          "The application also uplifts credibility by allowing better decision-making and improving network integrity. XDC voting dApp will maintain, initiate and monitor the on-chain voting and proposal creation.",
          subparagraphSix:
          "With such an extensive governance portal, XDC targets maintaining transparency where the admin can vote, add and eliminate any whitelisted voters as per the network’s need."
      },
      // {
      //   // heading: "Voting Wallet Setup",
      //   subparagraphFour:
      //     "",
      // },
      // {
      //   // heading: "Off-chain Governance",
      //   subparagraphFour:
      //     "",
      // },
      // {
      //   // heading: "On-Chain Governance",
      //   subparagraphFour:
      //     "",
      // },
      // {
      //   heading: "Governance FAQs",
      //   paragraph:
      //     "bero elementum eu. Nunc pharetra, libero elementum dignissim volutpat, leo ante hendrerit leo, sit amet pellentesque nibh libero eu erat. Duis ac felis aliquam, efficitur dolor vel, vehicula augue. Aenean id egestas tortor. Proin congue turpis in turpis condimentum, nec auctor ex aliquam. Sed finibus ex vel justo dapibus, eget egestas quam facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id mollis dolor. Proin tristique enim quis vesti",
      // },
    ];

    setAddress(
      address.map((object) => {
        return {
          heading: object.heading,
          paragraph: object.paragraph,
          subparagraphone: object.subparagraphone,
          subparagraphTwo:object.subparagraphTwo,
          subparagraphThree:object.subparagraphThree,
          subparagraphFour:object.subparagraphFour,
          subparagraphFive:object.subparagraphFive,
          subparagraphSix:object.subparagraphSix
        };
      })
    );
  }, []);

  const [address, setAddress] = React.useState([]);

  const scrollerTop = (e) => {
    e.preventDefault();
    // window.scrollTo(0,1)
    // e.stopPropagation();
    // e.nativeEvent.stopImmediatePropagation();
    // return false;
  };
  const onchangeDropdown = (e) => {
    window.location.href = e.target.value;
  };

  const classes = useStyles();
  return (
    <div>
      <div className="header-div-all">
        <HeaderMain />
      </div>

      <div className={classes.maincontainer}>
        <div className={classes.root}>
          <Grid item xs={12}>
            <div style={{ marginBottom: "26px" }}>
              <img
                onClick={backButton}
                src="/images/Back-Arrow.svg"
                style={{ width: "15px", marginRight: "8px", cursor: "pointer" }}
              />
              <Back>Back</Back>
            </div>
            <Spacing>
              <Container>
                <Heading>Overview</Heading>
              </Container>
            </Spacing>

            <Row
              class="xdc-border-top"
              style={{
                border: ".5px solid #e3e7eb",
                borderRadius: "0% 0% 6px 6px",
              }}
            >
              <Secondcontainer>
                <Div >
                  {address.map((data, index) => {
                    return (
                      <SideContainer >
                        <Column id={index} >
                          <Row >
                            <Heading_One id="section1" >
                              {data.heading}
                            </Heading_One>
                          </Row>

                          <Para_One id="section1" >{data.paragraph}</Para_One>
                          <SubparagraphOne>
                            {data.subparagraphone}
                          </SubparagraphOne>

                          <SubparagraphTwo>
                            {data.subparagraphTwo}
                          </SubparagraphTwo>

                          <SubparagraphThree>
                            {data.subparagraphThree}
                          </SubparagraphThree>

                          <SubparagraphFour>
                            {data.subparagraphFour}
                          </SubparagraphFour>

                          <SubparagraphFive>
                            {data.subparagraphFive}
                          </SubparagraphFive>

                          <SubparagraphSix>
                            {data.subparagraphSix}
                          </SubparagraphSix>
                          <br  />
                        </Column>
                      </SideContainer>
                    );
                  })}
                </Div>
              </Secondcontainer>
            </Row>
          </Grid>
        </div>
      </div>
      <div>
        <FooterComponent />
      </div>
    </div>
  );
}
const SectionDiv = styled.div`
  margin-top: 12px;
`;
const Anchor = styled.a`
  text-decoration: none !important;
  color: black;
  //   a:active {
  //     color: blue;
  // }
  // a:visited {color:#0000FF;}
  // a[tabindex]:focus {
  //   color:blue;
  //   outline: none;
  // }
  &:hover {
    // color: unset !important;
    text-decoration: underline;
  }
`;
const Back = styled.span`
  text-align: left;
  font-family: "Inter", sans-serif;
  font-size: 17px;
  color: #ffffff;
`;
const SubparagraphOne = styled.span`
  text-align: left;
  font: normal normal normal 15px/19px Inter;
  letter-spacing: 0px;
  color: #2a2a2a;
  opacity: 1;
  margin-bottom:20px;
`;
const SubparagraphTwo = styled.span`
  text-align: left;
  font: normal normal normal 15px/19px Inter;
  letter-spacing: 0px;
  color: #2a2a2a;
  opacity: 1;
  margin-bottom:10px;
  display: list-item;
    margin-left: 20px;
`;
const SubparagraphThree = styled.span`
  text-align: left;
  font: normal normal normal 15px/19px Inter;
  letter-spacing: 0px;
  color: #2a2a2a;
  opacity: 1;
  margin-bottom:60px;
  display: list-item;
    margin-left: 20px;
`;
const SubparagraphFour = styled.span`
  text-align: left;
  font: normal normal normal 15px/19px Inter;
  letter-spacing: 0px;
  color: #2a2a2a;
  opacity: 1;
  margin-bottom:10px;
`;
const SubparagraphFive = styled.span`
  text-align: left;
  font: normal normal normal 15px/19px Inter;
  letter-spacing: 0px;
  color: #2a2a2a;
  opacity: 1;
  margin-bottom:10px;
`;
const SubparagraphSix = styled.span`
  text-align: left;
  font: normal normal normal 15px/19px Inter;
  letter-spacing: 0px;
  color: #2a2a2a;
  opacity: 1;
  margin-bottom:10px;
`;

const Row__ = styled.div`
  display: flex;
  flex-flow: row nowrap;
  text-align: right;
  padding: 20px;
`;
const Heading_One = styled.span`
  color: var(--unnamed-color-2a2a2a);
  text-align: left;
  font: normal normal 600 26px/31px Inter;
  letter-spacing: 0px;
  color: #2a2a2a;
  opacity: 1;
  margin-bottom: 12px;
  margin-top: 12px;
`;
const Para_One = styled.span`
  color: var(--unnamed-color-2a2a2a);
  text-align: left;
  font: normal normal normal 15px/19px Inter;
  letter-spacing: 0px;
  color: #2a2a2a;
  opacity: 1;
  margin-bottom: 12px;
  margin-top: 12px;
`;
const SideContainer = styled.div``;
const Sidemenu = styled.div`
  width: 100%;
  max-width: 320px;
  border-right: 1px solid #e3e7eb;
  background: #ffffff 0% 0% no-repeat padding-box;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: flex-end;
  @media (min-width: 200px) and (max-width: 1024px) {
    display: none;
  }
`;
const H1 = styled.span`
  font-weight: 600;
  font-family: "Inter", sans-serif !important;
  white-space: nowrap;
  text-decoration:none;
  font-size: 17px;
`;
const H2 = styled.span`
  font-weight: 600;
  font-family: "Inter", sans-serif !important;
  // margin-top: 20px;
  white-space: nowrap;
  text-decoration:none;
  font-size: 17px;
`;
const H3 = styled.span`
  font-weight: 600;
  font-family: "Inter", sans-serif !important;
  // margin-top: 20px;
  white-space: nowrap;
  text-decoration:none;
  font-size: 17px;
`;
const H4 = styled.span`
  font-weight: 600;
  font-family: "Inter", sans-serif !important;
  // margin-top: 20px;
  white-space: nowrap;
  text-decoration:none;
  font-size: 17px;
`;
const H5 = styled.span`
  font-weight: 600;
  font-family: "Inter", sans-serif !important;
  // margin-top: 20px;
  white-space: nowrap;
  font-size: 17px;
`;

const H6 = styled.span`
  font-weight: 600;
  font-family: "Inter", sans-serif !important;
  // margin-top: 20px;
  white-space: nowrap;
  font-size: 17px;
`;

const Spacing = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
  height: 53px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom: 1px solid #e3e7eb;
  background: #ffffff 0% 0% no-repeat padding-box;
  align-items: center;
  padding: 11px 24px;

  @media (min-width: 300px) and (max-width: 767px) {
    display: block;
  }
`;
const Container = styled.div`
  display: flex;
  word-break: break-all;
  width: 100%;
  align-items: center;
  max-width: 435px;
`;
const Secondcontainer = styled.div`
  display: flex;
  // height: 770px;
  float: left;
  width: 100%;
  overflow-y: auto;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 0% 0% 6px 6px;
`;

const Div = styled.div`
  padding: 25px;
`;

const Heading = styled.span`
  white-space: nowrap;
  font: normal normal 600 22px/26px Inter;

  color: #2a2a2a;

  box-shadow: none;
  @media (max-width: 767px) {
    font-size: 16px;
  }
`;
