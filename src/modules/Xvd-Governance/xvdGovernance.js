import React from "react";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";
import HeaderMain from "../header/header";
import "../../assets/styles/custom.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FooterComponent from "../footer/footerComponent";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    maxWidth: "970px",
    position: "absolute",
    top: "147px",
    width: "100%",
    "@media (min-width: 300px) and (max-width: 567px)": {
      maxWidth: "300px",
    },
    "@media (min-width: 567px) and (max-width: 767px)": {
      maxWidth: "500px",
    },
    "@media (min-width: 767px) and (max-width: 1040px)": {
      maxWidth: "700px",
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
  React.useEffect(() => {
    let address = [
      {
        heading: "Introduction",
        paragraph:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis dignissim urna, nec semper risus. Sed  elementum eleifend. Proin maximus, eros eget egestas hendrerit, quam tortor tincidunt dui, ut malesuada urna libero in nisl. Fusce non eros eget eros porttitor egestas eu vel magna. Fusce interdum Leo tortor, vel finibus massa dignissim posuere. Nunc quis lectus nec dui pretium bibendum. Cras sodales bibendum neque sit amet ullamcorper. Maecenas in vestibulum nisl. Nulla quis rutrum nisi. Vivamus e get viverra felis. Integer odio diam, posuere a vehicula sed, maximus sed nulla. Fusce sed sollicitudin nisl. Aliquam erat volutpat. Aenean posuere cursus tellus, vel ornare diam accumsan quis..",
        subparagraphone:
          " Aliquam dictum sapien mi, at imperdiet mi eleifend vitae. Cras sed vehicula leo, pretium auctor quam. In elementum tincidunt vestibulum. Nullam interdum diam sit amet tortor rhoncus vestibulum. Aenean semper ante ut orci imperdiet auctor. Fusce placerat arcu eu condimentum commodo. Vivamus at nibh purus. Suspendisse potenti. Maecenas efficitur malesuada dapibus. Duis laoreet varius facilisis. Cras commodo neque massa, lacinia dapibus justo pellentesque vitae. Aenean facilisis volutpat risus at auctor",
      },
      {
        heading: "How Voting works",
        paragraph:
          "Suspendisse sodales posuere urna, sit amet fringilla libero elementum eu. Nunc pharetra, libero elementum dignissim volutpat, leo ante hendrerit leo, sit amet pellentesque nibh libero eu erat. Duis ac felis aliquam, efficitur dolor vel, vehicula augue. Aenean id egestas tortor. Proin congue turpis in turpis condimentum, nec auctor ex aliquam. Sed finibus ex vel justo dapibus, eget egestas quam facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id mollis dolor. Proin tristique enim quis vestibulum tristique. Vestibulum vestibulum nisl vitae Leo malesuada varius. Aenean tincidunt justo non lectus porta egestas. Ut non malesuada diam, in accumsan elit. Nunc vitae tincidunt ligula. Quisque ultricies dui ut odio maximus pretium. Nam quis tortor justo. Cras ornare, mi id sodales maximus, dolor nunc interdum lacus, a ullamcorper tortor nunc vel eros. Suspendisse gravida sapien et sapien congue, eu interdum risus tristique. Praesent fermentum lorem ipsum, vitae euismod felis hendrerit ac. Nam dignissim dui blandit, consectetur dolor nec, dapibus est. In consectetur orci quam, ut dignissim lacus ultricies vel. Donec posuere ante eget imperdiet sollicitudin. Duis quam tellus, maximus laoreet ante sit amet, euismod pellentesque tellus. Nullam mi erat, finibus vitae fermentum eu, consectetur a tortor. Praesent faucibus eros nec eros faucibus commodo. Nulla a feugiat arcu. Duis et aliquam dui. Aenean fermentum sollicitudin tempus. Nulla tincidunt felis ante, ac commodo nisi fermentum sit amet. Proin pretium metus sed leo dignissim porttitor. Etiam eleifend id odio non dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras quis molestie orci. Pellentesque vehicula libero a sem sodales, ac rutrum leo tincidunt. Praesent tempus consequat lectus, vitae bibendum est hendrerit ut. Donec id venenatis massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque bibendum at tellus sit amet imperdiet. Vestibulum metus orci, luctus vel blandit gravida, laoreet sit amet nisl. Fusce efficitur lorem in dignissim commodo. Sed eu lorem ac tortor volutpat malesuada id a nibh. Morbi finibus ex sed est rhoncus, eu tempor arcu faucibus. Donec at bibendum metus, eget suscipit metus. Integer vel aliquet lorem. Nullam ex nunc, dictum sit amet turpis non, bibendum finibus orci. Proin et vulputate urna, in maximus lacus.",
        subparagraphone:
          "ibus. Cras quis molestie orci. Pellentesque vehicula libero a sem sodales, ac rutrum leo tincidunt. Praesent tempus consequat lectus, vitae bibendum est hendrerit ut. Donec id venenatis massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque bibendum at tellus sit amet imperdiet. Vestibulum metus orci, luctus vel blandit gravida, laoreet sit amet nisl. Fusce efficitur lorem in dignissim commodo. Sed eu lorem ac tortor volutpat malesuada id a nibh. Morbi finibus ex sed est rhoncus, eu ",
      },
      {
        heading: "Voting Wallet Setup",
        paragraph:
          "Suspendisse sodales posuere urna, sit amet fringilla libero elementum eu. Nunc pharetra, libero elementum dignissim volutpat, leo ante hendrerit leo, sit amet pellentesque nibh libero eu erat. Duis ac felis aliquam, efficitur dolor vel, vehicula augue. Aenean id egestas tortor. Proin congue turpis in turpis condimentum, nec auctor ex aliquam. Sed finibus ex vel justo dapibus, eget egestas quam facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id mollis dolor. Proin tristique enim quis vestibulum tristique. Vestibulum vestibulum nisl vitae Leo malesuada varius. Aenean tincidunt justo non lectus porta egestas. Ut non malesuada diam, in accumsan elit. Nunc vitae tincidunt ligula. Quisque ultricies dui ut odio maximus pretium. Nam quis tortor justo. Cras ornare, mi id sodales maximus, dolor nunc interdum lacus, a ullamcorper tortor nunc vel eros. Suspendisse gravida sapien et sapien congue, eu interdum risus tristique. Praesent fermentum lorem ipsum, vitae euismod felis hendrerit ac. Nam dignissim dui blandit, consectetur dolor nec, dapibus est. In consectetur orci quam, ut dignissim lacus ultricies vel. Donec posuere ante eget imperdiet sollicitudin. Duis quam tellus, maximus laoreet ante sit amet, euismod pellentesque tellus. Nullam mi erat, finibus vitae fermentum eu, consectetur a tortor. Praesent faucibus eros nec eros faucibus commodo. Nulla a feugiat arcu. Duis et aliquam dui. Aenean fermentum sollicitudin tempus. Nulla tincidunt felis ante, ac commodo nisi fermentum sit amet. Proin pretium metus sed leo dignissim porttitor. Etiam eleifend id odio non dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras quis molestie orci. Pellentesque vehicula libero a sem sodales, ac rutrum leo tincidunt. Praesent tempus consequat lectus, vitae bibendum est hendrerit ut. Donec id venenatis massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque bibendum at tellus sit amet imperdiet. Vestibulum metus orci, luctus vel blandit gravida, laoreet sit amet nisl. Fusce efficitur lorem in dignissim commodo. Sed eu lorem ac tortor volutpat malesuada id a nibh. Morbi finibus ex sed est rhoncus, eu tempor arcu faucibus. Donec at bibendum metus, eget suscipit metus. Integer vel aliquet lorem. Nullam ex nunc, dictum sit amet turpis non, bibendum finibus orci. Proin et vulputate urna, in maximus lacus.",
      },
      {
        heading: "Off-Chain Governance",
        paragraph:
          "Introduction How voting works Voting Wallet Setup Off-chain Governance On-Chain Governance Governance FAQs",
      },
      {
        heading: "On-chain Governance",
        paragraph:
          " sit amet fringilla libero elementum eu. Nunc pharetra, libero elementum dignissim volutpat, leo ante hendrerit leo, sit amet pellentesque nibh libero eu erat. Duis ac felis aliquam, efficitur dolor vel, vehicula augue. Aenean id egestas tortor. Proin congue turpis in turpis condimentum, nec auctor ex aliquam. Sed finibus ex vel justo dapibus, eget egestas quam facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id mollis dolor. Proin tristique enim quis vestibulum tristique. Vestibulum vestibulum nisl vitae Leo malesuada varius. Aenean tincidunt justo non lectus porta egestas. Ut non malesuada diam, in accumsan elit. Nunc vitae tincidunt ligula. Quisque ultricies dui ut odio maximus pretium. Nam quis tortor justo. Cras ornare, mi id sodales maximus, dolor nunc interdum lacus, a ullamcorper tortor nunc vel eros. Suspendisse gravida sapien et sapien congue, eu interdum risus tristique. Praesent fermentum lorem ipsum, vitae euismod felis hendrerit ac. Nam dignissim dui blandit, consectetur dolor nec, dapibus est. In consectetur orci quam, ut dignissim lacus ultricies vel. Donec posuere ante eget imperdiet sollicitudin. Duis quam tellus, maximus laoreet ante sit amet, euismod pellentesque tellus. Nullam mi erat, finibus vitae fermentum eu, consectetur a tortor. Praesent faucibus eros nec eros faucibus commodo. Nulla a feugiat arcu. Duis et aliquam dui. Aenean fermentum sollicitudin tempus. Nulla tincidunt felis ante, ac commodo nisi fermentum sit amet. Proin pretium metus sed leo dignissim porttitor. Etiam eleifend id odio non dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras quis molestie orci. Pellentesque vehicula libero a sem sodales, ac rutrum leo tincidunt. Praesent tempus consequat lectus, vitae bibendum est hendrerit ut. Donec id venenatis massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque bibendum at tellus sit amet imperdiet. Vestibulum metus orci, luctus vel blandit gravida, laoreet sit amet nisl. Fusce efficitur lorem in dignissim commodo. Sed eu lorem ac tortor volutpat malesuada id a nibh. Morbi finibus ex sed est rhoncus, eu tempor arcu faucibus. Donec at bibendum metus, eget suscipit metus. Integer vel aliquet lorem. Nullam ex nunc, dictum sit amet turpis non, bibendum finibus orci. Proin et vulputate urna, in maximus lacus",
      },
      {
        heading: "Governance FAQs",
        paragraph:
          "bero elementum eu. Nunc pharetra, libero elementum dignissim volutpat, leo ante hendrerit leo, sit amet pellentesque nibh libero eu erat. Duis ac felis aliquam, efficitur dolor vel, vehicula augue. Aenean id egestas tortor. Proin congue turpis in turpis condimentum, nec auctor ex aliquam. Sed finibus ex vel justo dapibus, eget egestas quam facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id mollis dolor. Proin tristique enim quis vesti",
      },
    ];

    setAddress(
      address.map((object) => {
        return {
          heading: object.heading,
          paragraph: object.paragraph,
          subparagraphone: object.subparagraphone,
        };
      })
    );
  }, []);

  const [address, setAddress] = React.useState([]);

  const classes = useStyles();
  return (
    <div>
      <div className="header-div-all">
        <HeaderMain />
      </div>
      <div className={classes.maincontainer}>
        <div className={classes.root}>
          <Grid item xs={12}>
            <Spacing>
              <Container>
                <Heading>Know about XDC Governance</Heading>
              </Container>
            </Spacing>

            <hr className={classes.line} />
            <SelectBoxDiv>
              <SelectContainer>
                <SelectOption>
                  <option value={""}>Introduction</option>
                  <option value={""}>How voting works</option>
                  <option value={""}>Voting Wallet Setup</option>
                  <option value={""}>Off-chain Governance</option>
                  <option value={""}>Governance FAQs</option>
                </SelectOption>
              </SelectContainer>
            </SelectBoxDiv>
            <Row>
              <Secondcontainer>
                <Sidemenu>
                  <Row__>
                    <Column>
                      <div id="section1">
                        <H1>
                          <Anchor href="#0">Introduction</Anchor>
                        </H1>
                      </div>
                      <div id="section2">
                        <H2>
                          <Anchor href="#1">How voting works</Anchor>
                        </H2>
                      </div>
                      <div id="section3">
                        <H2>
                          <Anchor href="#2">Voting Wallet Setup</Anchor>
                        </H2>
                      </div>

                      <div id="section4">
                        <H2>
                          <Anchor href="#3">Off-chain Governance</Anchor>
                        </H2>
                      </div>

                      <div id="section5">
                        <H2>
                          <Anchor href="#4" style={{ textDecoration: "none" }}>
                            On-chain Governance
                          </Anchor>
                        </H2>
                      </div>
                      <div id="section6">
                        <H2>
                          <Anchor href="#5">Governance FAQs</Anchor>
                        </H2>
                      </div>
                    </Column>
                  </Row__>
                </Sidemenu>

                <Div >
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
                          <SubparagraphOne>
                            {data.subparagraphone}
                          </SubparagraphOne>
                          <br />
                          <SubparagraphTwo>
                            {data.subparagraphTwo}
                          </SubparagraphTwo>
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
const Anchor = styled.a`
  text-decoration: none !important;
  color: black;
  &:hover{
    // color: unset !important;
    text-decoration: underline;
  }
`;
const SubparagraphOne = styled.span`
  color: var(--unnamed-color-2a2a2a);
  text-align: left;
  font: normal normal normal 15px/19px Inter;
  letter-spacing: 0px;
  color: #2a2a2a;
  opacity: 1;
  margin-bottom: 12px;
  margin-top: 12px;
`;
const SubparagraphTwo = styled.span`
  color: var(--unnamed-color-2a2a2a);
  text-align: left;
  font: normal normal normal 15px/19px Inter;
  letter-spacing: 0px;
  color: #2a2a2a;
  opacity: 1;
  margin-bottom: 12px;
  margin-top: 12px;
`;

const SelectBoxDiv = styled.div`
  border-right: 1px solid rgb(227, 231, 235);
  border-left: 1px solid rgb(227, 231, 235);
`;

const SelectContainer = styled.div`
  margin-left: 15px;

  @media (min-width: 767px) {
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
  background: #FFFFFF 0% 0% no-repeat padding-box;
border: 1px solid #E3E7EB;
border-radius: 4px;
opacity: 1;

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
  @media (min-width: 300px) and (max-width: 767px) {
    display: none;
  }
`;
const H1 = styled.span`
  font-weight: 600;
  font-family: "Inter", sans-serif !important;
  white-space: nowrap;
  text-decoration:none;
}
`;
const H2 = styled.span`
  font-weight: 600;
  font-family: "Inter", sans-serif !important;
  margin-top: 8px;
  white-space: nowrap;
  text-decoration:none;
}
`;
const H3 = styled.span`
  font-weight: 600;
  font-family: "Inter", sans-serif !important;
  margin-top: 8px;
  white-space: nowrap;
  text-decoration:none;
}
`;
const H4 = styled.span`
  font-weight: 600;
  font-family: "Inter", sans-serif !important;
  margin-top: 8px;
  white-space: nowrap;
  text-decoration:none;
}
`;
const H5 = styled.span`
  font-weight: 600;
  font-family: "Inter", sans-serif !important;
  margin-top: 8px;
  white-space: nowrap;
}
`;

const H6 = styled.span`
  font-weight: 600;
  font-family: "Inter", sans-serif !important;
  margin-top: 8px;
  white-space: nowrap;
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
  opacity: 1;
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
  height: 770px;
  float: left;
  width: 100%;
  overflow-y: auto;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #e3e7eb;

  @media (min-width: 300px) and (max-width: 767px) {
  }
`;

const Div = styled.div`
 
  padding:25px;
`;

const Heading = styled.span`
  white-space: nowrap;
  font: normal normal 600 19px/26px Inter;
  letter-spacing: 0px;
  color: #2a2a2a;
  opacity: 1;
  box-shadow: none;
  color: var(--unnamed-color-2a2a2a);
`;
const Leftcontainer = styled.div`
  text-align: right;
  font: normal normal normal 12px/17px Inter;
  letter-spacing: 0px;
  color: #acacac;
  opacity: 1;
`;
