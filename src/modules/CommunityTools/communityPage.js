import React from "react";
import styled from "styled-components";
import { Column, Row } from "simple-flexbox";
import "../../assets/styles/custom.css";
import HeaderMain from "../header/header";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FooterComponent from "../footer/footerComponent";
import Paper from "@material-ui/core/Paper";
import { history } from "../../managers/history";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    maxWidth: "1280px",
    // position: "absolute",
    marginTop: "-84px",
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
      maxWidth: "900px",
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
    width: "100%",
    "@media (min-width: 300px) and (max-width: 767px)": {
      display: "flex",
      justifyContent: "center",
      padding: "5px !important",
    },
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "100%",
    maxWidth: "240px",
    height: "220px",
    display: "flex",
    justifyContent: "center",
    background: "#FDFEFF 0% 0% no-repeat padding-box",
    border: "1px solid #E3E7EB",
    borderRadius: "6px",
    opacity: 1,
  },
}));

export default function CommunityPage() {
  const backButton = () => {
    history.push("/");
  };
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
        image: "/images/XinPay.svg",
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
        image: "/images/API-Documents.svg",
        name: "XinFin API",
      },
      {
        image: "/images/XinFin-Docs.svg",
        name: "XinFin Docs",
      },

      {
        image: "/images/One-Click-Install.svg",
        name: "One Click Installer",
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
            <div
              style={{ marginBottom: "4px", cursor: "pointer" }}
              onClick={backButton}
            >
              <img
                src="/images/Back-Arrow.svg"
                style={{ width: "15px", marginRight: "8px" }}
              />
              <Back>Back</Back>
            </div>
            <Spacing>
              <Container>
                <Heading>Community Tools</Heading>
              </Container>
            </Spacing>
            <Div>
              <Grid container spacing={5}>
                <Grid className={classes.gridOne} item xs={6} sm={4} md={3}>
                  <Paper className={classes.paper} elevation={0}>
                    <ColumnDiv>
                      <RowDiv>
                        <a href="https://explorer.xinfin.network/home">
                          <ImageView src="/images/Block-Explorer.svg" />
                        </a>
                      </RowDiv>
                      <RowDiv>
                        <Span>Block Explorer</Span>
                      </RowDiv>
                    </ColumnDiv>
                  </Paper>
                </Grid>
                <Grid className={classes.gridOne} item xs={6} sm={4} md={3}>
                  <Paper className={classes.paper} elevation={0}>
                    <ColumnDiv>
                      <RowDiv>
                        <a href="http://stats.xinfin.network:3000/">
                          <ImageView src="/images/Network-Stats.svg" />
                        </a>
                      </RowDiv>
                      <RowDiv>
                        <Span>Network Stats</Span>
                      </RowDiv>
                    </ColumnDiv>
                  </Paper>
                </Grid>
                <Grid className={classes.gridOne} item xs={6} sm={4} md={3}>
                  <Paper className={classes.paper} elevation={0}>
                    <ColumnDiv>
                      <RowDiv>
                        <a href="https://xinfin.org/setup-masternode.php">
                          <ImageView src="/images/Master-Nodes.svg" />
                        </a>
                      </RowDiv>
                      <RowDiv>
                        <Span>Masternodes</Span>
                      </RowDiv>
                    </ColumnDiv>
                  </Paper>
                </Grid>
                <Grid className={classes.gridOne} item xs={6} sm={4} md={3}>
                  <Paper className={classes.paper} elevation={0}>
                    <ColumnDiv>
                      <RowDiv>
                        <a href="https://wallet.xinfin.network/#/">
                          <ImageView src="/images/XinPay.svg" />
                        </a>
                      </RowDiv>
                      <RowDiv>
                        <Span>Web Wallet</Span>
                      </RowDiv>
                    </ColumnDiv>
                  </Paper>
                </Grid>
                <Grid className={classes.gridOne} item xs={6} sm={4} md={3}>
                  <Paper className={classes.paper} elevation={0}>
                    <ColumnDiv>
                      <RowDiv>
                        <a href="https://play.google.com/store/apps/details?id=com.xdcwallet">
                          <ImageView src="/images/Android-Wallet.svg" />
                        </a>
                      </RowDiv>
                      <RowDiv>
                        <Span>Android Wallet</Span>
                      </RowDiv>
                    </ColumnDiv>
                  </Paper>
                </Grid>
                <Grid className={classes.gridOne} item xs={6} sm={4} md={3}>
                  <Paper className={classes.paper} elevation={0}>
                    <ColumnDiv>
                      <RowDiv>
                        <a href="https://chrome.google.com/webstore/detail/xinpay/bocpokimicclpaiekenaeelehdjllofo?hl=en">
                          <ImageView src="/images/XinPay.svg" />
                        </a>
                      </RowDiv>
                      <RowDiv>
                        <Span>XDCPay</Span>
                      </RowDiv>
                    </ColumnDiv>
                  </Paper>
                </Grid>
                <Grid className={classes.gridOne} item xs={6} sm={4} md={3}>
                  <Paper className={classes.paper} elevation={0}>
                    <ColumnDiv>
                      <RowDiv>
                        <a href="https://explorer.xinfin.network/publicAPIDoc">
                          <ImageView src="/images/API-Documents.svg" />
                        </a>
                      </RowDiv>
                      <RowDiv>
                        <Span>XDC API</Span>
                      </RowDiv>
                    </ColumnDiv>
                  </Paper>
                </Grid>
                <Grid className={classes.gridOne} item xs={6} sm={4} md={3}>
                  <Paper className={classes.paper} elevation={0}>
                    <ColumnDiv>
                      <RowDiv>
                        <a href="https://docs.xinfin.org/">
                          <ImageView src="/images/XinFin-Docs.svg" />
                        </a>
                      </RowDiv>
                      <RowDiv>
                        <Span>XDC Docs</Span>
                      </RowDiv>
                    </ColumnDiv>
                  </Paper>
                </Grid>
                <Grid className={classes.gridOne} item xs={6} sm={4} md={3}>
                  <Paper className={classes.paper} elevation={0}>
                    <ColumnDiv>
                      <RowDiv>
                        <a href="https://medium.com/xinfin/xinfin-network-presents-one-click-installer-for-blockchain-node-setup-6ab2dce6ddc0">
                          <ImageView src="/images/One-Click-Install.svg" />
                        </a>
                      </RowDiv>
                      <RowDiv>
                        <Span>One Click Installer</Span>
                      </RowDiv>
                    </ColumnDiv>
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
const ColumnDiv = styled.div`
  justify-content: center;
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
`;
const RowDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  justify-content: center;
`;
const Back = styled.span`
  text-align: left;
  font-family: "Inter", sans-serif;
  font-size: 17px;
  color: #ffffff;
`;

const Span = styled.span`
  color: var(--unnamed-color-2a2a2a);
  text-align: center;
  letter-spacing: 0px;
  color: #2a2a2a;
  opacity: 1;
  white-space: nowrap;
  font-family: "Inter", sans-serif;
  font-size: 17px;
  font-weight: 600;
  margin-top: 10px;
  @media (min-width: 300px) and (max-width: 767px) {
    font-family: "Inter", sans-serif;
    margin-top: 10px;
    font-size: 11px;
  }
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
  border-radius: 0% 0% 6px 6px;
  opacity: 1;
`;

const Heading = styled.span`
  white-space: nowrap;
  letter-spacing: 0px;
  color: #2a2a2a;
  opacity: 1;
  box-shadow: none;

  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 22px;
`;

const ImageView = styled.img`
  @media (min-width: 300px) and (max-width: 767px) {
    width: 60px;
  }
`;
