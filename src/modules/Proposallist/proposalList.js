import React, { useState, useEffect } from "react";
import { Column, Row } from "simple-flexbox";
import "../../assets/styles/custom.css";
import HeaderMain from "../header/header";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import DatePicker from "react-multi-date-picker";
import styled from "styled-components";
import "../Dashboard/datepicker.css";
import FooterComponent from "../footer/footerComponent";
import { history } from "../../managers/history";
import moment from "moment";
import Pagination from "react-js-pagination";
import Countdown from "react-countdown";

const useStyles = makeStyles((theme) => ({
  selectOptions: { backgroundColor: "white" },

  styleContent: {
    border: "0px",
    webkitAppearance: "none",
    outline: "0px",
    fontSize: "13px",
    color: "#2149b9",
    fontWeight: "600",

    marginLeft: "7px",
  },
  styleHead: {
    display: "flex",
    marginTop: "6px",
    fontSize: "14px",
    border: "0px",
    outline: "0px",
    height: "36px",
    width: "107px",
    fontFamily: "Inter",
    fontWeight: "600",
    // marginLeft: "8px",
    color: "#2A2A2A",
    width: "100%",
    paddingLeft: "8px",
  },
  row: {
    border: "1px solid #E3E7EB",
    height: "36px",
    borderRadius: "4px",
    width: "100%",
    maxWidth: "126px",
    marginRight: "11px",
  },
  root: {
    display: "flex",
    justifyContent: "center",
    maxWidth: "1280px",
    // position: "absolute",
    marginTop: "-114px",
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
  rowdiv: {
    width: "100%",
    alignItems: "center",
    // height: "53px",
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    justifyContent: "space-between",
    padding: "21px 24px 21px 22px",
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",

    "@media (min-width: 300px) and (max-width: 780px)": {
      display: "block !important",
      marginTop: "-3px",
    },
  },

  input: {
    color: "#909090",
    width: "100%",
    border: "1px solid #E3E7EB",
    height: "36px",
    opacity: "1",
    padding: "16px 30px",
    fontSize: "14px",
    maxWidth: "193px",
    background: "url(/images/Search.svg) no-repeat 1px",
    marginLeft: "10px",
    borderRadius: "4px",
    backgroundSize: "14px",
    backgroundPositionX: "9.5px",
    outline: "none",
    "@media (min-width: 300px) and (max-width: 780px)": {
      width: "100%",
      maxWidth: "610px",
    },
  },

  line: {
    width: "100%",
    marginTop: "0px",
    marginBottom: "0px",
  },
  mobilemedia: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    "@media (min-width: 300px) and (max-width: 767px)": {},
  },
  maincontainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  styleBlock: {
    display: "flex",
    marginTop: "6px",
    fontSize: "11px",
    border: "0px",
    outline: "0px",
    height: "30px",
    fontFamily: "Inter",
    fontWeight: "600",
  },
  stylePage: {
    border: "0px",
    outline: "0px",
    fontSize: "13px",
    // color: "#2A2A2A",
    fontWeight: "600",
    color: "#2149B9",
  },
}));
const Container = styled.div`
  display: flex;
  @media (min-width: 300px) and (max-width: 767px) {
    display: block;
  }
`;
const SecondContainer = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 300px) and (max-width: 780px) {
    display: block;
  }
