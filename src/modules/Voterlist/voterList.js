import React from "react";
import styled from "styled-components";
import HeaderMain from "../header/header";
import "../../assets/styles/custom.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FooterComponent from "../footer/footerComponent";
import { history } from "../../managers/history";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    maxWidth: "970px",
    position: "absolute",
    top: "186px",

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
}));

export default function Voterslist() {
  const backButton = () => {
    history.push("/");
  };
  React.useEffect(() => {
    let address = [
      {
        image: "/images/network.svg",
        name: "xdc5c7257f7088b9bb6939764bf479b4220f52d3857",
        time: "5 min ago",
      },
      {
        image: "/images/network.svg",
        name: "xdcbc30809b5e2d894ec485dbaa456694779712fdb9",
        time: "1 hr 5 min ago",
      },
      {
        image: "/images/network.svg",
        name: "xdc5c7257f7088b9bb6939764bf479b4220f52d3857",
        time: "10:30 AM,Today",
      },
      {
        image: "/images/network.svg",
        name: "xdcbc30809b5e2d894ec485dbaa456694779712fdb9",
        time: "5.25 PM, 2 july",
      },
      {
        image: "/images/network.svg",
        name: "xdc0b3693740427612142863616a56599e92bdc955a",
        time: "Time and Date",
      },
      {
        image: "/images/network.svg",
        name: "xdc5c7257f7088b9bb6939764bf479b4220f52d3857",
        time: "Time and Date",
      },
      {
        image: "/images/network.svg",
        name: "xdc5c7257f7088b9bb6939764bf479b4220f52d3857",
        time: "Time and Date",
      },
      {
        image: "/images/network.svg",
        name: "xdc5c7257f7088b9bb6939764bf479b4220f52d3857",
        time: "Time and Date",
      },
      {
        image: "/images/network.svg",
        name: "xdcbc30809b5e2d894ec485dbaa456694779712fdb9",
        time: "Time and Date",
      },
      {
        image: "/images/network.svg",
        name: "xdcbc30809b5e2d894ec485dbaa456694779712fdb9",
        time: "Time and Date",
      },
      {
        image: "/images/network.svg",
        name: "xdcbc30809b5e2d894ec485dbaa456694779712fdb9",
        time: "Time and Date",
      },
      {
        image: "/images/network.svg",
        name: "xdcbc30809b5e2d894ec485dbaa456694779712fdb9",
        time: "Time and Date",
      },
    ];

    setAddress(
      address.map((object) => {
        return {
          image: object.image,
          name: object.name,
          time: object.time,
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
      <div className={classes.mainContainer}>
        <div className={classes.root}>
          <Grid item xs={12}>
            <div
              style={{
                marginBottom: "11px",
                marginTop: "-21px",
                cursor: "pointer",
              }}
              onClick={backButton}
            >
              <img
                src="/images/Back-Arrow.svg"
                style={{ width: "15px", marginRight: "8px" }}
              />
              <Back>Back</Back>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <MainHeading>
                XDC-ABC Bootstrapping Partnership Proposal
              </MainHeading>
            </div>
            <Spacing>
              <Container>
                <Heading>All Voters</Heading>
              </Container>
              <SecondContainer>
                <Leftcontainer>122 Votes</Leftcontainer>
              </SecondContainer>
            </Spacing>

            {address.map((data) => {
              return (
                <Div>
                  <Spacing>
                    <Container>
                      <ImageView src={data.image} />
                      &nbsp;
                      <Hash>{data.name}</Hash>
                    </Container>
                    <SecondContainer>
                      <Leftcontainer>{data.time}</Leftcontainer>
                    </SecondContainer>
                  </Spacing>
                </Div>
              );
            })}
            <Pagingdiv>
              <Container>
                <Show>Show </Show>
                <Block>
                  <Span>10 </Span>
                </Block>

                <Properties>Properties</Properties>
              </Container>
              <SecondContainer>
                <BackButton>Back</BackButton>

                <Block>
                  <Span>1</Span>
                </Block>
                <Block>
                  <Span>2</Span>
                </Block>

                <NextButton>Next</NextButton>
              </SecondContainer>
            </Pagingdiv>
          </Grid>
        </div>
      </div>
      <div>
        <FooterComponent />
      </div>
    </div>
  );
}
const MainHeading = styled.span`
  text-align: left;

  color: #ffffff;
  font-family: "Inter", sans-serif;
  font-size: 20px;
`;

const Back = styled.span`
  text-align: left;
  font-family: "Inter", sans-serif;
  font-size: 17px;
  color: #ffffff;
`;
const BackButton = styled.button`
  text-align: left;

  font-family: "Inter", sans-serif;
  font-size: 14px;
  letter-spacing: 0px;
  color: #909090;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #e3e7eb;
  border-radius: 4px;
`;
const Pagingdiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 20px;
`;
const Span = styled.span`
  text-align: left;
  font: normal normal normal 13px/17px Inter;
  letter-spacing: 0px;
  color: #3b3b3b;

  display: flex;
  padding-left: 6px;
  padding-top: 2px;
`;
const NextButton = styled.button`
  color: var(--unnamed-color-2149b9);

  font: normal normal normal 14px/17px Inter;

  color: #2149b9;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #e3e7eb;
  border-radius: 4px;
  margin-left: 5px;
`;

const Show = styled.span`
  display: flex;
  text-align: left;
  font: normal normal normal 13px/17px Inter;
  letter-spacing: 0px;
  color: #3b3b3b;
  opacity: 1;
  align-items: center;
`;
const Block = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #e3e7eb;
  border-radius: 4px;

  width: 25px;
  height: 22px;
  margin-left: 8px;
`;

const Properties = styled.span`
  display: flex;
  text-align: left;
  font: normal normal normal 13px/17px Inter;
  letter-spacing: 0px;
  color: #3b3b3b;

  align-items: center;
  margin-left: 8px;
`;
const Hash = styled.span`
  color: var(--unnamed-color-2a2a2a);
  color: #2a2a2a;

  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 13px;
  @media (min-width: 300px) and (max-width: 767px) {
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 13px;
  }
`;
const Spacing = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
  height: auto;
  padding: 11px 24px;

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

  max-width: 520px;
`;
const SecondContainer = styled.div`
  display: flex;

  align-items: center;
  @media (min-width: 300px) and (max-width: 767px) {
  }
`;

const Div = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #e3e7eb;
  height: auto;
`;

const Heading = styled.span`
  white-space: nowrap;
  letter-spacing: 0px;
  color: #2a2a2a;

  box-shadow: none;
  color: var(--unnamed-color-2a2a2a);
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 18px;
`;
const Leftcontainer = styled.div`
  text-align: right;
  font: normal normal normal 12px/17px Inter;
  letter-spacing: 0px;
  color: #acacac;
`;
const ImageView = styled.img`
  width: 35px;
`;
