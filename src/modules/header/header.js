import React, { useState } from "react";
import { Column, Row } from "simple-flexbox";
import styled from "styled-components";
import { history } from "../../managers/history";

export default function HeaderMain() {
  const reDirect = () => {
    history.push("/");
  };
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
              <p onClick={reDirect}>XDC</p>
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
    </div>
  );
}
