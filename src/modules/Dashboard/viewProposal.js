import React, { useState } from "react";
import { Column, Row } from "simple-flexbox";
import "../../assets/styles/custom.css";
import HeaderMain from "../header/header";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import DatePicker from "react-multi-date-picker";
import styled from "styled-components";
import "./datepicker.css";

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
    width: "120px",
  },
  root: {
    display: "flex",
    justifyContent: "center",
    paddingLeft: "21%",
    paddingRight: "23%",
    position: "absolute",
    top: "147px",
    width: "100%",
  },
  rowdiv: {
    width: "100%",
    alignItems: "center",
    height: "53px",
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    border: "1px solid #E3E7EB",
    borderRadius: "6px",
    opacity: "1",
  },

  input: {
    width: "120px",
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
  },

  line: {
    width: "100%",
    marginTop: "0px",
    marginBottom: "0px",
  },
}));
const Container = styled.div``;
const SecondContainer = styled.div``;

export default function ViewAllProposal() {
  const classes = useStyles();
  const [value, onChange] = useState(new Date());
  return (
    <div>
      <div className="header-div-all">
        <HeaderMain />{" "}
      </div>

      <div className={classes.root}>
        <Grid item xs={12}>
          <Row className={classes.rowdiv}>
            <Container>
              <Heading>All Proposal</Heading>

              <Inputdiv>
                <input
                  placeholder="Search"
                  className={classes.input}
                  type="text"
                />
              </Inputdiv>
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
          <hr className={classes.line} />

          <Div>
            <div>
              <Column>
                <Row>
                  <Posted>
                    Posted&nbsp;on&nbsp;24&nbsp;June&nbsp;2021&nbsp;
                  </Posted>
                  <TimeRemainingdiv>
                    <Timerimg src="/images/Time-Active.svg" />
                    &nbsp;
                    <Time>01:50:48&nbsp;Remaining&nbsp;</Time>
                  </TimeRemainingdiv>
                </Row>
                <Row>
                  <Content>XDC-ABC Bootstrapping Partnership Proposal</Content>
                  <Positiondiv>
                    <Button>Details</Button>
                  </Positiondiv>
                </Row>
                <Row>
                  <Status>Status :</Status>
                  <Passed>Passed</Passed>
                  <Positiondiv>
                    <Numberofvotes>145&nbsp;votes</Numberofvotes>
                  </Positiondiv>
                </Row>
                <Row>
                  <Mobileresponsive>
                    <Timerimg src="/images/Time-Active.svg" />
                    &nbsp;
                    <Time>01:50:48&nbsp;Remaining&nbsp;</Time>
                  </Mobileresponsive>
                </Row>
              </Column>
              <hr className={classes.line} />
            </div>
            <div>
              <Column>
                <Row>
                  <Posted>
                    Posted&nbsp;on &nbsp;24&nbsp; June&nbsp; 2021&nbsp;
                  </Posted>

                  <TimeRemainingdiv>
                    <Clockimage src="/images/Time-Inactive.svg" /> &nbsp;
                    <Pollended>Poll&nbsp;Ended</Pollended>
                  </TimeRemainingdiv>
                </Row>
                <Row>
                  <Content>
                    {" "}
                    Adding &nbsp;more &nbsp; features &nbsp; to &nbsp;XDC &nbsp;
                    Explorer 2.0
                  </Content>
                  <Positiondivline>
                    <Barline>
                      <Greenline></Greenline>
                      <Redline></Redline>
                    </Barline>{" "}
                  </Positiondivline>
                </Row>
                <Row>
                  <Status>Status :</Status>
                  <Open>Open</Open>
                  <Positiondiv>
                    <Numberofvotes>98&nbsp;votes</Numberofvotes>
                  </Positiondiv>
                </Row>
                <Row>
                  <Mobileresponsive>
                    <Clockimage src="/images/Time-Inactive.svg" /> &nbsp;
                    <Pollended>Poll&nbsp;Ended</Pollended>
                  </Mobileresponsive>
                </Row>
              </Column>
              <hr className={classes.line} />
            </div>
            <div>
              <Column>
                <Row>
                  <Posted>
                    Posted&nbsp;on &nbsp;24&nbsp; June&nbsp; 2021&nbsp;
                  </Posted>
                  <TimeRemainingdiv>
                    <Clockimage src="/images/Time-Inactive.svg" /> &nbsp;
                    <Pollended>Poll&nbsp;Ended</Pollended>
                  </TimeRemainingdiv>
                </Row>
                <Row>
                  <Content>Relaunch of XinFin.org website</Content>
                  <Positiondivline>
                    <Barline>
                      <Greenline></Greenline>
                      <Redline></Redline>
                    </Barline>{" "}
                  </Positiondivline>
                </Row>
                <Row>
                  <Status>Status :</Status>
                  <Failed>Failed</Failed>
                  <Positiondiv>
                    <Numberofvotes>120&nbsp;votes</Numberofvotes>
                  </Positiondiv>
                </Row>
                <Row>
                  <Mobileresponsive>
                    <Clockimage src="/images/Time-Inactive.svg" /> &nbsp;
                    <Pollended>Poll&nbsp;Ended</Pollended>
                  </Mobileresponsive>
                </Row>
              </Column>
              <hr className={classes.line} />
            </div>

            <div>
              <Column>
                <Row>
                  <Posted>
                    Posted&nbsp;on &nbsp;24&nbsp; June&nbsp; 2021&nbsp;
                  </Posted>
                  <TimeRemainingdiv>
                    <Clockimage src="/images/Time-Inactive.svg" /> &nbsp;
                    <Pollended>Poll&nbsp;Ended</Pollended>
                  </TimeRemainingdiv>
                </Row>
                <Row>
                  <Content>Launching NFT Marketplace to of XDC</Content>
                  <Positiondivline>
                    <Barline>
                      <Greenline></Greenline>
                      <Redline></Redline>
                    </Barline>{" "}
                  </Positiondivline>
                </Row>
                <Row>
                  <Status>Status :</Status>
                  <Passed>Passed</Passed>
                  <Positiondiv>
                    <Numberofvotes>100&nbsp;votes</Numberofvotes>
                  </Positiondiv>
                </Row>
                <Row>
                  <Mobileresponsive>
                    <Clockimage src="/images/Time-Inactive.svg" /> &nbsp;
                    <Pollended>Poll&nbsp;Ended</Pollended>
                  </Mobileresponsive>
                </Row>
              </Column>
              <hr className={classes.line} />
            </div>
            <div>
              <Column>
                <Row>
                  <Posted>
                    Posted&nbsp;on &nbsp;24&nbsp; June&nbsp; 2021&nbsp;
                  </Posted>
                  <TimeRemainingdiv>
                    <Clockimage src="/images/Time-Inactive.svg" /> &nbsp;
                    <Pollended>Poll&nbsp;Ended</Pollended>
                  </TimeRemainingdiv>
                </Row>
                <Row>
                  <Content>Partnership with Circle Stable Coin</Content>
                  <Positiondivline>
                    <Barline>
                      <Greenline></Greenline>
                      <Redline></Redline>
                    </Barline>{" "}
                  </Positiondivline>
                </Row>
                <Row>
                  <Status>Status :</Status>
                  <Passed>Passed</Passed>
                  <Positiondiv>
                    <Numberofvotes>89&nbsp;votes</Numberofvotes>
                  </Positiondiv>
                </Row>
                <Row>
                  <Mobileresponsive>
                    <Clockimage src="/images/Time-Inactive.svg" /> &nbsp;
                    <Pollended>Poll&nbsp;Ended</Pollended>
                  </Mobileresponsive>
                </Row>
              </Column>
              <hr className={classes.line} />
            </div>
            <div>
              <Column>
                <Row>
                  <Posted>
                    Posted&nbsp;on &nbsp;24&nbsp; June&nbsp; 2021&nbsp;
                  </Posted>
                  <TimeRemainingdiv>
                    <Clockimage src="/images/Time-Inactive.svg" /> &nbsp;
                    <Pollended>Poll&nbsp;Ended</Pollended>
                  </TimeRemainingdiv>
                </Row>
                <Row>
                  <Content>XDC-ABC Bootstrapping Partnership Proposal</Content>
                  <Positiondivline>
                    <Barline>
                      <Greenline></Greenline>
                      <Redline></Redline>
                    </Barline>{" "}
                  </Positiondivline>
                </Row>
                <Row>
                  <Status>Status :</Status>
                  <Passed>Passed</Passed>
                  <Positiondiv>
                    <Numberofvotes>56&nbsp;votes</Numberofvotes>
                  </Positiondiv>
                </Row>
                <Row>
                  <Mobileresponsive>
                    <Clockimage src="/images/Time-Inactive.svg" /> &nbsp;
                    <Pollended>Poll&nbsp;Ended</Pollended>
                  </Mobileresponsive>
                </Row>
              </Column>
              <hr className={classes.line} />
            </div>
            <div>
              <Column>
                <Row>
                  <Posted>
                    Posted&nbsp;on &nbsp;24&nbsp; June&nbsp; 2021&nbsp;
                  </Posted>
                  <TimeRemainingdiv>
                    <Clockimage src="/images/Time-Inactive.svg" /> &nbsp;
                    <Pollended>Poll&nbsp;Ended</Pollended>
                  </TimeRemainingdiv>
                </Row>
                <Row>
                  <Content>XDC-ABC Bootstrapping Partnership Proposal</Content>
                  <Positiondivline>
                    <Barline>
                      <Greenline></Greenline>
                      <Redline></Redline>
                    </Barline>{" "}
                  </Positiondivline>
                </Row>
                <Row>
                  <Status>Status :</Status>
                  <Passed>Passed</Passed>
                  <Positiondiv>
                    <Numberofvotes>145&nbsp;votes</Numberofvotes>
                  </Positiondiv>
                </Row>
                <Row>
                  <Mobileresponsive>
                    <Clockimage src="/images/Time-Inactive.svg" /> &nbsp;
                    <Pollended>Poll&nbsp;Ended</Pollended>
                  </Mobileresponsive>
                </Row>
              </Column>
              <hr className={classes.line} />
            </div>
            <div>
              <Column>
                <Row>
                  <Posted>
                    Posted&nbsp;on &nbsp;24&nbsp; June&nbsp; 2021&nbsp;
                  </Posted>
                  <TimeRemainingdiv>
                    <Clockimage src="/images/Time-Inactive.svg" /> &nbsp;
                    <Pollended>Poll&nbsp;Ended</Pollended>
                  </TimeRemainingdiv>
                </Row>
                <Row>
                  <Content>XDC-ABC Bootstrapping Partnership Proposal</Content>
                  <Positiondivline>
                    <Barline>
                      <Greenline></Greenline>
                      <Redline></Redline>
                    </Barline>{" "}
                  </Positiondivline>
                </Row>
                <Row>
                  <Status>Status :</Status>
                  <Passed>Passed</Passed>
                  <Positiondiv>
                    <Numberofvotes>145&nbsp;votes</Numberofvotes>
                  </Positiondiv>
                </Row>
                <Row>
                  <Mobileresponsive>
                    <Clockimage src="/images/Time-Inactive.svg" /> &nbsp;
                    <Pollended>Poll&nbsp;Ended</Pollended>
                  </Mobileresponsive>
                </Row>
              </Column>
              <hr className={classes.line} />
            </div>
            <div>
              <Column>
                <Row>
                  <Posted>
                    Posted&nbsp;on &nbsp;24&nbsp; June&nbsp; 2021&nbsp;
                  </Posted>
                  <TimeRemainingdiv>
                    <Clockimage src="/images/Time-Inactive.svg" /> &nbsp;
                    <Pollended>Poll&nbsp;Ended</Pollended>
                  </TimeRemainingdiv>
                </Row>
                <Row>
                  <Content>XDC-ABC Bootstrapping Partnership Proposal</Content>
                  <Positiondivline>
                    <Barline>
                      <Greenline></Greenline>
                      <Redline></Redline>
                    </Barline>{" "}
                  </Positiondivline>
                </Row>
                <Row>
                  <Status>Status :</Status>
                  <Passed>Passed</Passed>
                  <Positiondiv>
                    <Numberofvotes>145&nbsp;votes</Numberofvotes>
                  </Positiondiv>
                </Row>
                <Row>
                  <Mobileresponsive>
                    <Clockimage src="/images/Time-Inactive.svg" /> &nbsp;
                    <Pollended>Poll&nbsp;Ended</Pollended>
                  </Mobileresponsive>
                </Row>
              </Column>
              <hr className={classes.line} />
            </div>
          </Div>
          <div>
            <Show>Show</Show>
            <Block>
              <Span>10</Span>
            </Block>

            <Properties>Properties</Properties>
          </div>
        </Grid>
      </div>
    </div>
  );
}
const Span = styled.span`
  text-align: left;
  font: normal normal normal 14px/17px Inter;
  letter-spacing: 0px;
  color: #3b3b3b;
  opacity: 1;
`;
const Show = styled.span``;
const Block = styled.span`
  color: var(--unnamed-color-2149b9);
  text-align: left;
  font: normal normal medium 14px/17px Inter;
  letter-spacing: 0px;
  color: #2149b9;
  opacity: 1;
`;
const Properties = styled.span``;

