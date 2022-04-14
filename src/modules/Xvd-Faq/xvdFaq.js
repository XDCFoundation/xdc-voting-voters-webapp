// import React from "react";
// import styled from "styled-components";
// import { Row, Column } from "simple-flexbox";
// import HeaderMain from "../header/header";
// import "../../assets/styles/custom.css";
// import { makeStyles } from "@material-ui/core/styles";
// import Grid from "@material-ui/core/Grid";
// import FooterComponent from "../footer/footerComponent";
// import { ClickAwayListener } from "@material-ui/core";
// import { useHistory } from "react-router";
// import { history } from "../../managers/history";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     justifyContent: "center",
//     maxWidth: "1280px",
//     // position: "absolute",
//     marginTop: "-104px",
//     marginBottom: "40px",
//     zIndex: "1",
//     top: "145px",

//     width: "100%",
//     "@media (min-width: 300px) and (max-width: 567px)": {
//       maxWidth: "300px",
//     },
//     "@media (min-width: 567px) and (max-width: 767px)": {
//       maxWidth: "500px",
//     },
//     "@media (min-width: 767px) and (max-width: 1440px)": {
//       maxWidth: "95%",
//     },
//   },
//   rowdiv: {
//     width: "100%",
//     alignItems: "center",
//     height: "53px",
//     background: "#FFFFFF 0% 0% no-repeat padding-box",
//     borderRadius: "6px",
//     opacity: "1",
//     justifyContent: "space-between",
//   },
//   line: {
//     width: "100%",
//     marginTop: "0px",
//     marginBottom: "0px",
//   },
//   maincontainer: {
//     display: "flex",
//     justifyContent: "center",
//     width: "100%",
//   },
// }));

// export default function Xvdfaq() {
//   const histor = useHistory();
//   const backButton = () => {
//     //histor.goBack();
//     history.push("/");
//   };
//   const Click = () => {
//     // window.scrollerTop(0,0);
//   };
//   function scrollWindow() {
//     window.scrollTo(0, 0);
//   }
//   React.useEffect(() => {
//     let address = [
//       {
//         heading: "What is XDC Governance?",
//         paragraph:
//           "XDC Governance is a reliable decentralized blockchain-based web app facilitating on-chain voting to XDC stakeholders for extensive decision-making.",
        
//       },
//       {
//         heading: "Do I need to log in to access the dApp?",
//         paragraph:
//           "No, you don’t need to signup or log in to access XDC Governance. However, you’ll need to connect your XDCPay wallet to create proposals and participate in voting.",
        
//       },
//       {
//         heading: "How to create a proposal?",
//         paragraph:
//           "Once you connect your wallet, click on the Create Proposal button. Enter the required proposal details and submit your proposal.",
//       },
//       {
//         heading: "Who can cast votes on proposals?",
//         paragraph:
//           "Only the whitelisted voters can cast their votes on proposals.",
//       },
//       {
//         heading: "How can I become a voter?",
//         paragraph:
//           "Admin will request you to become a voter and add your XDCPay wallet address as a whitelisted voter identity.",
//       },
//       {
//         heading: "Can I view the list of voters for a particular proposal?",
//         paragraph:
//           "Yes. Click on the Details button of the particular proposal you want to view the voters’ list. Now, click on “View All Voters” to check out the list of all voters.",
//       },
//       {
//       heading:"Will I get alerts for every new proposal created on-chain?",
//       paragraph:
//       "Yes. You need to subscribe by sharing your email address and you’ll never miss any updates from XDC Governance.",
//     }
//     ];

//     setAddress(
//       address.map((object) => {
//         return {
//           heading: object.heading,
//           paragraph: object.paragraph,
//           subparagraphone: object.subparagraphone,
//         };
//       })
//     );
//   }, []);

//   const [address, setAddress] = React.useState([]);

//   const scrollerTop = (e) => {
//     e.preventDefault();
//     // window.scrollTo(0,1)
//     // e.stopPropagation();
//     // e.nativeEvent.stopImmediatePropagation();
//     // return false;
//   };
//   const onchangeDropdown = (e) => {
//     window.location.href = e.target.value;
//   };

//   const classes = useStyles();
//   return (
//     <div>
//       <div className="header-div-all">
//         <HeaderMain />
//       </div>

//       <div className={classes.maincontainer}>
//         <div className={classes.root}>
//           <Grid item xs={12}>
//             <div style={{ marginBottom: "26px" }}>
//               <img
//                 onClick={backButton}
//                 src="/images/Back-Arrow.svg"
//                 style={{ width: "15px", marginRight: "8px", cursor: "pointer" }}
//               />
//               <Back>Back</Back>
//             </div>
//             <Spacing>
//               <Container>
//                 <Heading>FAQs</Heading>
//               </Container>
//             </Spacing>

