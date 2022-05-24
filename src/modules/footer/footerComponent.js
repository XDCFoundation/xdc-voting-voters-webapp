import React, { useState } from "react";
import { Column, Row } from "simple-flexbox";
import "../../assets/styles/custom.css";
import styled from "styled-components";
import { emailSubscription } from "../../services/proposalService";
import Utils from "../../utility";
import validator from "validator";
import { history } from "../../managers/history";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles/";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Alert: {
    backgroundColor: "#ffffff !important",
  },
}));

export default function FooterComponent(props) {
  const classes = useStyles();
  const viewOverview = () => {
    history.push("/overview");
    window.scrollTo(0, 0);
  };
  const viewFAQs = () => {
    history.push("/FAQs");
    window.scrollTo(0, 0);
  };
  const viewCommunity = () => {
    history.push("/community");
    window.scrollTo(0, 0);
  };
  const [addEmail, setAddEmail] = useState("");
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);

  const addingEmail = async () => {
    const reqObj = {
      email: addEmail,
    };
    let [error, proposals] = await Utils.parseResponse(
      emailSubscription(reqObj)
    );
    // if(!error)
    // {
    //   Utils.apiSuccessToast("Email subscribed successfully");
    // }
    if (error || !addEmail || !validator.isEmail(addEmail)) {
      // Utils.apiFailureToast("Please Enter Valid Email");
      setOpen5(true);
    } else {
      // Utils.apiSuccessToast("Email subscribed successfully");
      setOpen6(true);
    }
  };

  const closeAlert = () => {
    setOpen5(false);
    setOpen6(false);
  };

  return (
    <Div>
      <MainContainer>
        <Container>
          <ColumnOne>
            <Row class="footer-div-1">
              <img
                className="footer-logo"
                src={require("../../assets/styles/images/XDC-Logo-Blue.svg")}
              ></img>
              <div className="xdc-footer">XDC</div>
            </Row>
          </ColumnOne>
          <ColumnSecond>
            <Row className="footer-column-heading">Community</Row>
            <RowTag>
              <Anchor
                href="https://discord.com/invite/ndhuU2EEqm"
                target="_blank"
              >
                Discord
              </Anchor>
            </RowTag>
            <RowTag>
              <Anchor href="https://github.com/XDCFoundation/" target="_blank">
                Github
              </Anchor>
            </RowTag>
            <RowTag>
              <Anchor href="https://twitter.com/XDCFoundation" target="_blank">
                Twitter
              </Anchor>
            </RowTag>

            <RowTag>
              <Anchor href="https://t.me/xinfintech" target="_blank">
                Telegram
              </Anchor>
            </RowTag>
            <RowTag>
              <Anchor
                href="https://www.reddit.com/r/XDC_Foundation/"
                target="_blank"
              >
                Forum
              </Anchor>
            </RowTag>
          </ColumnSecond>
          <ColumnThird>
            <Row className="footer-column-heading">Governance</Row>
            <RowTag>
              <Anchor onClick={viewOverview}>Overview </Anchor>
            </RowTag>
            <RowTag></RowTag>
            <RowTag>
              <Anchor
                href="https://www.reddit.com/r/XDC_Foundation/"
                target="_blank"
              >
                Forum
              </Anchor>
            </RowTag>
            <RowTag>
              <Anchor onClick={viewCommunity}>CommunityTools</Anchor>
            </RowTag>
          </ColumnThird>
          <ColumnFourth class="footer-div-1">
            <Row className="footer-column-heading">New Proposal Alert</Row>
            <InputDiv>
              <Input
                type="email"
                placeholder="Add Email"
                onChange={(e) => setAddEmail(e.target.value)}
                value={addEmail}
              />
              <Img
                onClick={() => {
                  addingEmail();
                  setAddEmail("");
                }}
                src={require("../../assets/styles/images/ForwardLogo.svg")}
              />
            </InputDiv>
          </ColumnFourth>
        </Container>

        <RowXDC>© 2022 XDC Foundation. All Right Reserved</RowXDC>
      </MainContainer>
      <MobileDiv>
        <MobileResolution>
          <Row>
            <ResponsiveImg
              className="footer-logo"
              src={require("../../assets/styles/images/XDC-Logo-Blue.svg")}
            />

            <div className="xdc-footer">XDC</div>
          </Row>
          <Row>
            <Heading>New Proposal Alert</Heading>
          </Row>
          <Row>
            <InputDiv>
              <Input type="email" placeholder="Add Email" />
              <Img
                src={require("../../assets/styles/images/ForwardLogo.svg")}
              />
            </InputDiv>
          </Row>
          <Div__>
            <ColumnSecond>
              <Row className="footer-column-heading">Community</Row>
              <RowTag>
                <Anchor
                  href="https://discord.com/invite/ndhuU2EEqm"
                  target="_blank"
                >
                  Discord
                </Anchor>
              </RowTag>
              <RowTag>
                <Anchor
                  href="https://github.com/XDCFoundation/"
                  target="_blank"
                >
                  Github
                </Anchor>
              </RowTag>
              <RowTag>
                <Anchor
                  href="https://twitter.com/XinFin_Official"
                  target="_blank"
                >
                  Twitter
                </Anchor>
              </RowTag>
              <RowTag>
                <Anchor href="https://t.me/xinfintech" target="_blank">
                  Telegram
                </Anchor>
              </RowTag>
              <RowTag>
                <Anchor
                  href="https://www.reddit.com/r/XDC_Foundation/"
                  target="_blank"
                >
                  Forum
                </Anchor>
              </RowTag>
            </ColumnSecond>
            <ColumnThird>
              <Row className="footer-column-heading">Governance</Row>
              <RowTag>
                <Anchor onClick={viewOverview}>Overview </Anchor>
              </RowTag>
              <RowTag></RowTag>
              <RowTag>
                <Anchor
                  href="https://www.reddit.com/r/XDC_Foundation/"
                  target="_blank"
                >
                  Forum
                </Anchor>
              </RowTag>
              <RowTag>
                <Anchor onClick={viewCommunity}>CommunityTools</Anchor>
              </RowTag>
            </ColumnThird>
          </Div__>
          <Row>
            <RowXDC>© 2022 XDC Foundation. All Right Reserved</RowXDC>
          </Row>
        </MobileResolution>
      </MobileDiv>

      {/* ***********************Invalid Email***************************** */}

      <Snackbar
        className="login-xdcpay"
        open={open5}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        // onClose={handleClose4}
      >
        <Alert severity="" className={classes.Alert}>
          <div style={{ display: "flex" }}>
            <span
              style={{
                marginRight: "10px",
                marginTop: "-7px",
                marginLeft: "-8px",
              }}
            >
              <img
                className="done-logo"
                style={{ height: "24px", width: "24px", marginTop: "10px" }}
                src={require("../../assets/styles/images/Error.svg")}
              ></img>
            </span>
            <span>
              {/* <div className="unauthorized">Unauthorized</div> */}
              <div className="unauthorized-message">
                <span>Please Enter Valid Email</span>
              </div>
            </span>
            <span
              onClick={closeAlert}
              style={{
                float: "right",
                cursor: "pointer",
                marginTop: "-5px",
                marginLeft: "15px",
                fontWeight: "600",
              }}
            >
              X
            </span>
          </div>
        </Alert>
      </Snackbar>

      {/* ********************************************************************* */}

      {/* ***********************Email Subscribtion Successfull***************************** */}

      <Snackbar
        className="login-xdcpay"
        open={open6}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        // onClose={handleClose4}
      >
        <Alert severity="" className={classes.Alert}>
          <div style={{ display: "flex" }}>
            <span
              style={{
                marginRight: "10px",
                marginTop: "-7px",
                marginLeft: "-8px",
              }}
            >
              <img
                className="done-logo"
                style={{ height: "24px", width: "24px", marginTop: "10px" }}
                src={require("../../assets/styles/images/DONE.svg")}
              ></img>
            </span>
            <span>
              <div className="unauthorized-message">
                <span>Email subscribed successfully</span>
              </div>
            </span>
            <span
              onClick={closeAlert}
              style={{
                float: "right",
                cursor: "pointer",
                marginTop: "-5px",
                marginLeft: "15px",
                fontWeight: "600",
              }}
            >
              X
            </span>
          </div>
        </Alert>
      </Snackbar>

      {/* ********************************************************************* */}
    </Div>
  );
}
const Div__ = styled.div`
  display: flex;
  justify-content: space-between;
  @media (min-width: 300px) and (max-width: 767px) {
    margin-top: 38px;
  }
`;
const Heading = styled.span`
  font-weight: 600;
  color: #2a2a2a;
  font-size: 17px;
  font-family: "Inter", sans-serif;
  margin-bottom: 10px;
`;
const MobileDiv = styled.div`
  width: 100%;
  display: flex;
  border-top: 1px solid #e3e7eb;
  justify-content: center;
  @media (min-width: 767px) {
    display: none;
  }
`;
const MobileResolution = styled.div`
  @media (min-width: 300px) and (max-width: 567px) {
    width: 100%;
    max-width: 300px;
  }

  @media (min-width: 568px) and (max-width: 767px) {
    width: 100%;
    max-width: 500px;
  }
`;
const RowXDC = styled.div`
  border-top: 1px solid #e3e7eb;
  justify-content: center;
  margin-top: 70px;
  color: #909090;
  text-align: center;
  font: normal normal normal 15px/28px Inter;
  @media (min-width: 300px) and (max-width: 767px) {
    font: normal normal normal 14px Inter;
    margin-top: 20px !important;
    ${"" /* margin-left: 43px !important; */}
    margin-left: 5px !important;
  }
`;

