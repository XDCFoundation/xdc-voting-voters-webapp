import React from "react";
import styled from "styled-components";
import { Column, Row } from "simple-flexbox";
import "../../assets/styles/custom.css";
import HeaderMain from "../header/header";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FooterComponent from "../footer/footerComponent";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    maxWidth: "970px",
    position: "absolute",
    top: "150px",
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
  gridOne: {
    display: "flex",
    justifyContent: "center",
    padding: "30px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "100%",
    maxWidth: "230px",
    display: "flex",
    justifyContent: "center",
    background: "#FDFEFF 0% 0% no-repeat padding-box",
    border: "1px solid #E3E7EB",
    borderRadius: "6px",
    opacity: 1,
  },
}));

export default function CommunityPage() {
  React.useEffect(() => {
    let address = [
      {
        image: "/images/Block-Explorer.svg",
        name: "Block Explorer",
      },
      {
        image: "/images/Network-Stats.svg",
        name: "Network Stats",
      },
      {
        image: "/images/Master-Nodes.svg",
        name: "Masternodes",
      },
      {
        image: "/images/Master-Nodes.svg",
        name: "Web Wallet",
      },
      {
        image: "/images/Android-Wallet.svg",
        name: "Android Wallet",
      },
      {
        image: "/images/XinPay.svg",
        name: "XinPay",
      },
      {
        image: "/images/XinFin-Docs.svg",
        name: "XinFin API",
      },
      {
        image: "/images/One-Click-Install.svg",
        name: "XinFin Docs",
      },
    ];

    setAddress(
      address.map((object) => {
        return {
          image: object.image,
          name: object.name,
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
            <Spacing>
              <Container>
                <Heading>Community Tools</Heading>
              </Container>
            </Spacing>
            <Div>
              <Grid container spacing={5}>
                <Grid className={classes.gridOne} item xs={6} sm={3}>
                  <Paper className={classes.paper} elevation={0}>
                    <Column>
                      <Row>
                        <ImageView src="/images/XinPay.svg" />
                      </Row>
                      <Row>
                        <Span>Block Explorer</Span>
                      </Row>
                    </Column>
                  </Paper>
                </Grid>
                <Grid className={classes.gridOne} item xs={6} sm={3}>
                  <Paper className={classes.paper} elevation={0}>
                    <Column>
                      <Row>
                        <ImageView src="/images/Network-Stats.svg" />
                      </Row>
                      <Row>
                        <Span>Network Stats</Span>
                      </Row>
                    </Column>
                  </Paper>
                </Grid>
                <Grid className={classes.gridOne} item xs={6} sm={3}>
                  <Paper className={classes.paper} elevation={0}>
                    {" "}
                    <Column>
                      <Row>
                        <ImageView src="/images/Master-Nodes.svg" />
                      </Row>
                      <Row>
                        <Span>Masternodes</Span>
                      </Row>
                    </Column>
                  </Paper>
                </Grid>
                <Grid className={classes.gridOne} item xs={6} sm={3}>
                  <Paper className={classes.paper} elevation={0}>
                    <Column>
                      <Row>
                        <ImageView src="/images/XinPay.svg" />
                      </Row>
                      <Row>
                        <Span>Web Wallet</Span>
                      </Row>
                    </Column>
                  </Paper>
                </Grid>
              </Grid>
              <Grid container spacing={5}>
                <Grid className={classes.gridOne} item xs={6} sm={3}>
                  <Paper className={classes.paper} elevation={0}>
                    {" "}
                    <Column>
                      <Row>
                        <ImageView src="/images/Android-Wallet.svg" />
                      </Row>
                      <Row>
                        <Span>Android Wallet</Span>
                      </Row>
                    </Column>
                  </Paper>
                </Grid>
                <Grid className={classes.gridOne} item xs={6} sm={3}>
                  <Paper className={classes.paper} elevation={0}>
                    <Column>
                      <Row>
                        <ImageView src="/images/XinPay.svg" />
                      </Row>
                      <Row>
                        <Span>XinPay</Span>
                      </Row>
                    </Column>
                  </Paper>
                </Grid>
                <Grid className={classes.gridOne} item xs={6} sm={3}>
                  <Paper className={classes.paper} elevation={0}>
                    <Column>
                      <Row>
                        <ImageView src="/images/XinPay.svg" />
                      </Row>
                      <Row>
                        <Span>XinFin API</Span>
                      </Row>
                    </Column>
                  </Paper>
                </Grid>
                <Grid className={classes.gridOne} item xs={6} sm={3}>
                  <Paper className={classes.paper} elevation={0}>
                    {" "}
                    <Column>
                      <Row>
                        <ImageView src="/images/XinFin-Docs.svg" />
                      </Row>
                      <Row>
                        <Span>XinFin API</Span>
                      </Row>
                    </Column>
                  </Paper>
                </Grid>
              </Grid>
              <Grid container spacing={5}>
                <Grid className={classes.gridOne} item xs={6} sm={3}>
                  <Paper className={classes.paper} elevation={0}>
                    {" "}
                    <Column>
                      <Row>
                        <ImageView src="/images/One-Click-Install.svg" />
                      </Row>
                      <Row>
                        <Span>XinFin Docs</Span>
                      </Row>
                    </Column>
                  </Paper>
                </Grid>
              </Grid>
            </Div>
          </Grid>
        </div>
      </div>
      <div>
        <FooterComponent />
      </div>
    </div>
  );
}
const Span = styled.span`
  color: var(--unnamed-color-2a2a2a);
  text-align: center;
  font: normal normal medium 17px/20px Inter;
  letter-spacing: 0px;
  color: #2a2a2a;
  opacity: 1;
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
  borderradius: 6px;
  opacity: 1;
`;

const Heading = styled.span`
  white-space: nowrap;
  letter-spacing: 0px;
  color: #2a2a2a;
  opacity: 1;
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
  opacity: 1;
`;
const ImageView = styled.img`
  width: 100px;
`;
const ImageDiv = styled.div`
  background: #fdfeff 0% 0% no-repeat padding-box;
  border: 1px solid #e3e7eb;
  border-radius: 6px;
  opacity: 1;
  width: 100%;
  max-width: 190px;
  min-height: 170px;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
`;
