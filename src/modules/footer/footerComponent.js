import React, { useState } from "react";
import { Column, Row } from "simple-flexbox";
import "../../assets/styles/custom.css";
import styled from "styled-components";

export default function FooterComponent() {
  return (
    <div>
      <div className="main-footer"></div>
      <div className="mobile-footer">
        <div className="recent-div-footer">
          <div className="recent-proposal-div-footer">
            <Row className="mobile-footer-main-div">
              <Column>
                <Row>
                  <Column>
                    <img
                      className="footer-logo"
                      src={require("../../assets/styles/images/XDC-Logo-Blue.svg")}
                    ></img>
                  </Column>
                  <Column>
                    <div className="xdc-footer">XDC</div>
                  </Column>
                </Row>
              </Column>

              <Row className="mobile-row">
                <Row className="mobile-footer-row-2">
                  <Column className="footer-column">
                    <Row className="footer-column-heading">Community</Row>
                    <Column className="sub-column-heading">
                      <RowTag>
                        <Anchor href="https://discord.com/invite/KZdD6pkFxp">
                          Discord
                        </Anchor>
                      </RowTag>

                      <RowTag>
                        <Anchor href="https://github.com/XDCFoundation/">
                          Github
                        </Anchor>
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
                    </Column>
                  </Column>

                  <Column className="footer-column">
                    <Row className="footer-column-heading">Governance</Row>
                    <Column className="sub-column-heading">
                      <RowTag>Overview </RowTag>
                      <RowTag>Forum</RowTag>
                      <RowTag>
                        <Anchor href="https://howto.xinfin.org/general/faq/">
                          FAQs
                        </Anchor>
                      </RowTag>
                    </Column>
                  </Column>
                </Row>

                <Row className="mobile-footer-row-1">
                  <Column className="footer-column3">
                    <Row className="footer-column-heading">
                      New Proposal Alert
                    </Row>
                    <Row>
                      <span>
                        <input
                          className="footer-search"
                          type="email"
                          placeholder="Add Email"
                        ></input>
                      </span>
                      {/* <div style={{ width: "100%", maxWidth: "50px" }}>
                        <img
                          className="forward-image"
                          src={require("../../assets/styles/images/ForwardLogo.svg")}
                        ></img>
                      </div> */}
                      <div
                        style={{
                          borderLeft: "1px solid #E3E7EB",
                          width: "100%",
                          maxWidth: "40px",

                          marginTop: "10px",
                          marginLeft: "-40px",
                          alignItems: "center",
                        }}
                      >
                        <img
                          style={{
                            width: "23px",
                            marginLeft: "5px",
                            marginTop: "3px",
                          }}
                          src={require("../../assets/styles/images/ForwardLogo.svg")}
                        />
                      </div>
                    </Row>
                  </Column>
                </Row>
              </Row>
            </Row>
            <Row className="reserved">© 2021 XinFin. All Right Reserved</Row>

            <Row></Row>
          </div>
        </div>
      </div>
    </div>
  );
}
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
