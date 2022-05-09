import React from "react";
import styled from "styled-components";
import Header from "../header/header";

const HeaderContainer = styled.div`
  margin-top: 0px;
  width: 100%;
  height: 300px;
  background: url("./images/banner_new.png") 0% 0% no-repeat
    padding-box;
  background-size: 100% 300px;
  /* display: flex; */
  opacity: 1;
//   position: relative;
`;

function HeaderComponent() {
  return (
    <HeaderContainer>
      <Header />
    </HeaderContainer>
  );
}

export default HeaderComponent;
