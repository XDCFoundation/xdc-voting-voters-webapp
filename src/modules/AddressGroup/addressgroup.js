import React, { useState } from "react";
import BaseComponent from "../baseComponent";
import HeaderMain from "../header/header";
import FooterComponent from "../footer/footerComponent";
import styled from "styled-components";
import { Styles } from "@material-ui/styles";
import { history } from "../../managers/history";
import { white } from "material-ui/styles/colors";
// import Popover from '@mui/material/Popover';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';

const AddressGroupTabs = styled.div`
  width: 100%;
  height: 62px;
  padding: 0px 0px 0px 23px;
  display: flex;
  align-items: center;
  border: 1px solid #e3e7eb;
  font-size: 20px;
//   font-weight: bold;
  letter-spacing: 0px;
  color: black;
`;

const Groupbtn = styled.div`
margin-left: 741px;
  margin-top: 13px;
//   width: 123px;
  height: 32px;
  border: 1px solid #2049b9;
  border-radius: 4px;
  opacity: 1;
  display: flex;
  justify-content: space-between;
`;

// const addrHead = styled.div`
// `;

const Addressbtn = styled.div`
   margin-top: 13px;
//   width: 123px;
  height: 32px;
  border: 1px solid #2049b9;
  border-radius: 4px;
  opacity: 1;
  margin-right: 40px;
  display: flex;
  justify-content: space-between;
`;

const Management = styled.div``;

const Employees = styled.div``;

const AddrContainer = styled.div`
  display: flex;
`;
const GrpContainer = styled.div`
  width: 865px;
  padding: 0px 40px;
`;

const Addrgrp = styled.div`
  width: 322px;
`;

const AddressContainer = styled.div
`
  margin-top: 13px;
  width: 1280px;
  height: 728px;
  border: 1px solid #e3e7eb;
  border-radius: 6px;
  opacity: 1;
  margin-left: 157px;
`;
const GroupContainer = styled.div
`
  height: 69px;
  border: 1px solid #e3e7eb;
  background-color: white;
  display: flex;
  justify-content: space-between;
`;

const AddressItem = styled.div`
  height: 61px;
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
  border-bottom: 1px solid #e3e7eb;
  display: flex;
  align-items: center;
`;

const Back = styled.div
`
  margin-left: 205px;
  margin-top: -23px;
  font-family: "Inter", sans-serif;
  font-size: 17px;
  color: #ffffff;
`;

const addresses = [
     {image:"/images/nft_pic.png", address:"xdc517f51dea1ab6468ca2192433a58cbeff0482a0b"},
     {image:"/images/nft_pic.png", address:"xdc517f51dea1ab6468ca2192433a58cbeff0482a0b"},
     {image:"/images/nft_pic.png", address:"xdc517f51dea1ab6468ca2192433a58cbeff0482a0b"},
     {image:"/images/nft_pic.png", address:"xdc517f51dea1ab6468ca2192433a58cbeff0482a0b"}
  ];

  const AddressGroup = () => {
  const [showAddress, setshowAddress] = useState(false);
  const [showpopOver, setshowpopOver] = useState(false);
  const [showGroup, setshowGroup] = useState(false);
  const [showAddAddr, setshowAddAddr] = useState(false);
  
  const backButton = () => {
        history.push("/");
    };

//   const handleKebabIcon = (event) => {
//         this.setState({
//             Topics: event.target.value
//         })
//     }
//     const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

//     const handleClick = (event) => {
//        setAnchorEl(event.currentTarget);
//    };

//   const handleClose = () => {
//     setAnchorEl(null);
//    };

//   const open = Boolean(anchorEl);
//   const id = open ? 'simple-popover' : undefined;
    

  return (
    <div>
      <div className="header-div-all">
        <HeaderMain />
        <div>
          <img
            onClick={backButton}
            src="/images/Back-Arrow.svg"
            style={{ marginLeft: "172px", marginTop: "133px",}}
          />
          <Back>Back</Back>
        </div>
        
      

      <AddressContainer>
        <GroupContainer className="flex justify-between">
          <addrHead className="addressgrp">Address Group</addrHead>
          <Groupbtn>
            <button onClick={() => setshowGroup(true)}>New Group</button>
          </Groupbtn>
          <Addressbtn>
            <button onClick={() => setshowAddAddr(true)}>Add Address</button>
          </Addressbtn>
        </GroupContainer>

        <AddrContainer>
          <Addrgrp style={{position: "relative"}}>
            <AddressGroupTabs onClick={() => setshowAddress(true)}>
              Top Decision Makers
              <img className="kebabIcon" src = "/images/nft_pic.png" onClick={() => setshowpopOver(true)}></img>
            </AddressGroupTabs>
            { showpopOver && (
            <div className="popOver"> 
                  <p className="popoverItems" onClick={() => (true)}>Rename</p>
                  <p className="popoverItems">Delete</p>
              </div>
            )}
            <AddressGroupTabs>Management</AddressGroupTabs>
            <AddressGroupTabs>Employees</AddressGroupTabs>
          </Addrgrp>
          {showAddress && (
            <GrpContainer>
              {addresses.map((item) => (
                <AddressItem ><img src={item.image}/>{item.address}</AddressItem>
              ))}
            </GrpContainer>
          )}
        </AddrContainer>
        <div></div>  
      </AddressContainer>
      </div>

      
      <div className="footer-all">
        <FooterComponent />
      </div>
    </div>
  );
};

export default AddressGroup;
