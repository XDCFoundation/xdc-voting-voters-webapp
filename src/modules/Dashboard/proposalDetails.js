// import React, {useState, useEffect} from "react";
// import {Column, Row} from "simple-flexbox";
// import "../../assets/styles/custom.css";
// import TableCell from "@material-ui/core/TableCell";
// import Grid from "@material-ui/core/Grid";
// import Paper from "@material-ui/core/Paper";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import {history} from "../../managers/history";
// import HeaderMain from "../header/header";
// import RecentProposal from "../Dashboard/recentProposal";
// import FooterComponent from "../footer/footerComponent";
// import parse from "html-react-parser";
// import Pdf from "../Dashboard/Proposal-ABC_ Terms & Conditions.pdf";
// import Doc from "../Dashboard/Proposal-ABC_ Terms & Conditions.docx";
// import {makeStyles, mergeClasses} from "@material-ui/styles";
// import Snackbar from "@material-ui/core/Snackbar";
// import MuiAlert from "@material-ui/lab/Alert";
// import {PieChart} from "react-minimal-pie-chart";
// import ReactDOM from "react-dom";
// import Utils from "../../utility";
// import {ProposalService} from "../../services/index";
// import moment from "moment";
// import Web3 from "web3";
//
//
// import {useLocation, useParams} from "react-router";
// import {castVotingProposal} from "../../services/proposalService";
// import {getVotePercentageOnProposal} from "../../services/proposalService";
// // let masterContractAbi = require("../../common/abis/masterContractAbi.json").abi;
//
// let proposalContractAbi =
//     require("../../common/abis/proposalContractAbi.json").abi;
//
// function Alert(props) {
//     return <MuiAlert elevation={6} variant="filled" {...props} />;
// }
//
// function removeTags(str) {
//     return <div dangerouslySetInnerHTML={{__html: str}}>
//     </div>;
// }
//
// const useStyles = makeStyles((theme) => ({
//     Alert: {
//         backgroundColor: "#00144D",
//     },
// }));
//
// export default function ProposalDetails(props) {
//     const {address} = useParams();
//
//     const [transactions, setTransactions] = useState([]);
//
//     useEffect(async () => {
//         let urlPath = `${address}`;
//         let [error, proposalDetail] = await Utils.parseResponse(ProposalService.getProposalDetail(urlPath, {}));
//         if (error || !proposalDetail) return;
//         setTransactions(proposalDetail);
//     }, []);
//
//     let detail = transactions?.proposalTitle;
//     let time = transactions?.createdOn;
//     let formatedTime = moment(time).format("LL");
//     let statusDetail = transactions?.status;
//     let des = transactions?.description;
//     let descrition = removeTags(des)
//
//     const [proposalAddress, setProposalAddress] = useState("");
//     const proposalAddressObject = useParams();
//
//     React.useEffect(() => {
//         let newaddress = [
//             {
//                 image: "/images/network.svg",
//                 name: "xdc5c7257f7088b9bb6939764bf479b4220f52d3857",
//                 time: "1 hr 5 min ago",
//             },
//             {
//                 image: "/images/network.svg",
//                 name: "xdcbc30809b5e2d894ec485dbaa456694779712fdb9",
//                 time: "1 hr 5 min ago",
//             },
//             {
//                 image: "/images/network.svg",
//                 name: "xdc5c7257f7088b9bb6939764bf479b4220f52d3857",
//                 time: "10:30 AM,Today",
//             },
//             {
//                 image: "/images/network.svg",
//                 name: "xdcbc30809b5e2d894ec485dbaa456694779712fdb9",
//                 time: "5.25 PM, 2 july",
//             },
//             {
//                 image: "/images/network.svg",
//                 name: "xdc0b3693740427612142863616a56599e92bdc955a",
//                 time: "1 hr 5 min ago",
//             },
//         ];
//         setAddress(
//             newaddress.map((object) => {
//                 return {
//                     image: object.image,
//                     name: object.name,
//                     time: object.time,
//                 };
//             })
//         );
//         setProposalAddress(proposalAddressObject.address);
//     }, []);
//
//     const [newaddress, setAddress] = React.useState([]);
//     const [support, setsupport] = React.useState("");
//     const [reject, setReject] = React.useState("");
//     const [open3, setOpen3] = React.useState(false);
//     const [isButtonClicked, setIsButtonClicked] = React.useState(false);
//
//     useEffect(() => {
//         getVotePercentage();
//     }, []);
//
//     function shorten(b, amountL = 13, amountR = 3, stars = 3) {
//         return `${b.slice(0, amountL)}${".".repeat(stars)}${b.slice(
//             b.length - 5,
//             b.length
//         )}`;
//     }
//
//     const handleClickVoter = () => {
//         history.push("/voterslist");
//     };
//     const backButton = () => {
//         history.push("/");
//     };
//
//     const handleCloseDailog = () => {
//         setOpen3(true);
//         setIsButtonClicked(true);
//     };
//
//     const handleClose3 = (event, reason) => {
//         if (reason === "clickaway") {
//             return;
//         }
//         setOpen3(false);
//     };
//
//     const getVotePercentage = async () => {
//         const getVote = await getVotePercentageOnProposal();
//         return getVote;
//         console.log("getvotepercentage", getVote);
//     };
//     const castProposal = async (reqData) => {
//         console.log("requestdata", reqData);
//
//         const result = await castVotingProposal(reqData);
//         console.log("result", result);
//     };
//     const castProposalVote = async (isSupport) => {
//         console.log("isSupport", isSupport);
//         let web3;
//         web3 = new Web3(window.web3.currentProvider);
//         console.log(window.web3.currentProvider);
//         window.ethereum.enable();
//
//         web3.eth.getAccounts().then(async (accounts) => {
//             if (!accounts || !accounts.length) {
//                 Utils.apiFailureToast("Please login to Xinpay extension");
//                 return;
//             }
//             const contract = new web3.eth.Contract(
//                 proposalContractAbi,
//                 // "0x0790Fd3D408BB723438990Fc8958f1B9D65Dd35a"
//                 proposalAddress
//             );
//             console.log("contract", contract);
//             // debugger;
//             const acc = accounts[0];
//             console.log("account", accounts);
//             const castProposalResponse = await contract.methods
//                 .cast_vote_for_proposal(true, Date.now())
//                 .send({from: acc})
//                 .catch((err) => {
//                     console.log(err, "error in votecast");
//                 });
//             // .then(async (response) => {
//             //   console.log("response data after vote", response);
//             // });
//             console.log("methods in contract====>", contract.methods);
//             setOpen3(true);
//             setIsButtonClicked(true);
//             // this.setState({ open3: true, isButtonClicked: true });
//             console.log("castProposalResponse", castProposalResponse);
//             const reqData = {
//                 pollingContract: "ueufheu",
//                 voterAddress: proposalAddress,
//                 support: isSupport,
//             };
//             castProposal(reqData);
//
//             getVotePercentage();
//             return castProposalResponse;
//         });
//     };
//     return (
//         <div>
//             <div className="header-div-all">
//                 {" "}
//                 <HeaderMain/>
//             </div>
//
//             <Column>
//                 <div className="all-div-proposal">
//                     <Column>
//                         <div className="back-image" onClick={backButton}>
//                             <img src="/images/Back-Arrow.svg" style={{width: "15px"}}/>
//                             <div className="back-button">Back</div>
//                         </div>
//                         <div className="recent-proposal-div-proposal">
//                             <Row className="recent-add-div-proposal">
//                                 <Column>
//                                     <Row className="date-proposal">Posted on {formatedTime}</Row>
//                                     <Row className="name-proposal">{detail} </Row>
//                                     <Row className="status-proposal">
//                                         Status: <span>{statusDetail}</span>{" "}
//                                     </Row>
//                                 </Column>
//                                 <Column>
//                                     <Row className="time-proposal">
//                     <span style={{marginRight: "-170px"}}>
//                       01:50:48 Remaining
//                     </span>
//                                         <span style={{marginRight: "5px"}}>
//                       {" "}
//                                             <img
//                                                 style={{
//                                                     height: "14px",
//                                                     width: "14px",
//                                                     marginTop: "-3px",
//                                                 }}
//                                                 className="time-inactive"
//                                                 src={require("../../assets/styles/images/Time-Active.svg")}
//                                             ></img>
//                     </span>
//                                     </Row>
//                                 </Column>
//                             </Row>
//                             <div className="griddiv-1">
//                                 <Row>
//                                     <Grid
//                                         lg={13}
//                                         style={{width: "100%"}}
//                                         className="tablegrid_address"
//                                     >
//                                         <Grid
//                                             component={Paper}
//                                             style={{boxShadow: "0px 0px 0px 0px"}}
//                                         >
//                                             <Column className="text-main">
//                                                 <Row className="heading-1">
//
//                                                     {descrition}
//                                                     {/* Lorem ipsum dolor sit amet, consectetur adipiscing
//                           elit. Quisque venenatis magna at sem consectetur,
//                           vitae ultrices sem molestie. Maecenas vitae dolor eu
//                           lectus maximus ultrices. Curabitur vestibulum nec quam
//                           in dictum. */}
//                                                 </Row>
//
//                                                 {/* <Row className="lower-text">
//                           Duis malesuada iaculis dapibus mauris blandit rhonc:
//                         </Row>
//                         <Row className="mid-text">
//                           1. Proin a tristique augue integer mauris magna.
//                         </Row>
//                         <Row className="mid-text">
//                           2. Vivamus tempus dapibus lectus ac rutrum.
//                         </Row>
//                         <Row className="lower-text">
//                           3. Duis malesuada iaculis dapibus.
//                         </Row>
//
//                         <Row className="lower-text">
//                           Maecenas id arcu lacus. Integer arcu ligula, tristique
//                           vitae bibendum ac, ultrices id diam. Aliquam vel est
//                           scelerisque, volutpat felis id, cursus erat.
//                           Vestibulum consectetur, orci in convallis tempor,
//                           ligula augue ullamcorper nibh, id pulvinar lectus
//                           libero sed nulla. Ut egestas justo urna, et euismod
//                           nibh tristique sed. Pellentesque tristique enim
//                           egestas lorem imperdiet, id lobortis odio auctor.
//                           Suspendisse sodales sagittis libero. Vivamus in
//                           ullamcorper eros, a luctus mauris
//                         </Row>
//                         <Row className="lower-text">
//                           Nulla facilisi. Fusce viverra turpis vulputate eros
//                           faucibus, quis consectetur leo egestas. Proin placerat
//                           arcu ac dui placerat commodo. Curabitur mollis orci
//                           augue, vitae porttitor risus euismod eu. Ut nec
//                           posuere arcu. Vivamus pulvinar arcu et faucibus
//                           maximus. Duis malesuada iaculis dapibus. Mauris
//                           blandit rhoncus tellus rutrum tempor.
//                         </Row>
//                         <Row>
//                           In pretium nulla eget dolor molestie, non lobortis
//                           lorem tempus. Aenean ullamcorper urna non nisi tempor
//                           auctor. Suspendisse et ipsum bibendum, malesuada diam
//                           eget, congue erat. Duis lobortis elementum gravida.
//                           Sed ut dapibus arcu. Cras porttitor iaculis sapien eu
//                           fringilla. Cras in ligula urna. Vestibulum feugiat
//                           convallis felis ac dignissim. Duis placerat velit
//                           quam, vitae imperdiet elit maximus vel. Nam tincidunt
//                           ultricies ultrices. Nullam ac odio convallis dui
//                           volutpat luctus. Morbi luctus ornare pellentesque.
//                           Praesent rhoncus lectus id suscipit cursus. Morbi
//                           purus metus, tempor quis eleifend vitae, lacinia sit
//                           amet urna. Proin egestas ipsum quis tellus fermentum
//                           finibus et non urna.
//                         </Row> */}
//                                                 {/* `)} */}
//                                             </Column>
//                                             <Row className="doc-1">
//                                                 <div>
//                           <span>
//                             {" "}
//                               <img
//                                   className="attachment-logo"
//                                   src={require("../../assets/styles/images/Attachment.svg")}
//                               ></img>
//                           </span>
//                                                     <a href={Pdf} target="_blank">
//                                                         {" "}
//                                                         <span className="attachment-heading">
//                               Proposal Terms and Conditions.pdf
//                             </span>
//                                                     </a>
//                                                     <span>
//                             <img
//                                 className="external-image-proposal"
//                                 src={require("../../assets/styles/images/External-Link.svg")}
//                             ></img>
//                           </span>
//                                                 </div>
//                                             </Row>
//                                             <Row className="doc-1">
//                                                 <div>
//                           <span>
//                             {" "}
//                               <img
//                                   className="attachment-logo"
//                                   src={require("../../assets/styles/images/Attachment.svg")}
//                               ></img>
//                           </span>
//                                                     <a href={Doc} target="_blank">
//                                                         {" "}
//                                                         <span className="attachment-heading">
//                               About ABC Corporation.doc
//                             </span>
//                                                     </a>
//                                                     <span>
//                             <img
//                                 className="external-image-proposal2"
//                                 src={require("../../assets/styles/images/External-Link.svg")}
//                             ></img>
//                           </span>
//                                                 </div>
//                                             </Row>
//                                         </Grid>
//                                     </Grid>
//                                 </Row>
//                                 <Row></Row>
//                                 <Row></Row>
//                             </div>
//                         </div>
//                     </Column>
//                     <Column className="mobile-rightdiv">
//                         <Row>
//                             {!isButtonClicked ? (
//                                 <div className="recent-proposal-div-proposal2">
//                                     <div className="div2-heading">
//                                         Do you support this proposal?
//                                     </div>
//                                     <div className="button-div-support">
//                                         <button
//                                             onClick={() => {
//                                                 handleCloseDailog();
//                                                 castProposalVote(true);
//                                                 getVotePercentage();
//                                                 // castProposal();
//                                             }}
//                                             className="support-button"
//                                         >
//                                             Yes, I support
//                                         </button>
//                                     </div>
//                                     <div className="button-div-support">
//                                         {" "}
//                                         <button
//                                             onClick={() => {
//                                                 castProposalVote(false);
//                                                 getVotePercentage();
//                                                 // castProposal();
//                                             }}
//                                             className="reject-button"
//                                         >
//                                             No, I Reject
//                                         </button>
//                                     </div>
//                                 </div>
//                             ) : (
//                                 <div className="recent-proposal-div-proposal2">
//                                     <div className="div2-heading">Vote Breakdown</div>
//
//                                     <PieChart
//                                         className="piechart"
//                                         data={[
//                                             {
//                                                 title: "support",
//                                                 value: {support},
//                                                 color: "#3AB70D",
//                                             },
//                                             {title: "reject", value: {reject}, color: "#F43D3D"},
//                                         ]}
//                                     />
//                                     <div className="piediv">
//                                         <div className="display-flex">
//                                             <div className="box-support"></div>
//                                             <div className="spt">{support}</div>
//                                         </div>
//                                         <div className="display-flex">
//                                             <div className="box-reject"></div>
//                                             <div className="rjt">{reject}</div>
//                                         </div>
//                                     </div>
//                                     {/* <div className="button-div-support"><button onClick={handleCloseDailog} className="support-button">Yes, I support</button></div>
//                             <div className="button-div-support"> <button className="reject-button">No, I Reject</button></div> */}
//                                 </div>
//                             )}
//                         </Row>
//                         <Row>
//                             <div className="recent-proposal-div-proposal3">
//                                 <div className="div2-voters">
//                                     <div className="voter-heading">Voters</div>
//                                     <div className="voter-number">122 Votes</div>
//                                 </div>
//                                 <div className="griddiv-voter">
//                                     <TableBody>
//                                         {newaddress.map((row, index) => {
//                                             return (
//                                                 <TableRow className="table-mid-line">
//                                                     <Row className="table-between">
//                                                         <Row>
//                                                             <Column>
//                                                                 <TableCell style={{border: "none"}}>
//                                                                     <Row>
//                                     <span>
//                                       <img
//                                           className="voter-image"
//                                           src={row.image}
//                                       ></img>
//                                     </span>
//                                                                     </Row>
//                                                                 </TableCell>
//                                                             </Column>
//
//                                                             <Column>
//                                                                 <TableCell
//                                                                     className="mobile-div-right"
//                                                                     style={{border: "none", marginLeft: "20px"}}
//                                                                 >
//                                                                     <Row className="vote-address">
//                                                                         {shorten(row.name)}
//                                                                     </Row>
//                                                                 </TableCell>
//                                                             </Column>
//                                                         </Row>
//                                                         <Row>
//                                                             <Column>
//                                                                 <TableCell
//                                                                     className="mobile-div-right"
//                                                                     style={{border: "none"}}
//                                                                 >
//                                                                     <Row className="voter-number">{row.time}</Row>
//                                                                 </TableCell>
//                                                             </Column>
//                                                         </Row>
//                                                     </Row>
//                                                 </TableRow>
//                                             );
//                                         })}
//                                     </TableBody>
//                                 </div>
//                                 <div className="view-voter" onClick={handleClickVoter}>
//                                     View All Voters
//                                 </div>
//                                 {/* <div className="button-div-support"> <button className="reject-button">No, I Reject</button></div> */}
//                             </div>
//                         </Row>
//
//                         <Row>
//                             <div className="recent-proposal-div-proposal4">
//                                 <div className="div2-voters">
//                                     <div className="polling-heading">Polling Contract</div>
//                                     <div className="address-number">
//                                         0xF9be8F0945a???F8E5D
//                                         <span>
//                       <img
//                           className="external-image-proposal4"
//                           src={require("../../assets/styles/images/External-Link.svg")}
//                       ></img>
//                     </span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </Row>
//                         <div className="recent-add-div-proposal2"></div>
//                     </Column>
//                 </div>
//
//                 {/* <div className="recent-proposal-div-proposal"></div>
//             <div className="recent-add-div-proposal"></div> */}
//
//                 <div className="proposalpage-footer">
//                     <FooterComponent/>
//                 </div>
//             </Column>
//
//             {/* ------Delete Toast Message----- */}
//
//             <Snackbar
//                 open={open3}
//                 autoHideDuration={3000}
//                 anchorOrigin={{vertical: "top", horizontal: "center"}}
//                 onClose={handleClose3}
//             >
//                 <Alert severity="" className="alert">
//                     <div className="alert-div">
//             <span className="alert-span">
//               <img
//                   className="done-logo"
//                   src={require("../../assets/styles/images/DONE.svg")}
//               ></img>
//             </span>
//                         <span>
//               <div className="toast-message">
//                 Your vote is successfully casted
//               </div>
//               <div className="toast-address">
//                 Thank you for your contribution in adding transparency to XDC
//                 network
//               </div>
//             </span>
//                     </div>
//                 </Alert>
//             </Snackbar>
//         </div>
//     );
// }
