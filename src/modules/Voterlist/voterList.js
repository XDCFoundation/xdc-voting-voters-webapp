import React from "react";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";
import HeaderMain from "../header/header";
import "../../assets/styles/custom.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    paddingLeft: "21%",
    paddingRight: "23%",
    position: "absolute",
    top: "147px",
    width: "100%",
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
}));

export default function Voterslist() {
  React.useEffect(() => {
    let address = [
      {
        Image: "/images/network.svg",
        Name: "xdc5c7257f7088b9bb6939764bf479b4220f52d3857",
        Time: "5 min ago",
      },
      {
        // Image:,
        Name: "xdcbc30809b5e2d894ec485dbaa456694779712fdb9",
        Time: "1 hr 5 min ago",
      },
      {
        // Image:,
        Name: "xdc5c7257f7088b9bb6939764bf479b4220f52d3857",
        Time: "10:30 AM,Today",
      },
      {
        // Image:,
        Name: "xdcbc30809b5e2d894ec485dbaa456694779712fdb9",
        Time: "5.25 PM, 2 july",
      },
      {
        // Image:,
        Name: "xdc0b3693740427612142863616a56599e92bdc955a",
        Time: "Time and Date",
      },
      {
        // Image:,
        Name: "xdc5c7257f7088b9bb6939764bf479b4220f52d3857",
        Time: "Time and Date",
      },
      {
        // Image:,
        Name: "xdc5c7257f7088b9bb6939764bf479b4220f52d3857",
        Time: "Time and Date",
      },
      {
        // Image:,
        Name: "xdc5c7257f7088b9bb6939764bf479b4220f52d3857",
        Time: "Time and Date",
      },
      {
        // Image:,
        Name: "xdcbc30809b5e2d894ec485dbaa456694779712fdb9",
        Time: "Time and Date",
      },
      {
        // Image:,
        Name: "xdc5c7257f7088b9bb6939764bf479b4220f52d3857",
        Time: "Time and Date",
      },
      {
        // Image:,
        Name: "xdc5c7257f7088b9bb6939764bf479b4220f52d3857",
        Time: "Time and Date",
      },
      {
        // Image:,
        Name: "xdcbc30809b5e2d894ec485dbaa456694779712fdb9",
        Time: "Time and Date",
      },
    ];

    setAddress(
      address.map((d) => {
        return {
          // select: false,
          Image: d.Image,
          Name: d.Name,
          Time: d.Time,
        };
      })
    );
  }, []);

  const [address, setAddress] = React.useState([]);

  const classes = useStyles();
  return (
    <div>
      <div className="header-div-all">
        <HeaderMain />{" "}
      </div>

      <div className={classes.root}>
        <Grid item xs={12}>
          <Spacing>
            <Container>
              <Heading>All Voters</Heading>
            </Container>

            <SecondContainer>
              <Leftcontainer>122 Votes</Leftcontainer>
            </SecondContainer>
          </Spacing>
          <hr className={classes.line} />
          {address.map((row, index) => {
            return (
              <Div>
                <Spacing>
                  {/* <ImageView>{row.Image}</ImageView> */}
                  <Container>
                    <Hash>{row.Name}</Hash>
                  </Container>
                  <SecondContainer>
                    <Leftcontainer>{row.Time}</Leftcontainer>
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
              <Back>Back</Back>
              <Block>
                <Span>1</Span>
              </Block>
              <Block>
                <Span>2</Span>
              </Block>
              <NextBlock>
                <Span>Next</Span>
              </NextBlock>
            </SecondContainer>
          </Pagingdiv>
        </Grid>
      </div>
    </div>
  );
}
const Back = styled.span`
  text-align: left;
  font: normal normal normal 14px/17px Inter;
  letter-spacing: 0px;
  color: #909090;
  opacity: 1;
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
  opacity: 1;
  display: flex;
  padding-left: 6px;
  padding-top: 2px;
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
  opacity: 1;
  width: 25px;
  height: 22px;
  margin-left: 8px;
`;
const NextBlock = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #e3e7eb;
  border-radius: 4px;
  opacity: 1;
  width: 43px;
  height: 22px;
  margin-left: 8px;
`;
const Properties = styled.span`
  display: flex;
  text-align: left;
  font: normal normal normal 13px/17px Inter;
  letter-spacing: 0px;
  color: #3b3b3b;
  opacity: 1;
  align-items: center;
  margin-left: 8px;
`;
const Hash = styled.span`
  color: var(--unnamed-color-2a2a2a);
  text-align: left;
  font: normal normal normal 14px/19px Inter;
  letter-spacing: 0px;
  color: #2a2a2a;
  opacity: 1;
  margin-left: 13px;
  margin-right: 13px;
`;
const Spacing = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
  height: 53px;
  opacity: 1;
  background: #ffffff 0% 0% no-repeat padding-box;
  align-items: center;
  border-radius: 6px;
  @media (min-width: 300px) and (max-width: 767px) {
    display: block;

    margin-top: 8px;
  }
`;
const Container = styled.div`
  display: flex;
  word-break: break-all;
  width: 100%;
  max-width: 375px;
`;
const SecondContainer = styled.div`
  display: flex;
  margin-right: 12px;
  align-items: center;
  @media (min-width: 300px) and (max-width: 767px) {
    margin-left: 14px;
  }
`;

const Div = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #e3e7eb;
  height: auto;
`;

const Heading = styled.span`
  white-space: nowrap;
  font: normal normal 600 19px/26px Inter;
  letter-spacing: 0px;
  color: #2a2a2a;
  opacity: 1;
  box-shadow: none;
  color: var(--unnamed-color-2a2a2a);
  margin-left: 13px;
`;
const Leftcontainer = styled.div`
  text-align: right;
  font: normal normal normal 12px/17px Inter;
  letter-spacing: 0px;
  color: #acacac;
  opacity: 1;
`;
const ImageView = styled.img``;
