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

export default function Xvdfaq() {
  const histor = useHistory();
  const backButton = () => {
    //histor.goBack();
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
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis dignissim urna, nec semper risus. Sed  elementum eleifend. Proin maximus, eros eget egestas hendrerit, quam tortor tincidunt dui, ut malesuada urna libero in nisl. Fusce non eros eget eros porttitor egestas eu vel magna. Fusce interdum Leo tortor, vel finibus massa dignissim posuere. Nunc quis lectus nec dui pretium bibendum. Cras sodales bibendum neque sit amet ullamcorper. Maecenas in vestibulum nisl. Nulla quis rutrum nisi. Vivamus e get viverra felis. Integer odio diam, posuere a vehicula sed, maximus sed nulla. Fusce sed sollicitudin nisl. Aliquam erat volutpat. Aenean posuere cursus tellus, vel ornare diam accumsan quis..",
        subparagraphone:
          " Aliquam dictum sapien mi, at imperdiet mi eleifend vitae. Cras sed vehicula leo, pretium auctor quam. In elementum tincidunt vestibulum. Nullam interdum diam sit amet tortor rhoncus vestibulum. Aenean semper ante ut orci imperdiet auctor. Fusce placerat arcu eu condimentum commodo. Vivamus at nibh purus. Suspendisse potenti. Maecenas efficitur malesuada dapibus. Duis laoreet varius facilisis. Cras commodo neque massa, lacinia dapibus justo pellentesque vitae. Aenean facilisis volutpat risus at auctor",
      },
      {
        heading: "How voting works",
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
        heading: "Off-chain Governance",
        paragraph:
          "Introduction How voting works Voting Wallet Setup Off-chain Governance On-Chain Governance Governance FAQs",
      },
      {
        heading: "On-Chain Governance",
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
                <Heading>FAQs</Heading>
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
                          <SubparagraphOne>
                            {data.subparagraphone}
                          </SubparagraphOne>

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
`;
const SubparagraphTwo = styled.span`
  text-align: left;
  font: normal normal normal 15px/19px Inter;
  letter-spacing: 0px;
  color: #2a2a2a;
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
  height: 770px;
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
