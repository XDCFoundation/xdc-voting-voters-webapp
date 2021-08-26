import React from "react";
import { makeStyles } from "@material-ui/core/styles/";
import Grid from "@material-ui/core/Grid";
import { Row, Column } from "simple-flexbox";
import styled from "styled-components";
import Quill from "quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import HeaderMain from "../header/header";
import "../../assets/styles/custom.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    maxWidth: "970px",
    position: "absolute",
    top: "190px",
    width: "100%",
    "@media (min-width: 300px) and (max-width: 767px)": {
      maxWidth: "300px",
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
    marginTop: "2%",
    paddingLeft: "4%",
    whiteSpace: "nowrap",
    paddingLeft: "2%",
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
    maxWidth: "215px",
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
    opacity: 1,
    paddingLeft: "21px",
    paddingTop: "1%",
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
    opacity: " 1",
    fontSize: "12px",
    paddingLeft: "21px",
    paddingTop: "1%",
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
    opacity: "1",
    fontSize: "10px",
    height: "35px",
    width: "100%",
    maxWidth: "215px",

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
    opacity: 1,
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
    opacity: 1,
    fontSize: "12px",
    paddingTop: "6%",
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
    paddingTop: "4%",
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    marginLeft: "8px",
    borderRadius: "6px",
    paddingRight: "4%",
    opacity: 1,
    height: "215px",
  },

  row: {
    display: "flex",
    flexFlow: "row nowrap",
    "@media (min-width: 400px) and (max-width: 767px)": {
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
    opacity: 1,
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
}));
const Headerdiv = styled.div`
  width: 100%;
  height: 250px;
  background: #2049b9 0% 0% no-repeat padding-box;
  opacity: 1;
  position: relative;
`;

export default function Createnewproposal(props) {
  React.useEffect(() => {
    if (
      document.querySelector('[data-toggle="quill"]').className !==
      "ql-container ql-snow"
    ) {
      new Quill(document.querySelector('[data-toggle="quill"]'), {
        modules: {
          toolbar: [
            [
              { header: "1" },
              { header: "2" },
              "bold",
              "italic",
              "strike",
              "blockquote",
              {
                list: "ordered",
              },
              {
                list: "bullet",
              },

              "link",
              "code",
              "image",
              "video",
              "clean",
            ],
          ],
        },
        placeholder: "",
        theme: "snow",
      });
    }
  }, []);
  const classes = useStyles();
  return (
    <div>
      <Headerdiv>
        <HeaderMain />
      </Headerdiv>
      <div className={classes.maincontainer}>
        <div className={classes.root}>
          <Grid item xs={12}>
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
                  <input className={classes.proposalinput} type="text" />
                </Grid>
              </div>

              <div className={classes.secondrow}>
                <Grid xs={2} className={classes.startdate}>
                  Start Date
                </Grid>

                <Grid xs={4}>
                  <input className={classes.startdateinput} type="date" />
                </Grid>

                <Grid xs={1} className={classes.enddate}>
                  End Date
                </Grid>

                <Grid xs={5}>
                  <input className={classes.enddateinput} type="date" />
                </Grid>
              </div>
              <Mobile>
                <Firstdiv>
                  <Startdate>Start Date</Startdate>
                  <Inputstartdate type="date"></Inputstartdate>
                </Firstdiv>
                <Seconddiv>
                  <Enddate>End Date</Enddate>
                  <Inputenddate type="date"></Inputenddate>
                </Seconddiv>
              </Mobile>

              <div className={classes.row}>
                <Grid xs={2} className={classes.description}>
                  Description
                </Grid>
                <Grid xs={10} className={classes.quillgrid}>
                  <div
                    data-quill-placeholder="Quill WYSIWYG"
                    data-toggle="quill"
                  />
                </Grid>
              </div>
              <div className={classes.row}>
                <Grid xs={2} className={classes.upload}>
                  Upload Document
                </Grid>
                <Grid xs={10} className={classes.uploadbox}>
                  <Row>
                    <input type="file" className={classes.input} />
                    <img className={classes.image} src="/images/Add.svg" />
                  </Row>
                </Grid>
              </div>
              <div className={classes.buttondiv}>
                <Button>Connect Wallet</Button>
              </div>
            </div>
          </Grid>
        </div>
      </div>
    </div>
  );
}
const Button = styled.button`
  background: #2149b9 0% 0% no-repeat padding-box;
  border: 1px solid #fffcfc;
  border-radius: 4px;
  color: #ffffff;
  width: 170px;
  height: 30px;
  font-size: 12px;
  margin-bottom: 10%;
  @media (min-width: 300px) and (max-width: 767px) {
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

  letter-spacing: 0px;
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