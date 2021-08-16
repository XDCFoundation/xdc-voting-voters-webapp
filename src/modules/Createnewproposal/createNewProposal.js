import React from "react";
import { makeStyles } from "@material-ui/core/styles/";
import Grid from "@material-ui/core/Grid";
import { Row, Column } from "simple-flexbox";
import styled from "styled-components";
import Quill from "quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",

    paddingTop: "8%",
    paddingLeft: "21%",
    paddingRight: "23%",
    // flexDirection: "column",
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
  },
  // lign-items: center;
  //   width: 50%;
  //   display: flex;
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

    "@media (min-width: 400px) and (max-width: 767px)": {
      display: "block",
      marginLeft: "7px",
      width: "113%",
    },
  },
  proposalinput1: {
    background: "#ffffff 0% 0% no-repeat padding-box",
    border: "1px solid #e3e7eb",
    borderRadius: "4px",
    opacity: "1",
    width: "75%",
    marginLeft: "54px",
    height: "35px",
    fontSize: "12px",

    "@media (min-width: 400px) and (max-width: 767px)": {
      display: "block",
      marginLeft: "7px",
      width: "105%",
    },

    "@media (min-width: 767px) and (max-width: 980px)": {
      marginLeft: "34px",
    },
  },
  proposalinput12: {
    background: "#ffffff 0% 0% no-repeat padding-box",
    border: "1px solid #e3e7eb",
    borderRadius: "4px",
    opacity: "1",
    width: "75%",
    marginLeft: "54px",
    height: "35px",
    fontSize: "12px",

    "@media (min-width: 400px) and (max-width: 767px)": {
      display: "block",
      marginLeft: "7px",
      width: "105%",
    },

    "@media (min-width: 768px) and (max-width: 980px)": {
      marginLeft: "39px",
      width: "100%",
    },
  },

  enddateinput: {
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    border: "1px solid #E3E7EB",
    borderRadius: "4px",
    opacity: "1",
    height: "35px",

    fontSize: "10px",

    "@media (min-width: 400px) and (max-width: 767px)": {
      width: "88%",
      marginLeft: "-9px",
      marginTop: "2px",
    },

    "@media (min-width: 767px) and (max-width: 1024px)": {
      marginLeft: "15px",
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
    "@media (min-width: 400px) and (max-width: 767px)": {
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
    "@media (min-width: 400px) and (max-width: 767px)": {
      fontSize: "11px",
      paddingLeft: "8px",
    },
    "@media (min-width: 900px) and (max-width: 977px)": {
      fontSize: "12px",
    },
  },
  startdateinput: {
    width: "50%",
    background: " #FFFFFF 0% 0% no-repeat padding-box",
    border: " 1px solid #E3E7EB",
    borderRadius: "4px",
    opacity: "1",

    fontSize: "10px",
    height: "35px",

    "@media (min-width: 400px) and (max-width: 767px)": {
      marginLeft: "6px",
      fontSize: "11px",
      width: "85%",
    },
    "@media (min-width: 767px) and (max-width: 980px)": {
      marginLeft: "34px",
      width: "74%",
    },
  },
  enddate: {
    color: "var(--unnamed-color-2a2a2a)",
    textAlign: "left",

    letterSpacing: "0px",
    color: "#2a2a2a",
    opacity: 1,
    fontSize: "12px",

    "@media (min-width: 767px) and (max-width: 1024px)": {
      fontSize: "12px",
      marginLeft: "18px",
    },
    "@media (min-width: 400px) and (max-width: 767px)": {
      fontSize: "11px",
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
    "@media (min-width: 400px) and (max-width: 767px)": {
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
    "@media (min-width: 400px) and (max-width: 767px)": {
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
    "@media (min-width: 400px) and (max-width: 767px)": {
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
    width: "85%",
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
    "@media (min-width: 400px) and (max-width: 2000px)": {
      display: "flex",
      flexDirection: "row",
      marginTop: "23px",
      width: "100%",
    },
  },
  startdateparentdiv: {
    "@media (min-width: 768px) and (max-width: 1024px)": {
      display: "flex",
    },
    "@media (min-width: 1025px) and (max-width: 1400px)": {
      display: "flex",
    },
  },
}));

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
    <div className={classes.root}>
      <Grid item xs={12}>
        <div className={classes.div}>
          <Grid className={classes.heading} xs={4}>
            Create New Proposal
          </Grid>

          <hr className={classes.line} />

          <div className={classes.row}>
            <Grid xs={3} className={classes.proposaltitle}>
              Proposal&nbsp;Title
            </Grid>

            <Grid xs={10}>
              <input className={classes.proposalinput} type="text" />
            </Grid>
          </div>

          <Grid xs={12} className={classes.row_one}>
            <Grid xs={3} className={classes.proposaltitle}>
              Start&nbsp;Date
            </Grid>

            <Grid xs={6}>
              <input className={classes.proposalinput12} type="date" />
            </Grid>
          </Grid>
          <Grid xs={12} className={classes.row}>
            <Grid xs={2} className={classes.proposaltitle}>
              End&nbsp;Date
            </Grid>

            <Grid xs={4}>
              <input className={classes.proposalinput1} type="date" />
            </Grid>
          </Grid>
          <div className={classes.row}>
            <Grid xs={3} className={classes.description}>
              Description
            </Grid>
            <Grid xs={10} className={classes.quillgrid}>
              <div data-quill-placeholder="Quill WYSIWYG" data-toggle="quill" />
            </Grid>
          </div>
          <div className={classes.row}>
            <Grid xs={3} className={classes.upload}>
              Upload&nbsp;Document
            </Grid>
            <Grid xs={10} className={classes.uploadbox}>
              <Row>
                <input type="file" className={classes.input} />
                <img className={classes.image} src="/images/Add.svg" />
              </Row>
            </Grid>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "50px",
            }}
          >
            <Button>Connect&nbsp;Wallet</Button>
          </div>
        </div>
      </Grid>
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
  @media (min-width: 400px) and (max-width: 767px) {
    width: 120px;
  }
`;
const Title = styled.span`
  font: normal normal normal 15px/19px Inter;
  color: #2a2a2a;
  opacity: 1;
  font-size: 12px;
  text-align: left;
  padding-top: 1%;
  padding-left: 21px;
  letter-spacing: 0px;
`;
const StartDate = styled.input`
  width: 40%;
  border: 1px solid #e3e7eb;
  height: 35px;
  opacity: 1;
  font-size: 12px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 4px;
`;
