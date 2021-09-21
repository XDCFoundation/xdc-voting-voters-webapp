import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles/";
import Grid from "@material-ui/core/Grid";
import { Row, Column } from "simple-flexbox";
import styled from "styled-components";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import HeaderMain from "../header/header";
import "../../assets/styles/custom.css";
import FooterComponent from "../footer/footerComponent";
import Utility from "../../utility/index";
import AddNewProposalLive from "../../services/proposalService";
import ReactQuill from "react-quill";
import { history } from "../../managers/history";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    maxWidth: "970px",
    position: "absolute",
    top: "154px",

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
  container: {
    width: "100%",
    margin: "0px",
  },
  div: {
    width: "100%",
    height: "auto",
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    border: "1px solid #E3E7EB",
    borderRadius: "6px",
    opacity: "1",
    marginBottom: "50px",
  },

  heading: {
    fontSize: "15px",
    marginTop: "17px",

    whiteSpace: "nowrap",
    paddingLeft: "20px",

    font: " normal normal 600 22px/26px Inter",
    letterSpacing: "0px",
    color: "#2a2a2a",
    opacity: "1",
    whiteSpace: "nowrap",
  },
  line: { width: "100%" },
  proposalinput: {
    background: "#ffffff 0% 0% no-repeat padding-box",
    border: "1px solid #e3e7eb",
    borderRadius: "4px",
    opacity: "1",
    width: "95%",
    height: "35px",
    fontSize: "12px",
    whiteSpace: "nowrap",

    "@media (min-width: 300px) and (max-width: 767px)": {
      display: "block",
      marginLeft: "7px",
      width: "113%",
    },
  },

  enddateinput: {
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    border: "1px solid #E3E7EB",
    borderRadius: "4px",
    opacity: "1",
    height: "35px",
    fontSize: "10px",
    width: "100%",
    maxWidth: "295px",
    whiteSpace: "nowrap",

    "@media (min-width: 300px) and (max-width: 767px)": {
      width: "85%",
      marginLeft: "-9px",
      marginTop: "2px",
    },

    "@media (min-width: 767px) and (max-width: 1024px)": {
      width: "74%",
      marginLeft: "30px",
    },
  },

  proposaltitle: {
    color: "var(--unnamed-color-2a2a2a)",
    textAlign: "left",
    font: "normal normal normal 15px/19px Inter",
    letterSpacing: "0px",
    color: "#2a2a2a",
    paddingLeft: "21px",
    paddingTop: "7px",

    fontSize: "12px",
    whiteSpace: "nowrap",
    "@media (min-width: 300px) and (max-width: 767px)": {
      fontSize: "11px",
      paddingLeft: "8px",
    },
    "@media (min-width: 900px) and (max-width: 977px)": {
      fontSize: "12px",
    },
  },
  startdate: {
    color: "var(--unnamed-color-2a2a2a)",
    textAlign: "left",
    font: "normal normal normal 15px/19px Inter",
    letterSpacing: "0px",
    color: " #2a2a2a",
    fontSize: "12px",
    paddingLeft: "21px",
    paddingTop: "5px",
    whiteSpace: "nowrap",

    "@media (min-width: 300px) and (max-width: 767px)": {
      fontSize: "11px",
      paddingLeft: "8px",
    },
    "@media (min-width: 900px) and (max-width: 977px)": {
      fontSize: "12px",
    },
  },
  startdateinput: {
    background: " #FFFFFF 0% 0% no-repeat padding-box",
    border: " 1px solid #E3E7EB",
    borderRadius: "4px",

    fontSize: "10px",
    height: "35px",
    width: "100%",
    maxWidth: "295px",

    "@media (min-width: 300px) and (max-width: 767px)": {
      marginLeft: "6px",
      fontSize: "11px",
      width: "85%",
    },
    "@media (min-width: 767px) and (max-width: 980px)": {
      width: "74%",
      marginLeft: "5px",
    },
  },
  enddate: {
    color: "var(--unnamed-color-2a2a2a)",
    textAlign: "left",
    letterSpacing: "0px",
    color: "#2a2a2a",
    fontFamily: "Inter",
    fontSize: "12px",
    alignItems: "center",
    display: "flex",
    overflow: "hidden",
    whiteSpace: "nowrap",

    "@media (min-width: 767px) and (max-width: 1024px)": {
      fontSize: "12px",
      marginLeft: "18px",
      overflow: "hidden",
      whiteSpace: "nowrap",
    },
    "@media (min-width: 300px) and (max-width: 767px)": {
      fontSize: "11px",
      overflow: "hidden",
      whiteSpace: "nowrap",
    },
  },
  description: {
    color: "var(--unnamed-color-2a2a2a)",
    textAlign: "left",
    font: "normal normal normal 15px/19px Inter",
    letterSpacing: "0px",
    color: "#2a2a2a",

    fontSize: "12px",
    paddingTop: "50px",
    paddingLeft: "21px",
    whiteSpace: "nowrap",

    "@media (min-width: 300px) and (max-width: 767px)": {
      fontSize: "11px",
      paddingLeft: "8px",
    },
    "@media (min-width: 900px) and (max-width: 977px)": {
      fontSize: "12px",
    },
  },

  quillgrid: {
    paddingTop: "47px",
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    marginLeft: "2px",
    borderRadius: "6px",
    paddingRight: "45px",
    width: "100%",
    // height: "215px",
  },

  row: {
    display: "flex",
    flexFlow: "row nowrap",
    "@media (min-width: 300px) and (max-width: 767px)": {
      display: "block !important",
      justifyContent: "center",
    },
  },

  upload: {
    color: "var(--unnamed-color-2a2a2a)",
    textAlign: "left",
    font: "normal normal normal 15px/19px Inter",
    letterSpacing: "0px",
    color: "#2a2a2a",

    fontSize: "12px",
    marginTop: "10%",
    paddingLeft: "21px",
    whiteSpace: "nowrap",
    "@media (min-width: 300px) and (max-width: 767px)": {
      fontSize: "12px",
      paddingLeft: "8px",
      marginTop: "109px",
    },
    "@media (min-width: 767px) and (max-width: 900px)": {
      fontSize: "9px",
      marginTop: "23%",
    },
    "@media (min-width: 900px) and (max-width: 977px)": {
      fontSize: "12px",
      marginTop: "20%",
    },
    "@media (min-width: 977px) and (max-width: 1080px)": {
      fontSize: "9px",
      marginTop: "13%",
    },
  },
  uploadbox: {
    marginTop: "9%",
    "@media (min-width: 300px) and (max-width: 767px)": {
      marginLeft: "7px",
    },
    "@media (min-width: 767px) and (max-width: 900px)": {
      fontSize: "11px",
      marginTop: "22%",
    },
    "@media (min-width: 900px) and (max-width: 977px)": {
      fontSize: "9px",
      marginTop: "18%",
    },
    "@media (min-width: 977px) and (max-width: 1080px)": {
      fontSize: "12px",
      marginTop: "12%",
    },
  },
  input: {
    background: "#ffffff 0% 0% no-repeat padding-box",
    border: "1px solid #e3e7eb",
    borderRadius: "4px",
    opacity: "1",
    width: "90%",
    height: "35px",
    fontSize: "10px",
    textAlign: "right",
  },
  image: {
    width: "27px",
    marginLeft: "6px",
  },

  row_one: {
    "@media (min-width: 767px) and (max-width: 2000px)": {
      display: "flex",
      flexDirection: "row",
      marginTop: "23px",
      marginLeft: "21px",
    },
    "@media (min-width: 300px) and (max-width: 2000px)": {
      display: "flex",
      flexDirection: "row",
      marginTop: "23px",
      width: "100%",
    },
  },
  secondrow: {
    display: "flex",
    flexFlow: "row nowrap",
    marginTop: "20px",
    alignItems: "center",

    "@media (min-width: 200px) and (max-width: 767px)": {
      display: "none",
    },
  },
  maincontainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  buttondiv: {
    display: "flex",
    justifyContent: "center",
    marginTop: "50px",
  },
  gridSix: {
    marginLeft: "25px",
  },
  circle: {
    borderRadius: "50%",
    width: "10px",
    height: "10px",
    background: "#E3E7EB 0% 0% no-repeat padding-box",
    marginRight: "43px",
    marginLeft: "10px",
  },
}));
const Headerdiv = styled.div`
  width: 100%;
  height: 250px;
  background: #2049b9 0% 0% no-repeat padding-box;
  position: relative;
`;
const Back = styled.span`
  text-align: left;
  font-family: "Inter", sans-serif;
  font-size: 17px;
  color: #ffffff;
`;

