import React from "react";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";
import HeaderMain from "../header/header";
import "../../assets/styles/custom.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FooterComponent from "../footer/footerComponent";
import { history } from "../../managers/history";
import { ClickAwayListener } from "@material-ui/core";

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

export default function Xvdgovernance() {
  const backButton = () => {
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
        heading: "Introduction",
        paragraph:
          "XDC Governance is the voting dApp for community members to initiate proposals and cast their votes. The dApp conducts voting on the XDC blockchain, confirming the fair and transparent voting process. It enables the XDC decentralized community to participate actively in decision-making processes and helps maintain the integrity of the entire ecosystem through on-chain voting. XDC Governance implements smart voting contracts written with pre-determined terms governing voting and decision-making. The structure of proposal contracts comprises three main components:"

          ,
        subparagraphone:
          "Proposal Struct: Name, description, address of the proposal submitter, end date, the status of the proposal and the file URL.",

          subparagraphTwo:
          "Vote Struct: Address of the voter and the specific voting time.",
          subparagraphThree:
          "Vote Mapping: Key for voting, address value for voting and the complete VoteStruct.",
          subparagraphFour:
          "Through this voting dApp, XDC Foundation ensures to keep its network at the cutting edge in terms of community ownership and participation in the network. Operating with the vision of ecosystem growth, XDC Network continues to nourish its environment with the constant development flow.",
          
          
          
          
      },
      {
        heading: "How voting works",
        paragraph:
          "The voting on the Governance portal is straightforward:",
        subparagraphone:
          "A user creates a proposal to obtain the decisions of all XDC stakeholders through their votes.",
          subparagraphTwo:
          "All the whitelisted voters can cast their votes within the given timeframe for every proposal. The admin of XDC Governance dApp manages the voters' list; he can add and eliminate voters, make proposals and vote on them.",
          subparagraphThree:
          "Once the deadline for the proposal is met, the voting result is unveiled on the portal. The proposal is accepted when 51% of the votes are in favour."
      },
      {
        heading: "Voting Wallet Setup",
        paragraph:
          "The users of XDC Governance need to connect their XDCPay wallet to access the portal and participate in the voting process. To install the XDCPay wallet, visit the link and add the wallet extension to your browser.",
      },
      // {
      //   heading: "Off-chain Governance",
      //   paragraph:
      //     "Introduction How voting works Voting Wallet Setup Off-chain Governance On-Chain Governance Governance FAQs",
      // },
      // {
      //   heading: "On-Chain Governance",
      //   paragraph:
      //     " sit amet fringilla libero elementum eu. Nunc pharetra, libero elementum dignissim volutpat, leo ante hendrerit leo, sit amet pellentesque nibh libero eu erat. Duis ac felis aliquam, efficitur dolor vel, vehicula augue. Aenean id egestas tortor. Proin congue turpis in turpis condimentum, nec auctor ex aliquam. Sed finibus ex vel justo dapibus, eget egestas quam facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id mollis dolor. Proin tristique enim quis vestibulum tristique. Vestibulum vestibulum nisl vitae Leo malesuada varius. Aenean tincidunt justo non lectus porta egestas. Ut non malesuada diam, in accumsan elit. Nunc vitae tincidunt ligula. Quisque ultricies dui ut odio maximus pretium. Nam quis tortor justo. Cras ornare, mi id sodales maximus, dolor nunc interdum lacus, a ullamcorper tortor nunc vel eros. Suspendisse gravida sapien et sapien congue, eu interdum risus tristique. Praesent fermentum lorem ipsum, vitae euismod felis hendrerit ac. Nam dignissim dui blandit, consectetur dolor nec, dapibus est. In consectetur orci quam, ut dignissim lacus ultricies vel. Donec posuere ante eget imperdiet sollicitudin. Duis quam tellus, maximus laoreet ante sit amet, euismod pellentesque tellus. Nullam mi erat, finibus vitae fermentum eu, consectetur a tortor. Praesent faucibus eros nec eros faucibus commodo. Nulla a feugiat arcu. Duis et aliquam dui. Aenean fermentum sollicitudin tempus. Nulla tincidunt felis ante, ac commodo nisi fermentum sit amet. Proin pretium metus sed leo dignissim porttitor. Etiam eleifend id odio non dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras quis molestie orci. Pellentesque vehicula libero a sem sodales, ac rutrum leo tincidunt. Praesent tempus consequat lectus, vitae bibendum est hendrerit ut. Donec id venenatis massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque bibendum at tellus sit amet imperdiet. Vestibulum metus orci, luctus vel blandit gravida, laoreet sit amet nisl. Fusce efficitur lorem in dignissim commodo. Sed eu lorem ac tortor volutpat malesuada id a nibh. Morbi finibus ex sed est rhoncus, eu tempor arcu faucibus. Donec at bibendum metus, eget suscipit metus. Integer vel aliquet lorem. Nullam ex nunc, dictum sit amet turpis non, bibendum finibus orci. Proin et vulputate urna, in maximus lacus",
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
          subparagraphFour:object.subparagraphFour
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
                <Heading>Know about XDC Governance</Heading>
              </Container>
            </Spacing>

            <SelectBoxDiv>
              <SelectContainer>
                <SelectOption
                  onChange={(e) => {
                    onchangeDropdown(e);
                  }}
                >
                  <option value={"#0"}>Introduction</option>
                  <option value={"#1"}>How voting works</option>
                  <option value={"#2"}>Voting Wallet Setup</option>
                  {/* <option value={"#3"}>Off-Chain Governance</option>
                  <option value={"#4"}>On-chain Governance</option>
                  <option value={"#5"}>Governance FAQs</option> */}
                </SelectOption>
              </SelectContainer>
            </SelectBoxDiv>

            <Row
              class="xdc-border-top"
              style={{
                border: ".5px solid #e3e7eb",
                borderRadius: "0% 0% 6px 6px",
              }}
            >
              <Secondcontainer>
                <Sidemenu>
                  <Row__>
                    <Column>
                      <SectionDiv id="section1">
                        <H1>
                          <Anchor href="#0">Introduction</Anchor>
                        </H1>
                      </SectionDiv>
                      <SectionDiv id="section2">
                        <H2>
                          <Anchor href="#1">How voting works</Anchor>
                        </H2>
                      </SectionDiv>
                      <SectionDiv id="section3">
                        <H3>
                          <Anchor href="#2">Voting Wallet Setup</Anchor>
                        </H3>
                      </SectionDiv>

                      {/* <SectionDiv id="section4">
                        <H4>
                          <Anchor href="#3">Off-Chain Governance</Anchor>
                        </H4>
                      </SectionDiv>

                      <SectionDiv id="section5">
                        <H5>
                          <Anchor href="#4" style={{ textDecoration: "none" }}>
                            On-chain Governance
                          </Anchor>
                        </H5>
                      </SectionDiv>
                      <SectionDiv id="section6">
                        <H6>
                          <Anchor href="#5">Governance FAQs</Anchor>
                        </H6>
                      </SectionDiv> */}
                    </Column>
                  </Row__>
                </Sidemenu>

                <Div>
                  {address.map((data, index) => {
                    return (
                      <SideContainer>
                        <Column id={index}>
                          <Row>
                            <Heading_One id="section1">
                              {data.heading}
                            </Heading_One>
                          </Row>

                          <Para_One id="section1">{data.paragraph}</Para_One>
                          <SubparagraphOne
                          className=  {data.subparagraphTwo?"list-item":""} >
                            {data.subparagraphone}
                          </SubparagraphOne>

                          <SubparagraphTwo 
                         className=  {data.subparagraphTwo?"list-item":""}>
                           {data.subparagraphTwo}
   
                          </SubparagraphTwo>

                          <SubparagraphThree 
                          className=  {data.subparagraphTwo?"list-item":""}>
                            {data.subparagraphThree}
                            </SubparagraphThree>

                            <SubparagraphFour>
                            {data.subparagraphFour}
                            </SubparagraphFour>
                          <br />
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
  margin-bottom:10px;
  // display: list-item;
  //   margin-left: 20px;
`;
const SubparagraphTwo = styled.span`
  text-align: left;
  font: normal normal normal 15px/19px Inter;
  letter-spacing: 0px;
  color: #2a2a2a;
  opacity: 1;
  margin-bottom:10px;
  // display: list-item;
  //   margin-left: 20px;
`;
const SubparagraphThree = styled.span`
  text-align: left;
  font: normal normal normal 15px/19px Inter;
  letter-spacing: 0px;
  color: #2a2a2a;
  opacity: 1;
  margin-bottom:10px;
  // display: list-item;
  //   margin-left: 20px;
`;
const SubparagraphFour = styled.span`
  text-align: left;
  font: normal normal normal 15px/19px Inter;
  letter-spacing: 0px;
  color: #2a2a2a;
  opacity: 1;
  margin-bottom:10p;
`;
const SelectBoxDiv = styled.div`
  border-right: 1px solid rgb(227, 231, 235);
  border-left: 1px solid rgb(227, 231, 235);
`;

const SelectContainer = styled.div`
  // margin-left: 15px;
  // @media (min-width: 768px) and (max-width: 1024px) {
  //   display: none;
  // }
  @media (min-width: 1024px) {
    display: none;
  }
`;
const SelectOption = styled.select`
  border-radius: 4px;
  padding: 8px;

  background-color: #fffffff;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  font-size: 15px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #e3e7eb;
  border-radius: 4px;
  opacity: 1;
  @media (min-width: 360px) and (max-width: 767px) {
    width: 90%;
    margin-left: 15px;
    margin-bottom: 10px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    margin-top: 15px;
    margin-left: 15px;
    margin-bottom: 10px;
  }
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
}
`;
const H2 = styled.span`
  font-weight: 600;
  font-family: "Inter", sans-serif !important;
  // margin-top: 20px;
  white-space: nowrap;
  text-decoration:none;
  font-size: 17px;
}
`;
const H3 = styled.span`
  font-weight: 600;
  font-family: "Inter", sans-serif !important;
  // margin-top: 20px;
  white-space: nowrap;
  text-decoration:none;
  font-size: 17px;
}
`;
const H4 = styled.span`
  font-weight: 600;
  font-family: "Inter", sans-serif !important;
  // margin-top: 20px;
  white-space: nowrap;
  text-decoration:none;
  font-size: 17px;
}
`;
const H5 = styled.span`
  font-weight: 600;
  font-family: "Inter", sans-serif !important;
  // margin-top: 20px;
  white-space: nowrap;
  font-size: 17px;
}
`;

const H6 = styled.span`
  font-weight: 600;
  font-family: "Inter", sans-serif !important;
  // margin-top: 20px;
  white-space: nowrap;
  font-size: 17px;
}
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
