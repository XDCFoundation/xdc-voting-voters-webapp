import React, { useState } from "react";
import { Column, Row } from "simple-flexbox";
import "../../assets/styles/custom.css";
import styled from "styled-components";

export default function FooterComponent() {
  return (
    // <div
    //   style={{
    //     width: "100%",
    //     borderTop: "1px solid #E3E7EB",
    //   }}
    // >
    //   {/* <div className="main-footer"></div> */}
    //   {/* <div className="mobile-footer"> */}
    //   <div className="recent-div-footer">
    //     <div className="recent-proposal-div-footer">
    //       <Row className="mobile-footer-main-div">
    //         <Column>
    //           <Row>
    //             <Column>
    //               <img
    //                 className="footer-logo"
    //                 src={require("../../assets/styles/images/XDC-Logo-Blue.svg")}
    //               ></img>
    //             </Column>
    //             <Column>
    //               <div className="xdc-footer">XDC</div>
    //             </Column>
    //           </Row>
    //         </Column>

    //         <Row className="mobile-row">
    //           <Row className="mobile-footer-row-2">
    //             <Column className="footer-column">
    //               <Row className="footer-column-heading">Community</Row>
    //               <Column className="sub-column-heading">
    //                 <RowTag>
    //                   <Anchor href="https://discord.com/invite/KZdD6pkFxp">
    //                     Discord
    //                   </Anchor>
    //                 </RowTag>

    //                 <RowTag>
    //                   <Anchor href="https://github.com/XDCFoundation/">
    //                     Github
    //                   </Anchor>
    //                 </RowTag>
    //                 <RowTag>
    //                   <Anchor href="https://twitter.com/XinFin_Official">
    //                     Twitter
    //                   </Anchor>
    //                 </RowTag>
    //                 <RowTag>
    //                   <Anchor href="https://t.me/xinfin">Telegram</Anchor>
    //                 </RowTag>
    //                 <RowTag>
    //                   {/* <Anchor href="https://discord.com/invite/KZdD6pkFxp"> */}
    //                   Forum
    //                   {/* </Anchor> */}
    //                 </RowTag>
    //               </Column>
    //             </Column>

    //             <Column className="footer-column">
    //               <Row className="footer-column-heading">Governance</Row>
    //               <Column className="sub-column-heading">
    //                 <RowTag>Overview </RowTag>
    //                 <RowTag>Forum</RowTag>
    //                 <RowTag>
    //                   <Anchor href="https://howto.xinfin.org/general/faq/">
    //                     FAQs
    //                   </Anchor>
    //                 </RowTag>
    //               </Column>
    //             </Column>
    //           </Row>

    //           <Row className="mobile-footer-row-1">
    //             <Column className="footer-column3">
    //               <Row className="footer-column-heading">
    //                 New Proposal Alert
    //               </Row>
    //               <Row>
    //                 <span>
    //                   <input
    //                     className="footer-search"
    //                     type="email"
    //                     placeholder="Add Email"
    //                   ></input>
    //                 </span>

    //                 <div
    //                   style={{
    //                     borderLeft: "1px solid #E3E7EB",
    //                     width: "100%",
    //                     maxWidth: "40px",

    //                     marginTop: "10px",
    //                     marginLeft: "-40px",
    //                     alignItems: "center",
    //                   }}
    //                 >
    //                   <img
    //                     style={{
    //                       width: "23px",
    //                       marginLeft: "5px",
    //                       marginTop: "7px",
    //                     }}
    //                     src={require("../../assets/styles/images/ForwardLogo.svg")}
    //                   />
    //                 </div>
    //               </Row>
    //             </Column>
    //           </Row>
    //         </Row>
    //       </Row>
    //       <Row className="reserved">© 2021 XDC. All Right Reserved</Row>

    //       <Row></Row>
    //     </div>
    //   </div>
    //   {/* </div> */}
    // </div>
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
            <input
              className="footer-search"
              type="email"
              placeholder="Add Email"
            />
            <Img src={require("../../assets/styles/images/ForwardLogo.svg")} />
          </ColumnFourth>
        </Container>
      </MainContainer>
    </Div>
  );
}
const Img = styled.img``;
const ColumnOne = styled.div``;
const ColumnSecond = styled.div``;
const ColumnThird = styled.div``;
const ColumnFourth = styled.div``;
const Div = styled.div`
width:100%
display:flex;
justify-content: center;
border-top: 1px solid #E3E7EB;
`;
const MainContainer = styled.div`
  width: 100%;
  max-width: 1280px;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;