`;

function ProgressBar() {
  return (
    <div>
      <ViewAllProposal name="deepali" />
    </div>
  );
}

export default function ViewAllProposal(props) {
  const backButton = () => {
    history.push("/");
  };

  const classes = useStyles();
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <div className="header-div-all">
        <HeaderMain />
      </div>

      <div className={classes.maincontainer}>
        <div className={classes.root}>
          <Grid item xs={12}>
            <div class="back-button-mobile"
              style={{ marginBottom: "11px", cursor: "pointer" }}
              onClick={backButton}
            >
              <img
                src="/images/Back-Arrow.svg"
                style={{
                  width: "20px",
                  marginRight: "8px",
                  marginBottom: "3px",
                }}
              />
              <Back>Back</Back>
            </div>
            <Row className={classes.rowdiv}>
              <Container>
                <Heading>All Proposals</Heading>

                <InputDiv>
                {/* <img src="images/search.svg"></img> */}
                  <Input
                    placeholder="Search"
                    className={classes.input}
                    type="text"
                    onKeyUp={console.log("hello")}
                    id="proposalInput"
                    onChange={(e) => {
                      props.searchingProposal(e);
                    }}
                  />
                </InputDiv>
              </Container>

              <SecondContainer>
                <SelectBox>
                  <Row className={classes.row}>
                    <Column className={classes.styleHead}>Status </Column>
                    <select
                      // className={classes.styleContent}
                      className="select-box"
                      onChange={props.onStatusChange}
                    >
                      <option>All</option>
                      <option value={"Open"}>Open</option>
                      <option value={"Closed"}>Closed</option>
                    </select>
                  </Row>
                </SelectBox>
                <DatePickerDiv>
                  <DateSpan>Date</DateSpan>
                  <DatePicker
                    arrow={true}
                    format="D MMM YYYY"
                    onChange={props.onDateChange}
                    value={value}
                    range
                  />
                  <ArrowImg src="/images/XDC-Dropdown.svg" />
                </DatePickerDiv>
              </SecondContainer>
            </Row>

            <Div>
              {props.state.proposalsList &&
              props.state.proposalsList.length >= 1 ? (
                props.state.proposalsList.map((data) => {
                  console.log(data, "data===");
                  let title = data.proposalTitle;
                  let status = data.endDate > Date.now() ? "Open" : "Closed";
                  let formatedTime = moment(data.createdOn).format("LL");
                  const yesVotes = data.yesVotes.length;
                  const noVotes = data.noVotes.length;
                  const yesVotesWidth = (100 * yesVotes) / (yesVotes + noVotes);
                  const noVotesWidth = (100 * noVotes) / (yesVotes + noVotes);

                  if (status === "Closed") {
                    if (yesVotesWidth >= 66) status = "Passed";
                    else status = "Failed";
                  }

                  return (
                    <MainContainer isTextArea={true}>
                      <Column>
                        <RowSpacing>
                          <Posted>Posted on &nbsp;{formatedTime}</Posted>
                          <TimeRemainingDiv>
                            {status === "Open" ? (
                              <>
                                <Row>
                                  <span style={{ marginRight: "5px" }}>
                                    <img
                                      className="m-b-4"
                                      src={require("../../assets/styles/images/Time-Active.svg")}
                                    />
                                  </span>
                                  <Span>
                                    <Countdown
                                      className="count-down"
                                      date={data.endDate}
                                    />
                                    &nbsp;Remaining
                                  </Span>
                                </Row>
                                <Row className="justify-content-end">
                                  <div
                                    className="details"
                                    onClick={() =>
                                      props.proposalRedirect(
                                        data.pollingContract
                                      )
                                    }
                                  >
                                    Details
                                  </div>
                                </Row>
                              </>
                            ) : (
                              <>
                                <ClockImage src="/images/Time-Inactive.svg" />
                                <PollEnded>Poll Ended</PollEnded>
                              </>
                            )}
                          </TimeRemainingDiv>
                        </RowSpacing>
                        <RowSpacing>
                          <div className={classes.mobilemedia}>
                            <Content>{title}</Content>
                            {status === "Open" ? (
                              ""
                            ) : (
                              <PositionDivLine>
                                <BarLine>
                                  <RedLine
                                    style={{ width: noVotesWidth + "%" }}
                                  ></RedLine>
                                  <GreenLine
                                    style={{ width: yesVotesWidth + "%" }}
                                  ></GreenLine>
                                </BarLine>
                              </PositionDivLine>
                            )}
                          </div>
                        </RowSpacing>
                        <Media_for_container>
                          <Container>
                            <Status>Status:&ensp;</Status>
                            <Open>{status}2</Open>
                          </Container>

                          <MobileDivLine>
                            {status === "Open" ? (
                              ""
                            ) : (
                              <BarLine>
                                <GreenLine
                                  style={{ width: yesVotesWidth + "%" }}
                                ></GreenLine>
                                <RedLine
                                  style={{ width: noVotesWidth + "%" }}
                                ></RedLine>
                              </BarLine>
                            )}
                          </MobileDivLine>
                        </Media_for_container>
                        <DisplayNone>
                          <Container>
                            <Status>Status:&ensp;</Status>
                            {status == "Open" ? (
                              <Open>{status}</Open>
                            ) : status === "Passed" ? (
                              <Passed>{status}</Passed>
                            ) : (
                              <Failed>{status}</Failed>
                            )}
                          </Container>

                          {status === "Open" ? (
                            ""
                          ) : (
                            <NumberOfVotes>
                              {Number(yesVotes) + Number(noVotes)} votes
                            </NumberOfVotes>
                          )}
                        </DisplayNone>
                        <RowSpacing>
                          <MobileResponsive>
                            <ClockImage src="/images/Time-Inactive.svg" />
                            <PollEnded></PollEnded>
                          </MobileResponsive>
                        </RowSpacing>
                      </Column>
                    </MainContainer>
                  );
                })
              ) : (
                <div className="display-flex justify-content-center p-t-50">
                  {" "}
                  No Record found
                </div>
              )}
            </Div>
            <div className="display-flex justify-content-end p-t-15">
              <Pagination
                prevPageText="Back"
                nextPageText="Next"
                hideFirstLastPages
                linkClassNext="table-pagination"
                linkClassPrev="table-pagination"
                activeLinkClass="fc-black"
                linkClass="table-pagination"
                activePage={props.state.activePage}
                itemsCountPerPage="10"
                pageRangeDisplayed="5"
                totalItemsCount={props.state.totalProposalsCount}
                onChange={props.handlePageChange}
              />
            </div>

           
          </Grid>

          
        </div>
        
      </div>
      <div >
        <FooterComponent />
      </div>
    </div>
  );
}
const ArrowImg = styled.img`
  margin-top: -2px;
  margin-right: 7px;
  width: 5%;
  margin-left:-5px;
