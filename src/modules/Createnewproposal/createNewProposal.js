import React, { useState,useEffect} from "react";
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
import DatePicker, { Calendar } from "react-multi-date-picker";
import TextField from "@material-ui/core/TextField";
import utility from "../../utility/index";
import Utils from "../../utility";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import moment from "moment";


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  Alert: {
    backgroundColor: "#ffffff !important",
  },
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
      maxWidth: "90%",
    },
    "@media (min-width: 567px) and (max-width: 767px)": {
      maxWidth: "500px",
    },
    "@media (min-width: 767px) and (max-width: 1440px)": {
      maxWidth: "95%",
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
    outline: "none",
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
    width: "147%",
    whiteSpace: "nowrap",

    maxWidth: "368px",

    "@media (min-width: 300px) and (max-width: 767px)": {
      width: "100%",
      font: "normal normal normal 15px/19px Inter",
    },

    "@media (min-width: 900px) and (max-width: 1099px)": {
      width: "23vw",
      marginLeft: "-23%",
    marginRight:" auto",
      font: "normal normal normal 15px/19px Inter",
    },
    "@media (min-width: 768px) and (max-width: 899px)": {
      width: "23vw",
      marginLeft: "-44%",
    marginRight:" auto",
      font: "normal normal normal 15px/19px Inter",
    },
    "@media (min-width: 1240px) and (max-width: 1340px)": {
      width: "90vw",
      marginLeft: "23px",

      font: "normal normal normal 15px/19px Inter",
    },
    "@media (min-width: 1100px) and (max-width:1239px)": {
      width: "24vw",
      marginLeft: "auto",

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
    paddingRight: "85px",
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
    marginLeft: "72px",

    "@media (min-width: 300px) and (max-width: 767px)": {
      font: "normal normal normal 15px/19px Inter",
      width: "100%",
    },
    // "@media (min-width: 768px) and (max-width: 980px)": {
    //   width: "100%",
    // },
    "@media (min-width: 1100px) and (max-width: 1340px)": {
      width: "80%",
      font: "normal normal normal 15px/19px Inter",
    },
    "@media (min-width: 900px) and (max-width: 1099px)": {
      font: "normal normal normal 15px/19px Inter",
      width: "75%",
    },
    "@media (min-width: 768px) and (max-width: 899px)": {
      width: "23vw",
      font: "normal normal normal 15px/19px Inter",
    },
  },
  enddate: {
    textAlign: "left",
    letterSpacing: "0px",
    color: "#2a2a2a",
    paddingLeft: "81px",
    paddingRight: "99px",
    // marginLeft:"55px",
    font: "normal normal normal 15px/19px Inter",
    alignItems: "center",
    display: "flex",
    overflow: "hidden",
    whiteSpace: "nowrap",
    // "@media (min-width: 768px) and (max-width: 1024px)": {
    //   font: "normal normal normal 14px/17px Inter",
    //   // paddingLeft: "53px",
    //   whiteSpace: "nowrap",
    // },
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
    
  
    "@media (min-width: 1201px) and (max-width: 1329px)": {
      maxWidth: "73vw",
      marginLeft: "12%",
    },
    "@media (min-width: 1100px) and (max-width: 1200px)": {
      maxWidth: "71vw",
      marginLeft: "12%",
    },
    "@media (min-width: 1000px) and (max-width:1099px)": {
      maxWidth: "69vw",
      marginLeft: "12%",
    },
    "@media (min-width: 900px) and (max-width:999px)": {
      maxWidth: "66vw",
      marginLeft: "12%",
    },
    "@media (min-width: 768px) and (max-width:899px)": {
      maxWidth: "62vw",
      marginLeft: "12%",
    },
    "@media (min-width: 1340px) and (max-width:1440px)":{
      maxWidth: "75vw",
      marginLeft: "12%"
    }
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
    marginRight: "22px",
    height: "40px",
  },
  image: {
    width: "29px",
    // marginLeft: "6px",
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
    marginTop: "10px",
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
  cursor:pointer;
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
  // const [open, setOpen] = useState(false);
  const [count, setCount] = React.useState(0);


  const [utcStartDate,setutcStartDate]=useState("");
  const [utcEndDate,setutcEndDate]=useState("");

  const inputFile = React.createRef();
  const handleQuillChange = (event) => {
    setDescription(event);
    setErrorDescription("")
  };
  
  const uploadFile = () => {
    inputFile.current.click();
  };
  // const handleOpen = () => {
  //   setOpen(true);
  //   console.log({ open });
  // };
  
  useEffect(()=>{
    const date = moment.utc().format();

    
      // var date2=new Date();

      // const hour = String(date.getUTCHours()).padStart(2, "0");
      // const minute = String(date.getUTCMinutes()).padStart(2, "0");
      // const second = String(date.getUTCSeconds()).padStart(2, "0");
      // //var ms=date.getTime();

      // var strDate = hour + ":" + minute + ":" + second;
      // const utctime=strDate;

      setutcStartDate(date);
     // console.log(utcStartDate);
     
      
    },[startDate])
    useEffect(()=>{
      const utctime = moment.utc().format();

    
      // var date=new Date();
      // console.log(date);

      // const hour = String(date.getUTCHours()).padStart(2, "0");
      // const minute = String(date.getUTCMinutes()).padStart(2, "0");
      // const second = String(date.getUTCSeconds()).padStart(2, "0");
      // //var ms=date.getTime();

      // var strDate = hour + ":" + minute + ":" + second;
      // const utctime=strDate;
      

      setutcEndDate(utctime);
     // console.log(utcEndDate);
      
    },[endDate])

   
    
 

   
  const  createNewProposal = async () => {
    

    
    
    //  var compareDate = new Date();
    //  var difference= new Date(endDate).getDate()-new Date(startDate).getDate();
    //  console.log(difference);
    //  console.log(compareDate);
    //  compareDate.setDate(compareDate.getDate() + difference);
    //  console.log("compare date"+compareDate)
    //  console.log(compareDate.getTime())

    // //UTC AND LOCAL TIME
    // const utctime = moment.utc().format();
    // console.log(utctime)
    // var stillUtc = moment.utc(utctime).toDate();
    // console.log(stillUtc);
    // var local = moment(stillUtc).local().format('YYYY-MM-DD HH:mm:ss');
    // console.log(local);

    //start Date
    console.log("startdate"+startDate);
    
    var xy=new Date(startDate);
    console.log(xy);
    const x=moment(xy).utc().format();
    console.log(x);
    var z=new Date(x).toISOString();
    console.log(z);
    var epochutcStart=(new Date(z).getTime());
    console.log(epochutcStart);

    //end-Date
    var enddate=new Date(endDate);
    console.log(enddate);
    const utc=moment(endDate).utc().format();
    console.log(utc);
    var stillutc=new Date(utc).toISOString();
    console.log(stillutc);
    var epochutcEnd=(new Date(stillutc).getTime());
    console.log(epochutcEnd);

    
   
    

    const reqObj = {
      proposalTitle: proposalTitle,
      startDate: epochutcStart,
      endDate: epochutcEnd,
      description: description,
      filepath: uploadDocument,
      pollingContract: "0011",
      status: "pending",


      // utcStartDate:epochutcStart,
      // utcEndDate:epochutcEnd,


      // utcTime:stillUtc,
      // localTime:local,
     

    };
    if (
      !reqObj.proposalTitle
      // !reqObj.startDate ||
      // !reqObj.endDate ||
      // !reqObj.description
    )
   { setError("Please Enter Title")}
      // Utils.apiFailureToast("Please provide all the inputs");
    //console.log(Date.parse(startDate), "startdate");
    //console.log(Date.parse(endDate), "endDate");
    if (
      proposalTitle &&
      Date.parse(startDate) < Date.parse(endDate) &&
      description.length >= 200
    ) {
      props.createProposal(reqObj);
    } 
    // else if(Date.parse(startDate) > Date.parse(endDate)){
    //   // Utils.apiFailureToast("Title should be less than 60 chars");
    //   setDateError("Enter Valid Date");
    // }
      // Utils.apiFailureToast("Enter Valid Date");
      // Utils.apiFailureToast("Description should be greater than 200 chars");
     else if(description.length < 200) {setErrorDescription("Description must be atleast 200 characters");}
    
    else{
      setDateError("Enter Valid Date");
    }
  };

  const classes = useStyles();
  const [value, onChange] = useState(new Date());
const [error,setError]=useState("")
const [dateError,setDateError]=useState("")
const [descriptionError,setErrorDescription]=useState("")
const [fileError,setFileError]=useState("")



  return (
    
    <div>
      <Headerdiv>
        <HeaderMain />
      </Headerdiv>
      <div className={classes.maincontainer}>
        <div className={classes.root}>
          <Grid item xs={12}>
            <div style={{ marginBottom: "11px" }}>
              <img
                onClick={backButton}
                src="/images/Back-Arrow.svg"
                style={{ width: "15px", marginRight: "8px", cursor: "pointer" }}
              />
              <Back  onClick={backButton}>Back</Back>
            </div>
            <div className={classes.div}>
              <div className={classes.heading}>Create New Proposal</div>

              <hr className={classes.line} />
              <Container>
                <div className={classes.row}>
                  <div className={classes.proposaltitle}>Proposal Title<span className="star">*</span></div>

                  <Div>
                    {/* <div style={{display:"flex"}}> */}
                    <input
                      className={classes.proposalinput}
                      type="text"
                      onChange={(e) => {
                        setProposalTitle(e.target.value);
                        setCount(e.target.value.length);
                        setError("")
                      }}
                      value={proposalTitle}
                      maxLength="60"
                    />
                    <div className="error-message">{error}
                    <p
                      style={{
                        color: "#2a2a2a",
                        fontSize: "12px",
                        float: "right",
                        paddingTop: "5px",
                      }}
                    >
                      {60 - count}/60
                    </p>
                    </div>
                    {/* </div> */}
                  </Div>
                </div>

                <div className={classes.secondrow}>
                  <StartDiv>
                    <div className={classes.startdate}>Start Date<span className="star">*</span></div>
                    <div>

                    <input
                      className={classes.startdateinput}
                      type="datetime-local"
                       min={new Date().toISOString().split('T')[0]}
                      id="startdate"
                      
                     
                     
                      onChange={(e) =>{ setStartDate(e.target.value);setDateError("")}}
                      value={startDate}
                      onKeyDown={(e) => e.preventDefault()}
                     
                      // disabled
                    />
                    <div className="error-message">{dateError}</div>
                    </div>
                  </StartDiv>
                  <EndDiv>
                    <div className={classes.enddate}>End Date<span className="star">*</span></div>
                    <div>

                    <input
                      className={classes.enddateinput}
                      type="datetime-local"
                      min={new Date().toISOString().slice(0, 10)}
                      onChange={(e) =>{ setEndDate(e.target.value);setDateError("")}}
                      value={endDate}
                      onKeyDown={(e) => e.preventDefault()}
                    />
                    <div className="error-message">{dateError}</div>
                    </div>
                  </EndDiv>
                </div>
                <Mobile>
                  <Firstdiv>
                    <Startdate> Start Date<span className="star">*</span></Startdate>
                    <Inputstartdate
                      type="date"
                      min={new Date().toISOString().slice(0, 10)}
                      onChange={(e) =>{ setStartDate(...e.target.value,e.target.value);}}
                      value={startDate}
                      onKeyDown={(e) => e.preventDefault()}
                    />
                  </Firstdiv>
                  <Seconddiv>
                    <Enddate> End Date<span className="star">*</span></Enddate>
                    <Inputenddate
                      type="date"
                      min={new Date().toISOString().slice(0, 10)}
                      onChange={(e) => setEndDate(e.target.value)}
                      value={endDate}
                      onKeyDown={(e) => e.preventDefault()}
                    />
                  </Seconddiv>
                </Mobile>
                <div className={classes.rowThird}>
                  <div className={classes.description}>Description<span className="star">*</span></div>
                <div>
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
                  <div  className="error-description">{descriptionError}</div>
                 </div>
                </div>
                <div className={classes.rowFourth}>
                  <div className={classes.upload}>Upload Document</div>
                  <div className={classes.uploadbox}>
                    <Column>
                      {props.state.proposalDocuments.length > 0
                        ? props.state.proposalDocuments.map((doc, index) => {
                          const onchangebutton=(e)=>{
                            var x=document.getElementById("fileButton" + index);
                            setFileError("")
                            try{
                            var filesize=e.target.files[0].size;
                            const filename=e.target.files[0].name;
                            const fileextenstion=filename.split('.').pop().toLowerCase();
                            const originalfileSize=Math.round(filesize/1024);
                            const extensionArray=['pdf','docx' ,'doc','xslx','rtf','xls'];
                            let flag=false;
                            if(x.value.length==0 ){
                              Utils.apiFailureToast("No File is Selected Please Select a File.");
                            }
                            else{
                              for(let i=0;i<extensionArray.length;i++){
                                if(fileextenstion.localeCompare(extensionArray[i])==0){
                                  flag=true;
                                }
                              }
                              if(flag == false)
                                 setFileError("File Extension Must be Docx , Doc, Pdf, Xslx,Rtf,Xls");
                              // Utils.apiFailureToast("File Extension Must be Docx , Doc, Pdf, Xslx,Rtf,Xls");
                              else if(originalfileSize > 5120)  {
                                setFileError("File Size Must be Less than 5MB")
                                // Utils.apiFailureToast("File Size Must be Less than 5MB");
                              }
                              if(flag){
                              extensionArray.map((data)=>{
                                if((originalfileSize < 5120) && (fileextenstion == data 
                                  )){
                                  props.uploadFileToS3(
                                    e.target.files[0],
                                    index
                                   );
                                   flag=false;
                                  }
                              })}
                            }
                          }catch(e){
                            console.log(e);
                          }
                          }
                          const onclickbutton=(e)=>{
                            var x=document.getElementById("fileButton" + index);
                            x.value=null;
                          }
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
                                    {props.state.proposalDocumentsName[index]}
                                  </div>

                                  <input
                                    ref={inputFile}
                                    id={"fileButton" + index}
                                    name="fileButton"
                                    type="file"
                                    multiple={false}
                                    accept="*"
                                    style={{ display: "none" }}
                                    onChange={onchangebutton}
                                    onClick={onclickbutton}
                                  />

                                  <BrowseButton for={"fileButton" + index}>
                                    Browse File
                                  </BrowseButton>

                                </div>
                               
                                {index ===
                                props.state.proposalDocuments.length - 1 ? (
                                  <img
                                    className={classes.image}
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
                         <div className="error-message">{fileError}</div>
                    </Column>
                  </div>
                </div>
                <div className={classes.buttondiv}>
                  <Button onClick={createNewProposal}>
                    <span className={classes.circle}></span>
                     Submit Proposal
                  </Button>
                </div>
              </Container>
            </div>
          </Grid>
        </div>
      </div>

      <Snackbar
        open={props.state.open}
        // autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        // onClose={props.handleClose}
      >
        <Alert severity="" className="alert">
          <div className="alert-div">
            <span className="alert-span">
              {/* <img
                className="done-logo"
                src={require("../../assets/styles/images/DONE.svg")}
              ></img> */}
            </span>
            <span>
              <div className="toast-message1">
                <span className="proposal-creation">Proposal creation in Progress</span>
                {/* <span
                  onClick={props.handleClose}
                  style={{
                    float: "right",
                    cursor: "pointer",
                    marginTop: "-20px",
                  }}
                >
                  X
                </span> */}
              </div>
              <div className="loader-spin"></div>
              <div className="confirm-transaction">Confirm this transaction on XDCPay</div>
              {/* <div className="toast-address">
                Thank you for your contribution in adding transparency to XDC
                network
              </div> */}
            </span>
          </div>
        </Alert>
      </Snackbar>

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
  padding-top: 4px;
  margin-top: -2px;
  margin-bottom: 4px;
  margin-right: 3px;
  width: 100%;
  max-width: 111px;
  height: 29px;
`;

const Button = styled.button`
  background: #2149b9 0% 0% no-repeat padding-box;
  border: 1px solid #fffcfc;
  border-radius: 4px;
  color: #ffffff;
  height: 42px;
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
`;
