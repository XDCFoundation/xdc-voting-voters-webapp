import React, { useState } from "react";
import { Column, Row } from "simple-flexbox";

export default function HeaderMain() {
  return (
    <div>
      <Row className="row-1">
        <Column>
          <Row>
            <Column>
              <img
                className="header-logo"
                src={require("../../assets/styles/images/xdc_logo.svg")}
              ></img>
            </Column>
            <Column className="xdc">
              <p>XDC</p>
            </Column>
          </Row>
        </Column>
        <Column>
          <div className="connect-wallet">
            <div className="circle"></div>

            <p>Connect Wallet</p>
          </div>
        </Column>
      </Row>
      {/* <span>Back</span> */}
    </div>
  );
}