`;
const DateSpan = styled.span`
  letter-spacing: 0px;
  color: #2a2a2a;
  font-size: 14px;
  font-family: "Inter";
  font-weight: 600;
  margin-left: 12px;
`;
const DatePickerDiv = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #e3e7eb;
  border-radius: 4px;
  width: 237px;
  height: 36px;
  padding-top: 1px;
}

  input:focus {
    border: none !important;
  }

  @media (min-width: 400px) and (max-width: 780px) {
    width: 100%;
    max-width: 230px;
    margin-top: 10px;
  }
`;
const Input = styled.input`
  font-size: 12px;
  font-family: "Inter";
  color: #909090;
  font-weight: 400;
`;
const MainContainer = styled.div`
  padding: 21px 24px 21px 22px;
  @media (min-width: 300px) and (max-width: 767px) {
    padding: 20px 8px 17px 8px;
  }
  // border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: ${(props) =>
    props.isTextArea ? `1px solid rgba(0, 0, 0, 0.1);` : `unset`};
  // border-radius: 6px;

  border-radius: ${(props) => (props.isTextArea ? `6px;` : `unset`)};
`;

const RowSpacing = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;
const Media_for_container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  @media (min-width: 767px) and (max-width: 2000px) {
    display: none;
  }
`;
const DisplayNone = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  @media (min-width: 300px) and (max-width: 767px) {
    display: none;
  }
`;
const Back = styled.span`
  text-align: left;
  font-family: "Inter", sans-serif;
  font-size: 17px;
  color: #ffffff;
`;
const BackButton = styled.button`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #e3e7eb;
  border-radius: 4px;
  text-align: left;
  font-size: 12px;
  font-family: "Inter", sans-serif;
  letter-spacing: 0px;
  color: #909090;
`;
const PagingDiv = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 35px;
  margin-bottom: 20px;
  @media (min-width: 300px) and (max-width: 767px) {
    display: block;
  }
`;
const Span = styled.span`
  text-align: left;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0px;
  color: #3b3b3b;
  opacity: 1;
  display: flex;
  padding-left: 8px;
  padding-top: 2px;
`;
const Show = styled.span`
  display: flex;
  text-align: left;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0px;
  color: #3b3b3b;
  align-items: center;
  margin-right: 10px;
`;
const Block = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #e3e7eb;
  border-radius: 4px;

  width: 25px;
  height: 22px;
  margin-left: 8px;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 12px;
`;

const NextBlock = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #e3e7eb;
  border-radius: 4px;
  opacity: 1;
  width: 43px;
  height: 22px;
  margin-left: 8px;
`;
const Proposals = styled.span`
  display: flex;
  text-align: left;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0px;
  color: #3b3b3b;
  opacity: 1;
  align-items: center;
  margin-left: 8px;
  white-space: nowrap;
`;

const TimeRemainingDiv = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`;
const MobileResponsive = styled.div`
  @media (min-width: 767px) {
    display: none;
  }
  @media (min-width: 300px) and (max-width: 767px) {
    display: block;
  }
`;
const BarLine = styled.div`
  width: 220px;
  height: 1px;

  display: flex;
  @media (min-width: 300px) and (max-width: 767px) {
    width: 85px;
  }
`;
const GreenLine = styled.div`
  background-color: #3ab70d;
  height: 3px;
  @media (min-width: 300px) and (max-width: 767px) {
    width: 50%;
  }
`;
const RedLine = styled.div`
  background-color: #f43d3d;
  height: 3px;
  @media (min-width: 300px) and (max-width: 767px) {
    width: 50%;
  }
`;
const SelectBox = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 300px) and (max-width: 1038px) {
    display: block;
  }
  @media (min-width: 300px) and (max-width: 780px) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