//             <Row
//               class="xdc-border-top"
//               style={{
//                 border: ".5px solid #e3e7eb",
//                 borderRadius: "0% 0% 6px 6px",
//               }}
//             >
//               <Secondcontainer>
//                 <Div>
//                   {address.map((data, index) => {
//                     return (
//                       <SideContainer>
//                         <Column id={index}>
//                           <Row>
//                             <Heading_One id="section1">
//                               {data.heading}
//                             </Heading_One>
//                           </Row>

//                           <Para_One id="section1">{data.paragraph}</Para_One>
//                           <SubparagraphOne>
//                             {data.subparagraphone}
//                           </SubparagraphOne>

//                           <SubparagraphTwo>
//                             {data.subparagraphTwo}
//                           </SubparagraphTwo>
//                           <br />
//                         </Column>
//                       </SideContainer>
//                     );
//                   })}
//                 </Div>
//               </Secondcontainer>
//             </Row>
//           </Grid>
//         </div>
//       </div>
//       <div>
//         <FooterComponent />
//       </div>
//     </div>
//   );
// }
// const SectionDiv = styled.div`
//   margin-top: 12px;
// `;
// const Anchor = styled.a`
//   text-decoration: none !important;
//   color: black;
//   //   a:active {
//   //     color: blue;
//   // }
//   // a:visited {color:#0000FF;}
//   // a[tabindex]:focus {
//   //   color:blue;
//   //   outline: none;
//   // }
//   &:hover {
//     // color: unset !important;
//     text-decoration: underline;
//   }
// `;
// const Back = styled.span`
//   text-align: left;
//   font-family: "Inter", sans-serif;
//   font-size: 17px;
//   color: #ffffff;
// `;
// const SubparagraphOne = styled.span`
//   text-align: left;
//   font: normal normal normal 15px/19px Inter;
//   letter-spacing: 0px;
//   color: #2a2a2a;
//   opacity: 1;
// `;
// const SubparagraphTwo = styled.span`
//   text-align: left;
//   font: normal normal normal 15px/19px Inter;
//   letter-spacing: 0px;
//   color: #2a2a2a;
//   opacity: 1;
// `;

// const Row__ = styled.div`
//   display: flex;
//   flex-flow: row nowrap;
//   text-align: right;
//   padding: 20px;
// `;
// const Heading_One = styled.span`
//   color: var(--unnamed-color-2a2a2a);
//   text-align: left;
//   font: normal normal 600 26px/31px Inter;
//   letter-spacing: 0px;
//   color: #2a2a2a;
//   opacity: 1;
//   margin-bottom: 12px;
//   margin-top: 12px;
// `;
// const Para_One = styled.span`
//   color: var(--unnamed-color-2a2a2a);
//   text-align: left;
//   font: normal normal normal 15px/19px Inter;
//   letter-spacing: 0px;
//   color: #2a2a2a;
//   opacity: 1;
//   margin-bottom: 12px;
//   margin-top: 12px;
// `;
// const SideContainer = styled.div``;
// const Sidemenu = styled.div`
//   width: 100%;
//   max-width: 320px;
//   border-right: 1px solid #e3e7eb;
//   background: #ffffff 0% 0% no-repeat padding-box;
//   position: sticky;
//   top: 0;
//   display: flex;
//   justify-content: flex-end;
//   @media (min-width: 200px) and (max-width: 1024px) {
//     display: none;
//   }
// `;
// const H1 = styled.span`
//   font-weight: 600;
//   font-family: "Inter", sans-serif !important;
//   white-space: nowrap;
//   text-decoration:none;
//   font-size: 17px;

// `;
// const H2 = styled.span`
//   font-weight: 600;
//   font-family: "Inter", sans-serif !important;
//   // margin-top: 20px;
//   white-space: nowrap;
//   text-decoration:none;
//   font-size: 17px;

// `;
// const H3 = styled.span`
//   font-weight: 600;
//   font-family: "Inter", sans-serif !important;
//   // margin-top: 20px;
//   white-space: nowrap;
//   text-decoration:none;
//   font-size: 17px;

// `;
// const H4 = styled.span`
//   font-weight: 600;
//   font-family: "Inter", sans-serif !important;
//   // margin-top: 20px;
//   white-space: nowrap;
//   text-decoration:none;
//   font-size: 17px;

// `;
// const H5 = styled.span`
//   font-weight: 600;
//   font-family: "Inter", sans-serif !important;
//   // margin-top: 20px;
//   white-space: nowrap;
//   font-size: 17px;

