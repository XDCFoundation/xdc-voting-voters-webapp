import React from "react";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/styles";
import { Row } from "simple-flexbox";
import styled from "styled-components";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  add: {
    backgroundColor: "#2149b9",
    marginLeft: "90px",
  },

  value: {
    width: "400px !important",
  },
  closeContainer: {
    top: "26px",
    fontWeight: "500",
    position: "absolute",
    right: "30px",
    cursor: "pointer",
  },
  close: {
    // width: "15px",
  },
  input: {
    width: "433px",
    height: "40px",
    padding: "12px 19px 11px 19px",
    borderRadius: "6px",
    border: "solid 1px #9fa9ba",
    backgroundColor: "#fff",
    outline: "none",
  },

  addbtn: {
    width: "434px",
    height: "44px",
    borderRadius: "4.4px",
    border: "solid 0.6px #00a1ed",
    backgroundColor: "#3763dd",
    margin: "15px 15.5px 30px 15px",
    color: "white",
  },

  userContainer: {
    marginTop: "12px",
  },

  passwordContainer: {
    marginTop: "15px",
  },
  error: {
    color: "red",
    marginLeft: "2px",
  },
  error1: {
    color: "red",
    marginLeft: "24px",
  },
  error2: {
    color: "red",
    // marginLeft: "auto",
    // marginRight: "auto",
    display: "flex",
    justifyContent: "center",
  },

  subCategory: {
    marginTop: "5px",
    marginBottom: "0px",
    fontfamily: "Inter",
    fontsize: "14px",
    fontweight: "500",
    border: "none !important",
    outline: "none",
    color: "#2A2A2A",
  },
  subCategorySignup: {
    marginTop: "5px",
    marginBottom: "0px",
    fontfamily: "Inter",
    fontsize: "14px",
    fontweight: "500",
    border: "none !important",
    outline: "none",
    color: "#2A2A2A",
  },

  forgotPassword: {
    color: "#2149b9",
    position: "absolute",
    right: "35px",
    cursor: "pointer",
    lineHeight: "26px",
    fontSize: "14px",
  },
  createaccount: {
    color: "#2149b9",
    fontfamily: "Inter",
    fontsize: "14px",
    cursor: "pointer",
  },
  icon: {
    marginLeft: "-48px",
    marginBottom: "4px",
    marginTop: "5px",
  },
  xdc: {
    color: "#2a2a2a",
    textAlign: "center",
    marginBottom: "37px",
    fontFamily: "Inter",
    fontSize: "14px",
    fontWeight: "500",
  },
  heading: {
    fontWeight: "600",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: "22px",
    fontSize: "22px",
    color: "#2a2a2a",
  },

  termsContainer: {
    flexFlow: "row nowrap",
    display: "flex",
    marginLeft: "24px",
    marginTop: "20px",
  },
  iAmNotRobotSignup: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginTop: "50px",
    marginBottom: "25px",
    flexDirection: "column",
  },
  checkbox: {
    width: "17px",
    height: "17px",
    marginRight: "8px",
    marginTop: "5px",
  },
  robotContainer: {
    width: "299px",
    height: "69px",
    backgroundColor: "#F8F6F6",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "51px",
  },
  robotContainer1: {
    flexFlow: "row nowrap",
    display: "flex",
    justifyContent: "space-between",
  },
  robotContainer2: {
    flexFlow: "row nowrap",
    display: "flex",
    justifyContent: "space-between",
  },
  captchaCheckbox: {
    marginTop: "21px",
    width: "25px",
    height: "25px",
    marginLeft: "14px",
    marginRight: "14px",
  },
  robotText: {
    marginTop: "24px",
    fontWeight: "bold",
    marginLeft: "-50px",
    color: "#2a2a2a",
  },
  recaptcha: {
    marginTop: "12px",
    marginRight: "10px",
  },
  createAccountbtn: {
    width: "433px",
    height: "44px",
    borderRadius: "4.4px",
    border: "solid 0.6px #00a1ed",
    backgroundColor: "#3763dd",
    margin: "15px 15px 23px 24px",
    color: "white",
  },
  resetPasswordbtn: {
    width: "433px",
    height: "44px",
    borderRadius: "4.4px",
    border: "solid 0.6px #00a1ed",
    backgroundColor: "#3763dd",
    margin: "15px 15px 23px 24px",
    color: "white",
  },
  alreadyAccount: {
    textAlign: "center",
    marginBottom: "30px",
    color: "#2a2a2a",
  },
  backToSignIn: {
    textAlign: "center",
    marginBottom: "30px",
    color: "#2a2a2a",
  },
  signIn: {
    color: "#2149b9",
    cursor: "pointer",
  },
  fieldName: {
    fontSize: "14px",
    fontWeight: "500",
  },

  forgotText: {
    width: "404px",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    letterSpacing: "0px",
    color: "#4c4c4c",
    marginTop: "20px",
    marginBottom: "39px",
    fontSize: "15px",
  },
  robotContainerForgotPass: {
    width: "299px",
    height: "69px",
    backgroundColor: "#F8F6F6",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "24px",
  },
  "@media (max-width: 1920px)": {
    forgotText: {
      maxWidth: "404px",
      width: "95%",
    },
    createAccountbtn: {
      maxWidth: "433px",
      width: "90%",
    },
    resetPasswordbtn: {
      maxWidth: "433px",
      width: "90%",
    },
    robotContainer: {
      maxWidth: "299px",
      width: "95%",
    },
    loading: {
      zIndex: -1,
    },
  },
  "@media (max-width: 767px)": {
    closeContainer: {
      display: "none",
    },
    heading: {
      fontWeight: "600",
      marginRight: "auto",
      marginLeft: "auto",
      marginTop: "23px",
      fontSize: "14px",
      color: "#2a2a2a",
      marginBottom: "8px",
    },
    subCategory: {
      display: "flex",
      justifyContent: "space-between",
    },
    subCategorySignup: {
      display: "flex",
      justifyContent: "space-between",
    },
    forgotPassword: {
      position: "relative",
      right: "0px",
      color: "#3763dd",
      fontSize: "13px",
    },
    dialogButton: {
      padding: "0",
      justifyContent: "center",
    },
    // dialog:{
    //    display:"none !important"
    // },
    createaccount: {
      color: "#3763dd",
    },
    forgotText: {
      paddingLeft: "18px",
      paddingRight: "18px",
      marginBottom: "28px",
    },
    createAccountbtn: {
      width: "100%",
      maxWidth: "343px",
      height: "38px",
      borderRadius: "4px",
      margin: "23px auto 21px auto",
      display: "block",
    },
    resetPasswordbtn: {
      width: "100%",
      maxWidth: "343px",
      height: "38px",
      borderRadius: "4px",
      margin: "23px auto 21px auto",
      display: "block",
    },
    fieldName: {
      fontSize: "13px",
    },
    addbtn: {
      width: "100%",
      maxWidth: "343px",
      height: "38px",
      borderRadius: "4px",
      margin: "23px auto 21px auto",
    },
    termsContainer: {
      flexFlow: "row nowrap",
      display: "flex",
      margin: "20px auto 35px auto",
      maxWidth: "342px",
      width: "100%",
    },
    userContainer: {
      marginTop: "12px",
      padding: "0px",
      width: "100%",
      maxWidth: "343px",
      marginLeft: "auto",
      marginRight: "auto",
    },
    userContainerSignup: {
      marginTop: "12px",
      padding: "0px",
      width: "100%",
      maxWidth: "343px",
      marginLeft: "auto",
      marginRight: "auto",
    },
    passwordContainer: {
      marginTop: "20px",
      padding: "0px",
      width: "100%",
      maxWidth: "343px",
      marginLeft: "auto",
      marginRight: "auto",
    },

    input: {
      maxWidth: "433px",
      width: "100%",
      height: "38px",
    },
    xdc: {
      fontSize: "13px",
    },
  },
  "@media (min-width: 768px) and (max-height: 800px)": {
    termsContainer: {
      marginTop: "0px",
    },
    iAmNotRobotSignup: {
      marginTop: "15px",
      marginBottom: "5px",
    },
    alreadyAccount: {
      marginBottom: "15px",
    },
    createAccountbtn: {
      margin: "15px 15px 15px 24px",
    },
    subCategorySignup: {
      marginTop: "0px",
    },
  },
}));

