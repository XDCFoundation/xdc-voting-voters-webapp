import React from "react";
import styled from "styled-components";
import { Column, Row } from "simple-flexbox";
import "../../assets/styles/custom.css";
import HeaderMain from "../header/header";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FooterComponent from "../footer/footerComponent";

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
              <div>
                <ImageDiv>
                  <ImageView src="/images/XinPay.svg" />
                </ImageDiv>
              </div>
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

const Spacing = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  height: auto;
  padding: 11px 24px;
  opacity: 1;
  background: #ffffff 0% 0% no-repeat padding-box;
  align-items: center;
  border-radius: 6px;
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
const SecondContainer = styled.div`
  display: flex;

  align-items: center;
  @media (min-width: 300px) and (max-width: 767px) {
  }
`;

const Div = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #e3e7eb;
  border-radius: 5px;
  height: 760px;
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
  max-width: 240px;
  min-height: 170px;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
`;