// `;

// const H6 = styled.span`
//   font-weight: 600;
//   font-family: "Inter", sans-serif !important;
//   // margin-top: 20px;
//   white-space: nowrap;
//   font-size: 17px;

// `;

// const Spacing = styled.div`
//   display: flex;
//   flex-flow: row nowrap;
//   justify-content: space-between;
//   width: 100%;
//   height: 53px;
//   border-top-left-radius: 4px;
//   border-top-right-radius: 4px;
//   border-bottom: 1px solid #e3e7eb;
//   background: #ffffff 0% 0% no-repeat padding-box;
//   align-items: center;
//   padding: 11px 24px;

//   @media (min-width: 300px) and (max-width: 767px) {
//     display: block;
//   }
// `;
// const Container = styled.div`
//   display: flex;
//   word-break: break-all;
//   width: 100%;
//   align-items: center;
//   max-width: 435px;
// `;
// const Secondcontainer = styled.div`
//   display: flex;
//   height: 770px;
//   float: left;
//   width: 100%;
//   overflow-y: auto;
//   background: #ffffff 0% 0% no-repeat padding-box;
//   border-radius: 0% 0% 6px 6px;
// `;

// const Div = styled.div`
//   padding: 25px;
// `;

// const Heading = styled.span`
//   white-space: nowrap;
//   font: normal normal 600 22px/26px Inter;

//   color: #2a2a2a;

//   box-shadow: none;
//   @media (max-width: 767px) {
//     font-size: 16px;
//   }
// `;

import React, { useState } from "react";
import FaqItem from "./xvdFaqItem";
import { faqsList } from "../../constants";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";
import HeaderMain from "../header/header";
import "../../assets/styles/custom.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FooterComponent from "../footer/footerComponent";
import { history } from "../../managers/history";

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
      maxWidth: "95%",
    },
  },
  rowdiv: {
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
  maincontainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
}));

export default function Faqs(props) {
  const backButton = () => {
    history.push("/");
  };

  const classes = useStyles();

  return (

    <div>
      <div className="header-div-all">
        <HeaderMain />
      </div>
      <div className={classes.maincontainer}>
        <div className={classes.root}>
          <Grid item xs={12}>
            <div style={{ marginBottom: "26px" }}>
              <img
                onClick={backButton}
                src="/images/Back-Arrow.svg"
                style={{ width: "15px", marginRight: "8px", cursor: "pointer" }}
              />
              <Back>Back</Back>
            </div>
            <Spacing>
              <Container>
                <Heading>FAQs</Heading>
              </Container>
            </Spacing>

            <Row
              class="xdc-border-top"
              style={{
                border: ".5px solid #e3e7eb",
                borderRadius: "0% 0% 6px 6px",
              }}
            >
              {/* <Secondcontainer> */}
                {/* <Div > */}

                <div className="app-container">
      <div className="faqs-container">
        <div id="Heading-section">
          <div className="heading-faq"></div>
        </div>
        <ul className="ui-margin">
          <div className="faqs-list">
            {faqsList.map((eachFaq) => (
              <FaqItem key={eachFaq.id} faqDetails={eachFaq} />
            ))}
          </div>
        </ul>
      </div>
    </div>
                 
                {/* </Div> */}
              {/* </Secondcontainer> */}
            </Row>
          </Grid>
        </div>
      </div>
      <div>
        <FooterComponent />
      </div>
    </div>



    

  );
}

const SectionDiv = styled.div`
  margin-top: 12px;
`;
const Anchor = styled.a`
  text-decoration: none !important;
  color: black;

  &:a:focus {
    outline: none;
    border-color: red;
  }

  // &:focus{
  //   color: #0052cc !important;
  // }
  

  // a:visited {color:#0000FF;}
  // a[tabindex]:focus {
  //   color:blue;
  //   outline: none;
  // }
  &:hover {
    // color: unset !important;
    text-decoration: underline;
  }
`;


