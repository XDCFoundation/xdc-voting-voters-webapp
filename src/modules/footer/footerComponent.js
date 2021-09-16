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
                        <a href="https://discord.com/invite/KZdD6pkFxp">
                          Discord
                        </a>
                      </RowTag>

                      <RowTag>
                        <a href="https://github.com/XDCFoundation/">Github</a>
                      </RowTag>
                      <RowTag>
                        <a href="https://twitter.com/XinFin_Official">
                          Twitter
                        </a>
                      </RowTag>
                      <RowTag>
                        <a href="https://t.me/xinfin">Telegram</a>
                      </RowTag>
                      <RowTag>
                        {/* <a href="https://discord.com/invite/KZdD6pkFxp"> */}
                        Forum
                        {/* </a> */}
                      </RowTag>
                    </Column>
                  </Column>

                  <Column className="footer-column">
                    <Row className="footer-column-heading">Governance</Row>
                    <Column className="sub-column-heading">
                      <RowTag>Overview </RowTag>
                      <RowTag>Forum</RowTag>
                      <RowTag>
                        <a href="https://howto.xinfin.org/general/faq/">FAQs</a>
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
                      <span>
                        <img
                          className="forward-image"
                          src={require("../../assets/styles/images/ForwardLogo.svg")}
                        ></img>
                      </span>
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
const RowTag = styled.div`
  text-decoration: none !important;
  color: black;
`;
