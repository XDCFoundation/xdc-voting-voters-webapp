import React, { useState, useEffect } from "react";
import FooterComponent from "../footer/footerComponent";
import styled from "styled-components";
import { history } from "../../managers/history";
import Header from "../header/header";
import useWindowDimensions from "../../common/WindowDimension";
// import {View } from 'react-native';

const TabContainer = styled.div`
  width: 100%;
`;
const HeaderContainer = styled.div`
  margin-inline: auto;
  margin-top: 0px;
  width: 100%;
  height: 184px;
  background: url("./images/banner_new.png") 0% 0% no-repeat padding-box;
  background-size: 100% 300px;
  opacity: 1;
`;
const AddrGroupTabs = styled.div`
  max-width: 935px;
  margin-inline: auto;
  margin-top: -50px;
  width: 95%;
  height: 575px;
  display: block;
  align-items: center;
  border: 1px solid #E3E7EB;
  border-radius: 6px;
  background-color: #FFFFFF;
`;
const TabletText = styled.div`
  /* height: 67px; */
  font-size: 20px;
  color: #2A2A2A;
  display: block;
  align-items: center;
  margin: auto;
  justify-content: space-between;
  position: relative;
  text-align: center;
  font-weight: 700;
`;
const TabletSubText = styled.div`
  width: 326px;
  height: 86px;
  font-size: 17px;
  display: block;
  align-items: center;
  margin: auto;
  justify-content: space-between;
  position: relative;
  text-align: center;
  border: #2A2A2A;
  font-weight: 400;
`;
const NoTabImg = styled.img`
  display: flex;
  align-items: center;
  margin: auto;
  justify-content: space-between;
  position: relative;
  width: 67px;
  height: 85px;
  margin-top: 100px;
`;

const AddressGroupTabs = () => {
    const { height, width } = useWindowDimensions();
    return (
        width < 1024 && (
          <TabContainer>
            <HeaderContainer>
              <Header />
            </HeaderContainer>
            <AddrGroupTabs>
            <div>
            <div className= "img-div-support">
               <NoTabImg src= "./images/Mobile_support.svg" />
               </div>
               <div className= "text-div-support">
            <TabletText>
               Feature not available on mobile and 
               </TabletText>
               <TabletText>
               tablet browsers
               </TabletText>
               </div>
               <div>
               <TabletSubText>
               You need to open XDC Governance on a desktop browser to access this feature. Support for Mobile browsers is in progress.
               </TabletSubText>
               </div>
            </div>
               </AddrGroupTabs>
           <div className="footer-tab">
          <FooterComponent />
        </div>
      </TabContainer>
    )
      )
        
    }
    
    export default AddressGroupTabs;