const TimeRemainingdiv = styled.div`
  position: absolute;
  right: 24%;
  @media (max-width: 767px) {
    display: none;
  }
`;
const Mobileresponsive = styled.div`
  margin-left: 12px;
  @media (min-width: 767px) and (max-width: 2000px) {
    display: none;
  }
  @media (min-width: 400px) and (max-width: 767px) {
    display: visible;
  }
`;
const Barline = styled.div`
  width: 100%;
  height: 3px;
  display: flex;
`;
const Greenline = styled.div`
  background-color: #3ab70d;
  width: 100%;
  height: 3px;
`;
const Redline = styled.div`
  background-color: #f43d3d;
  width: 60px;

  height: 3px;
`;
const SelectBox = styled.div``;
const Failed = styled.span`
  text-align: left;
  font: normal normal normal 15px/19px Inter;
  letter-spacing: 0px;
  opacity: 1;
  font-size: 12px;
  padding-top: 6px;
  color: #f43d3d;
`;
const Inputdiv = styled.div``;
const Positiondiv = styled.div`
  position: absolute;
  right: 24%;
`;
const Positiondivline = styled.div`
  position: absolute;
  right: 24%;
  margin-top: 15px;
`;

const Pollended = styled.span`
  font-size: 12px;
  text-align: left;
  font: normal normal medium 14px/17px Inter;
  letter-spacing: 0px;
  color: #cecece;
  opacity: 1;
`;
const Clockimage = styled.img``;
const Div = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #e3e7eb;
  height: auto;
