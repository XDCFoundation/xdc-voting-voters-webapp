import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles/";
import Grid from "@material-ui/core/Grid";
import { Row, Column } from "simple-flexbox";
import styled from "styled-components";
import Quill from "quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import HeaderMain from "../header/header";
import "../../assets/styles/custom.css";
import FooterComponent from "../footer/footerComponent";
import Utility from "../../utility/index";
import AddNewProposalLive from "../../services/proposalService";
import { history } from "../../managers/history";
import ReactQuill from "react-quill";
import DatePicker from "react-multi-date-picker";
import TextField from "@material-ui/core/TextField";
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
      maxWidth: "900px",
    },
  },
  containerOne: {
    display: "flex",
    flexWrap: "wrap",
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

    marginBottom: "50px",
  },

  heading: {
    whiteSpace: "nowrap",
    padding: " 21px 30px 21px 25px",
    font: " normal normal 600 22px/26px Inter",
    letterSpacing: "0px",
    color: "#2a2a2a",
  },
  line: {
    width: "100%",
    marginTop: "0px",
    marginBottom: "0px",
  },
  proposalinput: {
    background: "#ffffff 0% 0% no-repeat padding-box",
    border: "1px solid #e3e7eb",
    borderRadius: "4px",
    width: "100%",
    padding: "6px",
    font: "normal normal normal 15px/19px Inter",
    maxWidth: "1024px",

    whiteSpace: "nowrap",

    "@media (min-width: 300px) and (max-width: 767px)": {
      display: "block",
      font: "normal normal normal 15px/19px Inter",
      width: "100%",
    },
  },

  enddateinput: {
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    border: "1px solid #E3E7EB",
    borderRadius: "4px",
    padding: "6px",
    font: "normal normal normal 15px/19px Inter",
    width: "100%",
    whiteSpace: "nowrap",

    maxWidth: "368px",

    "@media (min-width: 300px) and (max-width: 767px)": {
      width: "100%",
      font: "normal normal normal 15px/19px Inter",
    },

    "@media (min-width: 767px) and (max-width: 1024px)": {
      width: "100%",
      font: "normal normal normal 15px/19px Inter",
    },
  },

  proposaltitle: {
    textAlign: "left",
    font: "normal normal normal 15px/19px Inter",
    letterSpacing: "0px",
    color: "#2a2a2a",
    // paddingTop: "7px",
    whiteSpace: "nowrap",
    "@media (min-width: 300px) and (max-width: 767px)": {
      font: "normal normal normal 15px/19px Inter",
      paddingBottom: "12px",
    },
    "@media (min-width: 900px) and (max-width: 977px)": {
      font: "normal normal normal 15px/19px Inter",
    },
  },
  startdate: {
    textAlign: "left",
    font: "normal normal normal 15px/19px Inter",
    color: " #2a2a2a",
    paddingRight: "151px",
    whiteSpace: "nowrap",

    "@media (min-width: 300px) and (max-width: 767px)": {
      font: "normal normal normal 15px/19px Inter",
    },
    "@media (min-width: 900px) and (max-width: 977px)": {
      font: "normal normal normal 15px/19px Inter",
    },
  },
  startdateinput: {
    background: " #FFFFFF 0% 0% no-repeat padding-box",
    border: " 1px solid #E3E7EB",
    borderRadius: "4px",
    font: "normal normal normal 15px/19px Inter",
    padding: "6px",
    width: "100%",
    maxWidth: "368px",

    "@media (min-width: 300px) and (max-width: 767px)": {
      font: "normal normal normal 15px/19px Inter",
      width: "100%",
    },
    "@media (min-width: 767px) and (max-width: 980px)": {
      width: "100%",
    },
  },
  enddate: {
    textAlign: "left",
    letterSpacing: "0px",
    color: "#2a2a2a",
    paddingLeft: "81px",

    paddingRight: "99px",

    font: "normal normal normal 15px/19px Inter",
    alignItems: "center",
    display: "flex",
    overflow: "hidden",
    whiteSpace: "nowrap",

    "@media (min-width: 767px) and (max-width: 1024px)": {
      font: "normal normal normal 15px/19px Inter",

      whiteSpace: "nowrap",
    },
    "@media (min-width: 300px) and (max-width: 767px)": {
      font: "normal normal normal 15px/19px Inter",

      whiteSpace: "nowrap",
    },
  },
  description: {
    textAlign: "left",
    font: "normal normal normal 15px/19px Inter",
    letterSpacing: "0px",
    color: "#2a2a2a",

    whiteSpace: "nowrap",

    "@media (min-width: 300px) and (max-width: 767px)": {
      font: "normal normal normal 15px/19px Inter",
      paddingBottom: "12px",
    },
    "@media (min-width: 900px) and (max-width: 977px)": {
      font: "normal normal normal 15px/19px Inter",
    },
  },

  quillgrid: {
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    maxWidth: "1002px",
    borderRadius: "6px",
    width: "100%",
    border: "1px solid #e3e7eb",
    font: "normal normal normal 15px/19px Inter",
    marginLeft: "143px",
    "@media (min-width: 300px) and (max-width: 767px)": {
      font: "normal normal normal 15px/19px Inter",
      marginLeft: "0px",
    },
  },

  row: {
    display: "flex",
    flexFlow: "row nowrap",

    "@media (min-width: 300px) and (max-width: 767px)": {
      display: "block !important",
      justifyContent: "center",
    },
  },
  rowThird: {
    display: "flex",
    flexFlow: "row nowrap",
    marginTop: "31px",

    "@media (min-width: 300px) and (max-width: 767px)": {
      display: "block !important",
      justifyContent: "center",
    },
  },
  rowFourth: {
    display: "flex",
    flexFlow: "row nowrap",
    marginTop: "31px",

    "@media (min-width: 300px) and (max-width: 767px)": {
      display: "block !important",
      justifyContent: "center",
    },
  },
  upload: {
    textAlign: "left",
    font: "normal normal normal 15px/19px Inter",
    letterSpacing: "0px",
    color: "#2a2a2a",
    marginTop: "15px",

    whiteSpace: "nowrap",
    "@media (min-width: 300px) and (max-width: 767px)": {
      font: "normal normal normal 15px/19px Inter",
      paddingBottom: "12px",
    },
    "@media (min-width: 767px) and (max-width: 900px)": {
      font: "normal normal normal 15px/19px Inter",
    },
    "@media (min-width: 900px) and (max-width: 977px)": {
      font: "normal normal normal 15px/19px Inter",
    },
    "@media (min-width: 977px) and (max-width: 1080px)": {
      font: "normal normal normal 15px/19px Inter",
    },
  },
  uploadbox: {
    marginLeft: "93px",
    width: "100%",
    maxWidth: "1019px",
    "@media (min-width: 300px) and (max-width: 767px)": {
      font: "normal normal normal 15px/19px Inter",
      marginLeft: "0px",
    },
    "@media (min-width: 767px) and (max-width: 900px)": {
      font: "normal normal normal 15px/19px Inter",
    },
    "@media (min-width: 900px) and (max-width: 977px)": {
      font: "normal normal normal 15px/19px Inter",
    },
    "@media (min-width: 977px) and (max-width: 1080px)": {
      font: "normal normal normal 15px/19px Inter",
    },
  },
  input: {
    background: "#ffffff 0% 0% no-repeat padding-box",
    border: "1px solid #e3e7eb",
    font: "normal normal normal 15px/19px Inter",
    borderRadius: "4px",

    width: "100%",
    padding: "6px",
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
    },
    "@media (min-width: 300px) and (max-width: 2000px)": {
      display: "flex",
      flexDirection: "row",

      width: "100%",
    },
  },
  secondrow: {
    width: "100%",
    display: "flex",
    flexFlow: "row nowrap",
    marginTop: "30px",
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

  circle: {
    borderRadius: "50%",
    width: "10px",
    height: "10px",
    background: "#E3E7EB 0% 0% no-repeat padding-box",
    marginRight: "26px",
    marginLeft: "-22px",
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
  const [description, setDescription] = useState("");
  const [uploadDocument, setUploadDocument] = useState("");
  const [open, setOpen] = useState(false);

  const inputFile = React.createRef();
  const handleQuillChange = (event) => {
    setDescription(event);
  };
  const uploadFile = () => {
    inputFile.current.click();
  };
  const handleOpen = () => {
    setOpen(true);
    console.log({ open });
  };
  const createNewProposal = async () => {
    const reqObj = {
      proposalTitle: proposalTitle,
      startDate: startDate,
      endDate: endDate,
      description: description,
      filepath: uploadDocument,
      pollingContract: "0011",
      status: "pending",
    };
    props.createProposal(reqObj);
  };

  const classes = useStyles();
  const [value, onChange] = useState(new Date());
  return (
    <div>
      <Headerdiv>
        <HeaderMain />
      </Headerdiv>
      <div className={classes.maincontainer}>
        <div className={classes.root}>
          <Grid item xs={12}>
            <div
              style={{ marginBottom: "11px", cursor: "pointer" }}
              onClick={backButton}
            >
              <img
                src="/images/Back-Arrow.svg"
                style={{ width: "15px", marginRight: "8px" }}
              />
              <Back>Back</Back>
            </div>
            <div className={classes.div}>
              <div className={classes.heading}>Create New Proposal</div>

              <hr className={classes.line} />
              <Container>
                <div className={classes.row}>
                  <div className={classes.proposaltitle}>Proposal Title</div>

                  <Div>
                    <input
                      className={classes.proposalinput}
                      type="text"
                      onChange={(e) => setProposalTitle(e.target.value)}
                      value={proposalTitle}
                    />
                  </Div>
                </div>

                <div className={classes.secondrow}>
                  <StartDiv>
                    <div className={classes.startdate}>Start Date</div>

                    <input
                      className={classes.startdateinput}
                      type="date"
                      onChange={(e) => setStartDate(e.target.value)}
                      value={startDate}
                    />
                  </StartDiv>
                  <EndDiv>
                    <div className={classes.enddate}>End Date</div>

                    <input
                      className={classes.enddateinput}
                      type="date"
                      onChange={(e) => setEndDate(e.target.value)}
                      value={endDate}
                    />
                  </EndDiv>
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
                <div className={classes.rowThird}>
                  <div className={classes.description}>Description</div>
                  <div className={classes.quillgrid}>
                    <div className="text-editor">
                      <ReactQuill
                        className="quill-editor"
                        theme="snow"
                        modules={props.state.modules}
                        formats={props.state.formats}
                        onChange={handleQuillChange}
                      />
                    </div>
                  </div>
                </div>
                <div className={classes.rowFourth}>
                  <div className={classes.upload}>Upload Document</div>
                  <div className={classes.uploadbox}>
                    <Column>
                      {props.state.proposalDocuments.length > 0
                        ? props.state.proposalDocuments.map((doc, index) => {
                            return (
                              <div className="display-flex m-t-4">
                                <div
                                  className={
                                    classes.input +
                                    " display-flex justify-content-between"
                                  }
                                  value={uploadDocument}
                                >
                                  <div
                                    style={{ textAlign: "left" }}
                                    className="p-l-sm p-t-sm"
                                  >
                                    {doc}
                                  </div>
                                  <input
                                    ref={inputFile}
                                    id={"fileButton" + index}
                                    name="fileButton"
                                    type="file"
                                    multiple={false}
                                    accept="*"
                                    style={{ display: "none" }}
                                    onChange={(e) => {
                                      console.log(index, "+++");
                                      props.uploadFileToS3(
                                        e.target.files[0],
                                        index
                                      );
                                    }}
                                  />
                                  <BrowseButton for={"fileButton" + index}>
                                    Browse File
                                  </BrowseButton>
                                </div>
                                {index ===
                                props.state.proposalDocuments.length - 1 ? (
                                  <img
                                    className={classes.imag}
                                    onClick={props.addDocumentRow}
                                    src="/images/Add.svg"
                                  />
                                ) : (
                                  <img
                                    className={
                                      " height-27 m-t-4 width-27 m-l-4"
                                    }
                                    onClick={() =>
                                      props.deleteDocumentRow(index)
                                    }
                                    src="/images/substract.png"
                                  />
                                )}
                              </div>
                            );
                          })
                        : ""}
                    </Column>
                  </div>
                </div>
                <div className={classes.buttondiv}>
                  <Button onClick={createNewProposal}>
                    <span className={classes.circle}></span>
                    Connect Wallet
                  </Button>
                </div>
              </Container>
            </div>
          </Grid>
        </div>
      </div>

      <FooterComponent />
    </div>
  );
}
const Container = styled.div`
  padding: 25px;
`;
const Div = styled.div`
  width: 100%;
  margin-left: 126px;
  @media (min-width: 300px) and (max-width: 767px) {
    width: 100%;
    margin-left: 0px;
  }
`;
const DateDiv = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #e3e7eb;
  border-radius: 4px;
  width: 100%;
  max-width: 345px;
`;
const BrowseButton = styled.label`
  color: var(--unnamed-color-2149b9);
  text-align: center;
  letter-spacing: 0px;
  color: #2149b9;
  font: normal normal normal 15px/19px Inter;

  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #2049b9;
  border-radius: 4px;
  opacity: 1;
  padding-left: 6px;
  padding-right: 6px;
  margin-top: 4px;
  margin-bottom: 4px;
  margin-right: 3px;
  width: 100%;
  max-width: 120px;
`;

const Button = styled.button`
  background: #2149b9 0% 0% no-repeat padding-box;
  border: 1px solid #fffcfc;
  border-radius: 4px;
  color: #ffffff;
  height: 38px;
  font: normal normal normal 15px/19px Inter;
  margin-bottom: 10%;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 213px;
  justify-content: center;
  @media (min-width: 300px) and (max-width: 767px) {
    width: 100%;
    max-width: 185px;
    height: 35px;
  }
`;

const Mobile = styled.div`
  display: flex;
  width: 100%;
  flex-flow: row nowrap;
  margin-top: 20px;

  @media (min-width: 768px) {
    display: none;
  }
  @media (min-width: 300px) and (max-width: 570px) {
    padding-right: 0px;
    width: 100%;
    max-width: 122px;
  }
`;
const Firstdiv = styled.div`
  display: block;
  padding-right: 91px;
  width: 100%;
  @media (min-width: 300px) and (max-width: 767px) {
    padding-right: 0px;
    width: 100%;
    margin-right: 5px !important;
  }
`;
const Startdate = styled.div`
  font: normal normal normal 15px/19px Inter;
  color: #2a2a2a;
  text-align: left;
  white-space: nowrap;
  @media (min-width: 300px) and (max-width: 600px) {
    padding-bottom: 12px;
  }
`;
const Seconddiv = styled.div`
  width: 100%;
`;
const Enddate = styled.div`
  font: normal normal normal 15px/19px Inter;
  color: #2a2a2a;
  white-space: nowrap;
  @media (min-width: 300px) and (max-width: 600px) {
    padding-bottom: 12px;
  }
`;
const Inputenddate = styled.input`
  border: 1px solid #e3e7eb;
  font: normal normal normal 15px/19px Inter;

  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 4px;
  padding: 6px;
  width: 100%;
`;
const Inputstartdate = styled.input`
  width: 100%;
  border: 1px solid #e3e7eb;
  padding: 6px;
  font: normal normal normal 15px/19px Inter;

  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 4px;
`;
const StartDiv = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;
const EndDiv = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;
