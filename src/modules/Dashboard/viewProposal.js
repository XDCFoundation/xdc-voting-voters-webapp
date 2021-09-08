import React, { useState } from "react";
import { Column, Row } from "simple-flexbox";
import "../../assets/styles/custom.css";
import HeaderMain from "../header/header";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import DatePicker from "react-multi-date-picker";
import styled from "styled-components";
import "./datepicker.css";
import FooterComponent from "../footer/footerComponent";

const useStyles = makeStyles((theme) => ({
  selectOptions: { backgroundColor: "white" },

  styleContent: {
    border: "0px",
    outline: "0px",
    fontSize: "12px",
    color: "#707070",
    textAlignLast: "right",
    marginLeft: "44px",
  },
  styleHead: {
    display: "flex",
    marginTop: "6px",
    fontSize: "12px",
    border: "0px",
    outline: "0px",
    height: "30px",
  },
  row: {
    border: "1px solid #E3E7EB",
    height: "30px",
    borderRadius: "4px",
    width: "100%",
    maxWidth: "126px",
    marginRight: "10px",
  },
  root: {
    display: "flex",
    justifyContent: "center",
    maxWidth: "970px",
    position: "absolute",
    top: "147px",
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
  rowdiv: {
    width: "100%",
    alignItems: "center",
    height: "53px",
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    justifyContent: "space-between",
    padding: "24px",
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",
  },

  input: {
    width: "100%",
    height: "30px",
    background: "url(/images/Search.svg) no-repeat 1px",
    border: "solid 1px #aab1ff",
    color: "#09184b",
    backgroundSize: "14px",
    paddingLeft: "20px",
    border: "1px solid #E3E7EB",
    borderRadius: "4px",
    opacity: 1,
    fontSize: "11px",
    marginLeft: "10px",
    maxWidth: "140px",
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
}));
const Container = styled.div`
  display: flex;
`;
const SecondContainer = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 300px) and (max-width: 1038px) {
    display: none;
  }
`;

export default function ViewAllProposal() {
  React.useEffect(() => {
    let address = [
      {
        date: "Posted on 24 June 2021",
        name: "Adding more features to XDC Explorer 2.0",
        status: "Passed",
        poll: "Poll Ended",
        bar: "Line",
        vote: "145 votes",
        id: 2,
        time: "5 min ago",
      },
      {
        date: "Posted on 24 June 2021",
        name: "Relaunch of XinFin.org website",
        status: "Passed",
        poll: "Poll Ended",
        bar: "Line",
        vote: "89 votes",
        id: 3,
        time: "5 min ago",
      },
      {
        date: "Posted on 24 June 2021",
        name: "Launching NFT Marketplace to increase circulation of XDC",
        status: "Passed",
        poll: "Poll Ended",
        bar: "Line",
        vote: "89 votes",
        id: 4,
        time: "5 min ago",
      },
      {
        date: "Posted on 24 June 2021",
        name: "Partnership with Circle Stable Coin",
        status: "Passed",
        poll: "Poll Ended",
        bar: "Line",
        vote: "89 votes",
        id: 5,
        time: "5 min ago",
      },
      {
        date: "Posted on 24 June 2021",
        name: "Adding more features to XDC Explorer 2.0",
        status: "Passed",
        poll: "Poll Ended",
        bar: "Line",
        vote: "145 votes",
        id: 6,
        time: "5 min ago",
      },
    ];

    setAddress(
      address.map((object) => {
        return {
          date: object.date,
          name: object.name,
          status: object.status,
          poll: object.poll,
          bar: object.bar,
          vote: object.vote,
          id: object.id,
          time: object.time,
        };
      })
    );
  }, []);

  const [address, setAddress] = React.useState([]);

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
            <Row className={classes.rowdiv}>
              <Container>
                <Heading>All Proposals</Heading>

                <InputDiv>
                  <input
                    placeholder="Search"
                    className={classes.input}
                    type="text"
                  />
                </InputDiv>
              </Container>

              <SecondContainer>
                <SelectBox>
                  <Row className={classes.row}>
                    <Column className={classes.styleHead}>Status </Column>
                    <select className={classes.styleContent}>
                      <option>All</option>
                      <option>On</option>
                      <option>Off</option>
                    </select>
                  </Row>
                </SelectBox>

                <DatePicker onChange={onChange} value={value} range />
              </SecondContainer>
            </Row>

            <Div>
              <MainContainer>
                <Column>
                  <RowSpacing>
                    <Posted>Posted on 24 June 2021</Posted>
                    <TimeRemainingDiv>
                      <TimerImg src="/images/Time-Active.svg" />

                      <Time>01:50:48 Remaining </Time>
                    </TimeRemainingDiv>
                  </RowSpacing>
                  <RowSpacing>
                    <Content>
                      XDC-ABC Bootstrapping Partnership Proposal
                    </Content>

                    <Button>Details</Button>
                  </RowSpacing>
                  <Container>
                    <Status>Status : </Status>
                    <Passed>Passed</Passed>
                  </Container>
                  <SecondContainer>
                    <MobileResponsive>
                      <TimerImg src="/images/Time-Active.svg" />

                      <Time>01:50:48 Remaining</Time>
                    </MobileResponsive>
                  </SecondContainer>
                </Column>
              </MainContainer>
              {address.map((data) => {
                return (
                  <MainContainer>
                    <Column>
                      <RowSpacing>
                        <Posted>{data.date}</Posted>
                        <TimeRemainingDiv>
                          <ClockImage src="/images/Time-Inactive.svg" />
                          &nbsp;
                          <PollEnded>{data.poll}</PollEnded>
                        </TimeRemainingDiv>
                      </RowSpacing>
                      <RowSpacing>
                        <div className={classes.mobilemedia}>
                          <Content>{data.name}</Content>
                          <PositionDivLine>
                            <BarLine>
                              <GreenLine></GreenLine>
                              <RedLine></RedLine>
                            </BarLine>
                          </PositionDivLine>
                        </div>
                      </RowSpacing>
                      <Media_for_container>
                        <Container>
                          <Status>Status : </Status>
                          <Open>Open</Open>
                        </Container>

                        <MobileDivLine>
                          <BarLine>
                            <GreenLine></GreenLine>
                            <RedLine></RedLine>
                          </BarLine>
                        </MobileDivLine>
                      </Media_for_container>
                      <DisplayNone>
                        <Container>
                          <Status>Status : </Status>
                          <Open>Open</Open>
                        </Container>

                        <NumberOfVotes>{data.vote}</NumberOfVotes>
                      </DisplayNone>
                      <RowSpacing>
                        <MobileResponsive>
                          <ClockImage src="/images/Time-Inactive.svg" />

                          <PollEnded>{data.poll}</PollEnded>
                        </MobileResponsive>
                      </RowSpacing>
                    </Column>
                  </MainContainer>
                );
              })}
            </Div>

            <PagingDiv>
              <Container>
                <Show>Show </Show>
                <Block>
                  <Span>10 </Span>
                </Block>
                <Properties>Properties </Properties>
              </Container>
              <SecondContainer>
                <Back>Back</Back>
                <Block>
                  <Span>1 </Span>
                </Block>
                <Block>
                  <Span>2 </Span>
                </Block>
                <NextBlock>
                  <Span>Next</Span>
                </NextBlock>
              </SecondContainer>
            </PagingDiv>
          </Grid>
        </div>
      </div>
      <div>
        <FooterComponent />
      </div>
    </div>
  );
}
const MainContainer = styled.div`
  padding: 11px 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
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
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0px;
  color: #909090;
  opacity: 1;
`;
const PagingDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 20px;
`;
const Span = styled.span`
  text-align: left;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0px;
  color: #3b3b3b;
  opacity: 1;
  display: flex;
  padding-left: 6px;
  padding-top: 2px;
`;
const Show = styled.span`
  display: flex;
  text-align: left;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0px;
  color: #3b3b3b;
  opacity: 1;
  align-items: center;
`;
const Block = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #e3e7eb;
  border-radius: 4px;
  opacity: 1;
  width: 25px;
  height: 22px;
  margin-left: 8px;
  font-family: "Inter", sans-serif;
  font-weight: 600;
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
const Properties = styled.span`
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
    display: visible;
  }
`;
const BarLine = styled.div`
  width: 200px;
  height: 3px;
  display: flex;
  @media (min-width: 300px) and (max-width: 767px) {
    width: 85px;
  }
`;
const GreenLine = styled.div`
  background-color: #3ab70d;
  width: 100%;
  height: 3px;
  @media (min-width: 300px) and (max-width: 767px) {
    width: 50%;
  }
`;
const RedLine = styled.div`
  background-color: #f43d3d;
  width: 100%;
  height: 3px;
  @media (min-width: 300px) and (max-width: 767px) {
    width: 50%;
  }
`;
const SelectBox = styled.div`
  display: flex;
  align-items: center;
`;
const Failed = styled.span`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0px;
  opacity: 1;
  color: #f43d3d;
  whitespace: "nowrap";
`;
const InputDiv = styled.div`
  display: flex;
  @media (min-width: 300px) and (max-width: 1038px) {
    display: none;
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
  font-size: 14px;
  text-align: left;
  letter-spacing: 0px;
  color: #cecece;
  opacity: 1;
  whitespace: "nowrap";
`;
const ClockImage = styled.img`
  margin-right: 10px;
`;
const Div = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #e3e7eb;
  height: auto;
`;
const Posted = styled.span`
  text-align: left;
  font-family: "Inter", sans-serif;
  font-weight: 600;
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
  font-family: 'Inter',sans-serif;
  font-weight: 600;
  font-size: 18px;
  @media (min-width: 300px) and (max-width: 767px) {
    font-size: 13px;
  }
`;
const Status = styled.span`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0px;
  opacity: 1;
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
  font-weight: 600;
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
  font-weight: 600;
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
  font-weight: 600;
  font-size: 14px;
  @media (min-width: 300px) and (max-width: 767px) {
    font-size: 12px;
  }
`;
const Heading = styled.span`
  white-space: nowrap;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 21px;
  letter-spacing: 0px;
  color: #2a2a2a;
  opacity: 1;
  box-shadow: none;
  color: var(--unnamed-color-2a2a2a);
  @media (min-width: 300px) and (max-width: 767px) {
    font-size: 18px;
  }
`;
