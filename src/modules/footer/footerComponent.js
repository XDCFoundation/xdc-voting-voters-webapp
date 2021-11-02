import React, { useState } from "react";
import { Column, Row } from "simple-flexbox";
import "../../assets/styles/custom.css";
import styled from "styled-components";

export default function FooterComponent() {
  return (
    <Div>
      <MainContainer>
        <Container>
          <ColumnOne>
            <Row>
              <img
                className="footer-logo"
                src={require("../../assets/styles/images/XDC-Logo-Blue.svg")}
              ></img>
              <div className="xdc-footer">XDC</div>
            </Row>
          </ColumnOne>
          <ColumnSecond>
            <Row className="footer-column-heading">Community</Row>
            <RowTag>
              <Anchor href="https://discord.com/invite/KZdD6pkFxp">
                Discord
              </Anchor>
            </RowTag>
            <RowTag>
              <Anchor href="https://github.com/XDCFoundation/">Github</Anchor>
            </RowTag>
            <RowTag>
              <Anchor href="https://twitter.com/XinFin_Official">
                Twitter
              </Anchor>
            </RowTag>
            <RowTag>
              <Anchor href="https://t.me/xinfin">Telegram</Anchor>
            </RowTag>
            <RowTag>
              {/* <Anchor href="https://discord.com/invite/KZdD6pkFxp"> */}
              Forum
              {/* </Anchor> */}
            </RowTag>
          </ColumnSecond>
          <ColumnThird>
            <Row className="footer-column-heading">Governance</Row>
            <RowTag>Overview </RowTag>
            <RowTag>Forum</RowTag>
            <RowTag>
              <Anchor href="https://howto.xinfin.org/general/faq/">FAQs</Anchor>
            </RowTag>
          </ColumnThird>
          <ColumnFourth>
            <Row className="footer-column-heading">New Proposal Alert</Row>
            <InputDiv>
              <Input type="email" placeholder="Add Email" />
              <Img
                src={require("../../assets/styles/images/ForwardLogo.svg")}
              />
            </InputDiv>
          </ColumnFourth>
        </Container>

        <RowXDC>© 2021 XDC. All Right Reserved</RowXDC>
      </MainContainer>
      <MobileDiv>
        <MobileResolution>
          <Row>
            <ResponsiveImg
              className="footer-logo"
              src={require("../../assets/styles/images/XDC-Logo-Blue.svg")}
            />

            <div className="xdc-footer">XDC</div>
          </Row>
          <Row>
            <Heading>New Proposal Alert</Heading>
          </Row>
          <Row>
            <InputDiv>
              <Input type="email" placeholder="Add Email" />
              <Img
                src={require("../../assets/styles/images/ForwardLogo.svg")}
              />
            </InputDiv>
          </Row>
          <Div__>
            <ColumnSecond>
              <Row className="footer-column-heading">Community</Row>
              <RowTag>
                <Anchor href="https://discord.com/invite/KZdD6pkFxp">
                  Discord
                </Anchor>
              </RowTag>
              <RowTag>
                <Anchor href="https://github.com/XDCFoundation/">Github</Anchor>
              </RowTag>
              <RowTag>
                <Anchor href="https://twitter.com/XinFin_Official">
                  Twitter
                </Anchor>
              </RowTag>
              <RowTag>
                <Anchor href="https://t.me/xinfin">Telegram</Anchor>
              </RowTag>
              <RowTag>
                {/* <Anchor href="https://discord.com/invite/KZdD6pkFxp"> */}
                Forum
                {/* </Anchor> */}
              </RowTag>
            </ColumnSecond>
            <ColumnThird>
              <Row className="footer-column-heading">Governance</Row>
              <RowTag>Overview </RowTag>
              <RowTag>Forum</RowTag>
              <RowTag>
                <Anchor href="https://howto.xinfin.org/general/faq/">
                  FAQs
                </Anchor>
              </RowTag>
            </ColumnThird>
          </Div__>
        </MobileResolution>
      </MobileDiv>
    </Div>
  );
}
const Div__ = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Heading = styled.span`
  font-weight: 600;
  color: #2a2a2a;
  font-size: 17px;
  font-family: "Inter", sans-serif;
  margin-bottom: 10px;
`;
const MobileDiv = styled.div`
  width: 100%;
  display: flex;
  border-top: 1px solid #e3e7eb;
  justify-content: center;
  @media (min-width: 767px) {
    display: none;
  }
`;
const MobileResolution = styled.div`
  @media (min-width: 300px) and (max-width: 567px) {
    width: 100%;
    max-width: 300px;
  }

  @media (min-width: 568px) and (max-width: 767px) {
    width: 100%;
    max-width: 500px;
  }
`;
const RowXDC = styled.div`
  border-top: 1px solid #e3e7eb;
  justify-content: center;
  margin-top: 70px;
  color: #909090;
  font: normal normal normal 15px/28px Inter;
  @media (min-width: 300px) and (max-width: 767px) {
    display: none;
  }
`;

const ResponsiveImg = styled.img``;
const InputDiv = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #e3e7eb;
  border-radius: 6px;
  align-items: center;
  width: 100%;
`;
const Input = styled.input`
  border: 0px;
  border-right: 1 px solid #e3e7eb;
  // width: 100%;
`;
const Img = styled.img`
  padding: 4px;
`;
const ColumnOne = styled.div``;
const ColumnSecond = styled.div``;
const ColumnThird = styled.div``;
const ColumnFourth = styled.div``;
const Div = styled.div`
width:100%
display:flex;
justify-content: center;
border-top: 1px solid #E3E7EB;
padding-bottom: 100px;
align-items: flex-start;
@media (min-width: 300px) and (max-width: 767px) {
  display: none;
}
`;
const MainContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  @media (min-width: 300px) and (max-width: 767px) {
    // width: 100%;
    // max-width: 700px;
    display: none;
  }
  @media (min-width: 300px) and (max-width: 567px) {
    max-width: 300px;
    width: 100%;
  }
  @media (min-width: 567px) and (max-width: 767px) {
    max-width: 500px;
    width: 100%;
  }
  @media (min-width: 767px) and (max-width: 1440px) {
    max-width: 900px;
    width: 100%;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
  @media (min-width: 300px) and (max-width: 767px) {
    display: none;
  }
`;
const Anchor = styled.a`
  text-decoration: none !important;
  color: black;
  &:hover {
    // color: unset !important;
    text-decoration: underline;
  }
`;
const RowTag = styled.div`
  text-decoration: none !important;
  color: black;
  color: var(--unnamed-color-2a2a2a);
  text-align: left;
  font: normal normal normal 15px/28px Inter;
  color: #2a2a2a;
`;