const ResponsiveImg = styled.img``;
const InputDiv = styled.div`
  // background: #ffffff 0% 0% no-repeat padding-box;
  // border: 1px solid #e3e7eb;
  // border-radius: 6px;
  // align-items: center;
  // width: 100%;
  // width: 344px;
  // height: 38px;

  @media (min-width: 300px) and (max-width: 767px) {
    margin-top: 10px;
  }
`;
const Input = styled.input`
  border-left: 1px solid #e3e7eb;
  margin-top: 2px;
  border-top: 1px solid #e3e7eb;
  border-bottom: 1px solid #e3e7eb;
  border-right: 1px solid #e3e7eb;
  letter-spacing: 0px;
  color: #000000;
  outline: none;
  width: 344px;
  height: 38px;
  padding-left: 12px;
  padding-right: 40px;
  border-radius: 6px;
  opacity: 1;
  font-size: 15px;
  @media (max-width: 400px) {
    width: 300px;
  }
  // width: 100%;
`;
const Img = styled.img`
  margin-left: -40px;
  width: 38px;
  margin-top: -4px;
  cursor: pointer;
  border-left: 1px solid #e3e7eb;
  padding: 7px;
`;
const ColumnOne = styled.div``;
const ColumnSecond = styled.div``;
const ColumnThird = styled.div``;
const ColumnFourth = styled.div``;