`;
const Posted = styled.span`
  text-align: left;
  font: normal normal medium 14px/17px Inter;
  letter-spacing: 0px;
  color: #909090;
  opacity: 1;
  font-size: 12px;
  padding-top: 6px;
  margin-left: 13px;
`;
const Time = styled.span`
  text-align: left;
  font: normal normal medium 14px/17px Inter;
  letter-spacing: 0px;
  color: #909090;
  opacity: 1;
  font-size: 12px;
  padding-top: 6px;
`;
const Button = styled.button`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #2049b9;
  border-radius: 4px;
  opacity: 1;
  color: var(--unnamed-color-2149b9);
  text-align: center;
  font: normal normal 600 15px/19px Inter;
  letter-spacing: 0px;
  color: #2149b9;
  margin-top: 10px;
`;
const Content = styled.span`
  color: var(--unnamed-color-2a2a2a);
  text-align: left;
  font: normal normal 600 15px/26px Inter;
  letter-spacing: 0px;
  color: #2a2a2a;
  opacity: 1;
  font-size: 14px;
  padding-top: 6px;
  margin-left: 13px;
`;
const Status = styled.span`
  text-align: left;
  font: normal normal normal 15px/19px Inter;
  letter-spacing: 0px;
  opacity: 1;
  font-size: 12px;
  padding-top: 6px;
  margin-left: 13px;
  margin-bottom: 4px;
`;
const Open = styled.span`
  color: var(--unnamed-color-2149b9);
  text-align: left;
  font: normal normal normal 15px/19px Inter;
  letter-spacing: 0px;
  color: #2149b9;
  padding-top: 6px;
  font-size: 12px;
  margin-bottom: 4px;
`;
const Timerimg = styled.img``;
const Passed = styled.span`
  text-align: left;
  font: normal normal normal 15px/19px Inter;
  letter-spacing: 0px;
  color: #3ab70d;
  font-size: 12px;
  padding-top: 6px;
`;
const Numberofvotes = styled.span`
  font: normal normal 600 14px/22px Inter;
`;
const Heading = styled.span`
  white-space: nowrap;
  font: normal normal 600 19px/26px Inter;
  letter-spacing: 0px;
  color: #2a2a2a;
  opacity: 1;
  box-shadow: none;
  color: var(--unnamed-color-2a2a2a);
  margin-left: 13px;
`;
