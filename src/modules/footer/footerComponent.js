import React, { useState } from "react";
import { Column, Row } from "simple-flexbox";
import "../../assets/styles/custom.css";
import styled from "styled-components";

export default function FooterComponent() {
  return (
    <Div>
      <MainContainer>
        <Container>
          <div>
            <Row>
              <img
                className="footer-logo"
                src={require("../../assets/styles/images/XDC-Logo-Blue.svg")}
              ></img>
              <div className="xdc-footer">XDC</div>
            </Row>
          </div>
          <div>
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
            <RowTag>Forum</RowTag>
          </div>
          <div>
            <Row className="footer-column-heading">Governance</Row>
            <RowTag>Overview </RowTag>
            <RowTag>Forum</RowTag>
            <RowTag>
              <Anchor href="https://howto.xinfin.org/general/faq/">FAQs</Anchor>
            </RowTag>
          </div>
          <div>
            <Row className="footer-column-heading">New Proposal Alert</Row>
            <InputDiv>
              <Input type="email" placeholder="Add Email" />
              <Img
                src={require("../../assets/styles/images/ForwardLogo.svg")}
              />
            </InputDiv>
          </div>
        </Container>
        <div
          style={{ borderTop: "1px solid #e3e7eb", marginTop: "60px" }}
        ></div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <RowXDC>© 2021 XDC. All Right Reserved</RowXDC>
        </div>
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
            <div style={{ paddingRight: "45px" }}>
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
              <RowTag>Forum</RowTag>
            </div>
            <div>
              <Row className="footer-column-heading">Governance</Row>
              <RowTag>Overview </RowTag>
              <RowTag>Forum</RowTag>
              <RowTag>
                <Anchor href="https://howto.xinfin.org/general/faq/">
                  FAQs
                </Anchor>
              </RowTag>
            </div>
          </Div__>
          <div
            style={{ borderTop: "1px solid #e3e7eb", marginTop: "60px" }}
          ></div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <RowXDC>© 2021 XDC. All Right Reserved</RowXDC>
          </div>
        </MobileResolution>
      </MobileDiv>
    </Div>
  );
}
const Div__ = styled.div`
  display: flex;

  justify-content: flex-start;
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
  display: none;
  justify-content: center;
  @media (max-width: 767px) {
    display: flex;
  }
  @media (min-width: 300px) and (max-width: 567px) {
    max-width: 300px;
    width: 100%;
  }
  @media (min-width: 567px) and (max-width: 767px) {
    max-width: 500px;
    width: 100%;
  }
`;
const MobileResolution = styled.div`
  width: 100%;

  @media (min-width: 300px) and (max-width: 567px) {
    width: 100%;
    max-width: 300px;
  }
`;
const RowXDC = styled.div`
  justify-content: center;
  margin-top: 40px;
  color: #909090;
  font: normal normal normal 15px/28px Inter;
`;

const ResponsiveImg = styled.img``;
const InputDiv = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #e3e7eb;
  border-radius: 6px;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  padding-left: 6px;
}
`;
const Input = styled.input`
  border: 0px;
  border-right: 1 px solid #e3e7eb;

  @media (min-width: 567px) and (max-width: 767px) {
    border: 0px;
    width: 100%;
    max-width: 382px;
  }
`;
const Img = styled.img`
  padding-left: 75px;
`;
const Div = styled.div`
width:100%
display:flex;
justify-content: center;
border-top: 1px solid #E3E7EB;
padding-bottom: 100px;
align-items: flex-start;

`;
const MainContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  @media (max-width: 767px) {
    display: none;
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