const Div = styled.div`
  width: 100%;
  display: flex;

  justify-content: center;
  border-top: 1px solid #e3e7eb;
  padding-bottom: 25px;
  align-items: flex-start;
  @media (min-width: 300px) and (max-width: 767px) {
    padding-left: 17px;
    padding-right: 17px;
  }
`;
const MainContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  @media (min-width: 300px) and (max-width: 767px) {
    // width: 100%;
    // max-width: 700px;
    display: none;
  }
  @media (min-width: 300px) and (max-width: 567px) {
    max-width: 300px;
    width: 100%;
  }
  @media (min-width: 567px) and (max-width: 767px) {
    max-width: 500px;
    width: 100%;
  }
  @media (min-width: 767px) and (max-width: 1440px) {
    max-width: 900px;
    width: 100%;
    padding-left: 17px;
    padding-right: 17px;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 29px;
  @media (min-width: 300px) and (max-width: 767px) {
    display: none;
  }
`;
const Anchor = styled.a`
  text-decoration: none !important;
  color: black;
  &:hover {
    color: blue !important;
    text-decoration: underline;
  }
`;
const RowTag = styled.div`
  text-decoration: none !important;
  color: black;
  color: var(--unnamed-color-2a2a2a);
  text-align: left;
  font: normal normal normal 15px/28px Inter;
  color: #2a2a2a;
  cursor: pointer;
`;
