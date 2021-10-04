import React, { useState } from "react";
import { Column, Row } from "simple-flexbox";
import styled from "styled-components";
import { history } from "../../managers/history";
import ReactDOM from "react-dom";
import { DAppProvider } from "@usedapp/core";
import App from "../../App";


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
          <React.StrictMode> <DAppProvider config={{}}> <App /> </DAppProvider> </React.StrictMode>         
        </Column>
      </Row>
    </div>
  );
}