const Back = styled.span`
  text-align: left;
  font-family: "Inter", sans-serif;
  font-size: 17px;
  color: #ffffff;
`;
const SubparagraphOne = styled.span`
  text-align: left;
  font: normal normal normal 15px/19px Inter;
  letter-spacing: 0px;
  color: #2a2a2a;
  opacity: 1;
  margin-bottom:10px;
  // display: list-item;
  //   margin-left: 20px;
`;
const SubparagraphTwo = styled.span`
  text-align: left;
  font: normal normal normal 15px/19px Inter;
  letter-spacing: 0px;
  color: #2a2a2a;
  opacity: 1;
  margin-bottom:10px;
  // display: list-item;
  //   margin-left: 20px;
`;
const SubparagraphThree = styled.span`
  text-align: left;
  font: normal normal normal 15px/19px Inter;
  letter-spacing: 0px;
  color: #2a2a2a;
  opacity: 1;
  margin-bottom:10px;
  // display: list-item;
  //   margin-left: 20px;
`;
const SubparagraphFour = styled.span`
  text-align: left;
  font: normal normal normal 15px/19px Inter;
  letter-spacing: 0px;
  color: #2a2a2a;
  opacity: 1;
  margin-bottom:10p;
`;
const SelectBoxDiv = styled.div`
  border-right: 1px solid rgb(227, 231, 235);
  border-left: 1px solid rgb(227, 231, 235);
`;

const SelectContainer = styled.div`
  // margin-left: 15px;
  // @media (min-width: 768px) and (max-width: 1024px) {
  //   display: none;
  // }
  @media (min-width: 1024px) {
    display: none;
  }
`;
const SelectOption = styled.select`
  border-radius: 4px;
  padding: 8px;
  background-color: #ffffff;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  font-size: 15px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #e3e7eb;
  border-radius: 4px;
  opacity: 1;
  @media (min-width: 360px) and (max-width: 767px) {
    width: 90%;
    margin-left: 15px;
    margin-bottom: 10px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    margin-top: 15px;
    margin-left: 15px;
    margin-bottom: 10px;
  }
`;

const Row__ = styled.div`
  display: flex;
  flex-flow: row nowrap;
  text-align: right;
  padding: 20px;
`;
const Heading_One = styled.span`
  color: var(--unnamed-color-2a2a2a);
  text-align: left;
  font: normal normal 600 26px/31px Inter;
  letter-spacing: 0px;
  color: #2a2a2a;
  opacity: 1;
  margin-bottom: 12px;
  margin-top: 12px;
`;
const Para_One = styled.span`
  color: var(--unnamed-color-2a2a2a);
  text-align: left;
  font: normal normal normal 15px/19px Inter;
  letter-spacing: 0px;
  color: #2a2a2a;
  opacity: 1;
  margin-bottom: 12px;
  margin-top: 12px;
`;
const SideContainer = styled.div``;
const Sidemenu = styled.div`
  width: 100%;
  max-width: 320px;
  border-right: 1px solid #e3e7eb;
  background: #ffffff 0% 0% no-repeat padding-box;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: flex-end;
  @media (min-width: 200px) and (max-width: 1024px) {
    display: none;
  }
`;
const H1 = styled.span`
  font-weight: 600;
  font-family: "Inter", sans-serif !important;
  white-space: nowrap;
  text-decoration:none;
  font-size: 17px;
`;
const H2 = styled.span`
  font-weight: 600;
  font-family: "Inter", sans-serif !important;
  // margin-top: 20px;
  white-space: nowrap;
  text-decoration:none;
  font-size: 17px;
`;
const H3 = styled.span`
  font-weight: 600;
  font-family: "Inter", sans-serif !important;
  // margin-top: 20px;
  white-space: nowrap;
  text-decoration:none;
  font-size: 17px;
`;
const H4 = styled.span`
  font-weight: 600;
  font-family: "Inter", sans-serif !important;
  // margin-top: 20px;
  white-space: nowrap;
  text-decoration:none;
  font-size: 17px;
`;
const H5 = styled.span`
  font-weight: 600;
  font-family: "Inter", sans-serif !important;
  // margin-top: 20px;
  white-space: nowrap;
  font-size: 17px;
`;

const H6 = styled.span`
  font-weight: 600;
  font-family: "Inter", sans-serif !important;
  // margin-top: 20px;
  white-space: nowrap;
  font-size: 17px;
`;

const Spacing = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
  height: 53px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom: 1px solid #e3e7eb;
  background: #ffffff 0% 0% no-repeat padding-box;
  align-items: center;
  padding: 11px 24px;

  @media (min-width: 300px) and (max-width: 767px) {
    display: block;
  }
`;
const Container = styled.div`
  display: flex;
  word-break: break-all;
  width: 100%;
  align-items: center;
  max-width: 435px;
`;
const Secondcontainer = styled.div`
  /* display: flex; */
  // height: 770px;
  float: left;
  width: 100%;
  overflow-y: auto;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 0% 0% 6px 6px;
`;

const Div = styled.div`
  padding: 25px;
`;

const Heading = styled.span`
  white-space: nowrap;
  font: normal normal 600 22px/26px Inter;

  color: #2a2a2a;

  box-shadow: none;
  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