export default function Createnewproposal(props) {
  const backButton = () => {
    history.push("/");
  };
  const [proposalTitle, setProposalTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [discription, setdiscription] = useState("");
  const [uploadDocument, setUploadDocument] = useState("");
  const inputFile = React.createRef();

  const handleQuillChange = (event) => {
    setdiscription(event);
  };
  const uploadFile = (event) => {
    inputFile.current.click();
  };
  const setUpload = async (event) => {
    event.target.files[0] && setUploadDocument(event.target.files);
  };
  const createNewProposal = async () => {
    let logoData = {};
    const reqObj = {
      proposalTitle: proposalTitle,
      startDate: startDate,
      endDate: endDate,
      discription: discription,
      filepath: uploadDocument,
      pollingContract: "0011",
      status: "pending",
    };

    const response = await AddNewProposalLive(reqObj);
  };

  const classes = useStyles();
  return (
    <div>
      <Headerdiv>
        <HeaderMain />
      </Headerdiv>
      <div className={classes.maincontainer}>
        <div className={classes.root}>
          <Grid item xs={12}>
            <div style={{ marginBottom: "11px" }} onClick={backButton}>
              <img
                src="/images/Back-Arrow.svg"
                style={{ width: "15px", marginRight: "8px" }}
              />
              <Back>Back</Back>
            </div>
            <div className={classes.div}>
              <Grid className={classes.heading} xs={4}>
                Create New Proposal
              </Grid>

              <hr className={classes.line} />

              <div className={classes.row}>
                <Grid xs={2} className={classes.proposaltitle}>
                  Proposal Title
                </Grid>

                <Grid xs={10}>
                  <input
                    className={classes.proposalinput}
                    type="text"
                    onChange={(e) => setProposalTitle(e.target.value)}
                    value={proposalTitle}
                  />
                </Grid>
              </div>

              <div className={classes.secondrow}>
                <Grid xs={2} className={classes.startdate}>
                  Start Date
                </Grid>

                <Grid xs={6} className={classes.gridSix}>
                  <input
                    className={classes.startdateinput}
                    type="date"
                    onChange={(e) => setStartDate(e.target.value)}
                    value={startDate}
                  />
                </Grid>

                <Grid xs={1} className={classes.enddate}>
                  End Date
                </Grid>

                <Grid xs={5}>
                  <input
                    className={classes.enddateinput}
                    type="date"
                    onChange={(e) => setEndDate(e.target.value)}
                    value={endDate}
                  />
                </Grid>
              </div>
              <Mobile>
                <Firstdiv>
                  <Startdate>Start Date</Startdate>
                  <Inputstartdate
                    type="date"
                    onChange={(e) => setStartDate(e.target.value)}
                    value={startDate}
                  />
                </Firstdiv>
                <Seconddiv>
                  <Enddate>End Date</Enddate>
                  <Inputenddate
                    type="date"
                    onChange={(e) => setEndDate(e.target.value)}
                    value={endDate}
                  />
                </Seconddiv>
              </Mobile>

              <div className={classes.row}>
                <Grid xs={2} className={classes.description}>
                  Description
                </Grid>

                <Grid xs={10} className={classes.quillgrid}>
                  <div className="text-editor">
                    <ReactQuill
                      className="quill-editor"
                      theme="snow"
                      modules={props.state.modules}
                      formats={props.state.formats}
                      onChange={handleQuillChange}
                      // onChange={(e) => setdiscription(e.target.value)}
                    />
                  </div>
                </Grid>
              </div>
              <div className={classes.row}>
                <Grid xs={2} className={classes.upload}>
                  Upload Document
                </Grid>
                <Grid xs={10} className={classes.uploadbox}>
                  <Row>
                    <div
                      className={classes.input}
                      onChange={(e) => setUploadDocument(e.target.value)}
                      value={uploadDocument}
                    >
                      <div style={{ textAlign: "left" }}>{uploadDocument}</div>
                      <BrowseButton onClick={uploadFile}>
                        Browse File
                        <input
                          ref={inputFile}
                          id="fileButton"
                          type="file"
                          multiple={false}
                          accept="image/*"
                          style={{ display: "none" }}
                          onChange={setUpload}
                        />
                      </BrowseButton>
                    </div>
                    <img className={classes.image} src="/images/Add.svg" />
                  </Row>
                </Grid>
              </div>
              <div className={classes.buttondiv}>
                <Button onClick={() => createNewProposal()}>
                  <span className={classes.circle}></span>
                  Connect Wallet
                </Button>
              </div>
            </div>
          </Grid>
        </div>
      </div>
      <div>
        <FooterComponent />
      </div>
    </div>
  );
}

const BrowseButton = styled.button`
  color: var(--unnamed-color-2149b9);
  text-align: center;
  letter-spacing: 0px;
  color: #2149b9;
  font-size: 14px;
  font-family: "Inter";
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #2049b9;
  border-radius: 4px;
  opacity: 1;
  margin-top: 4px;
  margin-right: 3px;
`;
const Textarea = styled.textarea`
  width: 100%;
`;
const Button = styled.button`
  background: #2149b9 0% 0% no-repeat padding-box;
  border: 1px solid #fffcfc;
  border-radius: 4px;
  color: #ffffff;

  height: 38px;
  font-size: 12px;
  margin-bottom: 10%;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 213px;
  justify-content: center @media (min-width: 300px) and (max-width: 767px) {
    width: 120px;
  }
`;

const Mobile = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-top: 20px;
  @media (min-width: 767px) and (max-width: 2000px) {
    display: none;
  }
`;
const Firstdiv = styled.div`
  display: block;
`;
const Startdate = styled.div`
  font: normal normal normal 15px/19px Inter;
  color: #2a2a2a;
  opacity: 1;
  font-size: 12px;
  text-align: left;
  padding-top: 1%;
  white-space: nowrap;

  padding-left: 10px;
`;
const Seconddiv = styled.div``;
const Enddate = styled.div`
  font: normal normal normal 15px/19px Inter;
  color: #2a2a2a;
  opacity: 1;
  font-size: 12px;
  text-align: left;
  padding-top: 1%;
  white-space: nowrap;
  padding-left: 21px;
  letter-spacing: 0px;
  margin-left: 24px;
`;
const Inputenddate = styled.input`
  border: 1px solid #e3e7eb;
  height: 35px;
  opacity: 1;
  font-size: 10px;
  max-width: 215px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 4px;
  margin-left: 44px;
  width: 72%;
`;
const Inputstartdate = styled.input`
  width: 100%;
  margin-left: 7px;
  border: 1px solid #e3e7eb;
  height: 35px;
  opacity: 1;
  font-size: 10px;
  max-width: 215px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 4px;
`;