const InstructionCard = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-flow: column;
  -ms-flex-flow: column;
  -webkit-flex-flow: column;
  -ms-flex-flow: column;
  flex-flow: column;
  gap: 25px;
  padding: 12px 0 0 0;
  width: 200px;
  height: 233px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  opacity: 1;
`;

const CardText = styled.div`
  padding: 0px 17px 0px 17px;
  /* color: #686868; */
  text-align: center;
  font: normal normal normal 16px/20px Inter;
  letter-spacing: 0px;
  opacity: 1;
  margin-top: -15px;
`;

const ImageContainer = styled.div`
  height: 43px;
  justify-content: center;
  display: flex;
  flex-flow: row;
`;

const CardTitle = styled.div`
  text-align: center;
  font: normal normal 600 16px/20px Inter;
  letter-spacing: 0px;
  color: #1f1f1f;
  opacity: 1;
`;

const CloseIconContainer = styled.div`
  cursor: pointer;
  //   position: absolute;
  //   right: 42px;
  width: 15px;
  height: 15px;
  color: #000000;
  font-weight: 600;
`;

export default function Web3Dialog(props) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    mainDialogOpen();
  }, []);

  const classes = useStyles();
  const handleClose = () => {
    setOpen(false);
  };
  const mainDialogOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Dialog
        className="dialog-main"
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        id="web3Dialog"
      >
        <div className="main-box">
          <Row className="main-row">
            <div className="main-title">
              You can only view the proposals on mobile browser
            </div>
          </Row>

          <Row className="card-box">
            <div>
              If you have a whitelisted voter, please open XDC Governance portal
              on a desktop browser and connect XDC Pay to vote and create
              proposal
            </div>
          </Row>

          <Row className="last-row">
            <button className="last-title" onClick={handleClose}>
              {" "}
              <div>
                {" "}
                <span>
                  {/* <img
                className="connect-text"
                alt="new-feature"
                src={"/images/connect xdc icon.svg"}
              /> */}
                </span>
                I understood
              </div>{" "}
            </button>
          </Row>

          <div className="dont-message">
            <input type="checkbox" className="input-check" />
            <span>Don’t show this message again</span>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