const Failed = styled.span`
  font-family: "Inter", sans-serif;

  font-size: 14px;
  letter-spacing: 0px;
  opacity: 1;
  color: #f43d3d;
  whitespace: "nowrap";
`;
const InputDiv = styled.div`
  display: flex;
  @media (min-width: 300px) and (max-width: 780px) {
    display: block;
    margin-top: 10px;
    margin-left: -9px;
  }
`;

const PositionDivLine = styled.div`
  margin-top: 15px;
  @media (min-width: 300px) and (max-width: 767px) {
    display: none;
  }
`;
const MobileDivLine = styled.div`
  @media (min-width: 767px) and (max-width: 2000px) {
    display: none;
  }
  @media (min-width: 300px) and (max-width: 767px) {
    margin-top: 7px;
  }
`;
const PollEnded = styled.span`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 13px;
  text-align: left;
  letter-spacing: 0px;
  color: #cecece;
  opacity: 1;
  whitespace: "nowrap";
`;
const ClockImage = styled.img`
  margin-right: 3px;
  width: 14px;
`;
const Div = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  // border: 1px solid #e3e7eb;
  height: auto;
  border-radius: 0 0 10px 10px;
  border-top: 1px solid #e3e7eb;
  border-left: 1px solid #e3e7eb;
  border-right: 1px solid #e3e7eb;
`;
const Posted = styled.span`
  text-align: left;
  font-family: "Inter", sans-serif;

  font-size: 14px;
  letter-spacing: 0px;
  color: #909090;
  opacity: 1;
  whitespace: "nowrap";
  @media (min-width: 300px) and (max-width: 767px) {
    font-size: 12px;
  }
`;
const Time = styled.span`
  text-align: left;
  letter-spacing: 0px;
  color: #909090;
  opacity: 1;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 14px;
  whitespace: "nowrap";
  @media (min-width: 300px) and (max-width: 767px) {
    font-size: 12px;
  }
`;
const Button = styled.button`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #2049b9;
  border-radius: 4px;
  opacity: 1;
  color: var(--unnamed-color-2149b9);
  text-align: center;
  letter-spacing: 0px;
  color: #2149b9;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 14px;
  whitespace: "nowrap";
  width: 100%;
  max-width: 90px;
  margin-top: 8px;
  @media (min-width: 250px) and (max-width: 767px) {
    font-size: 12px;
    width: 100%;
    max-width: 65px;
    height: 25px;
  }
`;
const Content = styled.span`
  color: var(--unnamed-color-2a2a2a);
  text-align: left;
  whiteSpace: "nowrap",
  letter-spacing: 0px;
  color: #2a2a2a;
  opacity: 1;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 18px;
  @media (min-width: 300px) and (max-width: 767px) {
    font-size: 13px;
  }
`;
const Status = styled.span`
  font-family: "Inter", sans-serif;

  font-size: 14px;
  letter-spacing: 0px;
  opacity: 1;
  color: #3b3b3b;

  whitespace: "nowrap";
  @media (min-width: 300px) and (max-width: 767px) {
    font-size: 12px;
  }
`;
const Open = styled.span`
  color: var(--unnamed-color-2149b9);
  letter-spacing: 0px;
  color: #2149b9;
  whitespace: "nowrap";
  font-family: "Inter", sans-serif;

  font-size: 14px;
  @media (min-width: 300px) and (max-width: 767px) {
    font-size: 12px;
  }
`;
const TimerImg = styled.img`
  margin-right: 10px;
`;
const Passed = styled.span`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  letter-spacing: 0px;
  color: #3ab70d;
  whitespace: "nowrap";
  @media (min-width: 300px) and (max-width: 767px) {
    font-size: 12px;
  }
`;
const NumberOfVotes = styled.span`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #2a2a2a;
  @media (min-width: 300px) and (max-width: 767px) {
    font-size: 12px;
  }
`;
const Heading = styled.span`
  white-space: nowrap;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 22px;
  letter-spacing: 0px;
  color: #2a2a2a;
  opacity: 1;
  box-shadow: none;
  color: var(--unnamed-color-2a2a2a);
  @media (min-width: 300px) and (max-width: 767px) {
    font-size: 18px;
  }
`;
