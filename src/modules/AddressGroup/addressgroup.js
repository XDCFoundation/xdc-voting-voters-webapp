import React, { useState } from "react";
import BaseComponent from "../baseComponent";
import HeaderMain from "../header/header";
import FooterComponent from "../footer/footerComponent";
import styled from "styled-components";
import { Styles } from "@material-ui/styles";
import { history } from "../../managers/history";
import { white } from "material-ui/styles/colors";
import HeaderComponent from "./headerComponent";

const AddressGroupTabs = styled.div`
  width: 100%;
  height: 62px;
  padding: 0px 15px 0px 23px;
  display: flex;
  align-items: center;
  border: 1px solid #e3e7eb;
  font-size: 20px;
  cursor: pointer;
  letter-spacing: 0px;
  color: black;
  justify-content: space-between;
  background-color: ${(props)=> props.activeColor ? '#2149B9' : 'white' };
  color: ${(props)=> props.activeColor ? 'white' : 'black' };
  position: relative;
  `;

const Groupbtn = styled.div`
  margin-left: 741px;
  margin-top: 13px;
  cursor: pointer;
  height: 32px;
  opacity: 1;
  display: flex;
  justify-content: space-between;
`;

const Addressbtn = styled.div`
  margin-top: 13px;
  cursor: pointer;
  height: 32px;
  opacity: 1;
  margin-right: 40px;
  display: flex;
  justify-content: space-between;
`;

const AddButton = styled.button`
all: unset;
text-align: center;
width: 123px;
height: 32px;
color: #2149B9;
font-size: 18px;
letter-spacing: 0px;
background: #FFFFFF 0% 0% no-repeat padding-box;
border: 1px solid #2049B9;
border-radius: 4px;
opacity: 1;
`;

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

const AddressContainer = styled.div`
  margin-top: 21px;
  width: 1280px;
  height: 728px;
  border: 1px solid #e3e7eb;
  border-radius: 6px;
  opacity: 1;
  margin-left: 300px;
  background-color: #ffffff;
`;
const GroupContainer = styled.div`
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

  display: flex;
  // justify-content: space-between;
  position: relative;

`;

const Back = styled.div`
  margin-left: 333px;
  margin-top: -23px;
  font-family: "Inter", sans-serif;
  font-size: 17px;
  color: #ffffff;
`;
const IconImg = styled.img`
 margin:0 17.75px 0 0;
 width: 27px;
 height: 27px;
`;
const AddressDiv = styled.div`
 color: #2A2A2A;
 font-size:16px;
 letter-spacing: 0px;
 opacity: 1;
 font-family: "Inter", sans-serif;

`;
const RenameImg = styled.div`
 width: 20px' 
 height: 20px; 
 margin-left: -80px;
`;
const RenameImgNull = styled.div`
width: 20px' 
 height: 20px; 
 margin-left: 10px;
`;

const addressesList = [
  {
    image: "/images/nft_pic.png",
    address: "xdc517f51dea1ab6468ca2192433a58cbeff0482a0b",
    groupType: "Top Decision Makers",
  },
  {
    image: "/images/nft_pic.png",
    address: "xdc517f51dea1ab6468ca2192433a58cbeff0482a0b",
    groupType: "Top Decision Makers",
  },
  {
    image: "/images/nft_pic.png",
    address: "xdc517f51dea1ab6468ca2192433a58cbeff0482a0b",
    groupType: "Top Decision Makers",
  },
  {
    image: "/images/nft_pic.png",
    address: "xdc517f51dea1ab6468ca2192433a58cbeff0482a0b",
    groupType: "Top Decsion Makers",
  },

  {
    image: "/images/nft_pic.png",
    address: "xdc517f51dea1ab6468ca2192433a58cbeff0482a0b",
    groupType: "Management",
  },
  {
    image: "/images/nft_pic.png",
    address: "xdc517f51dea1ab6468ca2192433a58cbeff0482a0b",
    groupType: "Management",
  },
  {
    image: "/images/nft_pic.png",
    address: "xdc517f51dea1ab6468ca2192433a58cbeff0482a0b",
    groupType: "Management",
  },
  {
    image: "/images/nft_pic.png",
    address: "xdc517f51dea1ab6468ca2192433a58cbeff0482a0b",
    groupType: "Management",
  },
  {
    image: "/images/nft_pic.png",
    address: "xdc517f51dea1ab6468ca2192433a58cbeff0482a0b",
    groupType: "Employees",
  },
  {
    image: "/images/nft_pic.png",
    address: "xdc517f51dea1ab6468ca2192433a58cbeff0482a0b",
    groupType: "Employees",
  },

  {
    image: "/images/nft_pic.png",
    address: "xdc517f51dea1ab6468ca2192433a58cbeff0482a0b",
    groupType: "Employees",
  },
  {
    image: "/images/nft_pic.png",
    address: "xdc517f51dea1ab6468ca2192433a58cbeff0482a0b",
    groupType: "Employees",
  },
  {
    image: "/images/nft_pic.png",
    address: "xdc517f51dea1ab6123456789433a58cbeff0482a0b",
    groupType: "Employees",
  },
];

const groupList = [
  {
    groupName: "Top Decision Makers",
    image: "/images/nft_pic.png",
  },
  {
    groupName: "Management",
    image: "/images/nft_pic.png",
  },
  {
    groupName: "Employees",
    image: "/images/nft_pic.png",
  },
];

const AddressGroup = () => {
  
  const [addressNamelist, setaddressNamelist] = React.useState(groupList);
  
  const [addGroupInput, setAddGroupInput] = useState("New Group");
  const [renameGroup, setRenameGroup] = useState("");
  const [showRenameInput, setShowRenameInput] = useState(null);

  const [selectedGroupAddress, setSeletedGroupAddresses] = useState("Top Decision Makers");
  const [addAddress, setAddAddress] = React.useState(addressesList);
  
  const [addAddressesInput, setaddAddressesInput] = useState("Add Address");
  const [showAddAddressesInput, setShowAddAddressesInput] = useState(false);
  
  const [togglePopPop, settogglePopPop] = useState(null);

  const addgrouphandler = () => {
    setaddressNamelist([...addressNamelist, { groupName: addGroupInput },
    ])
  };
    const addaddresshandler = () => {
    setAddAddress([...addAddress, { address: addAddressesInput, groupType: selectedGroupAddress, image: "/images/nft_pic.png"  },
    ])
    setShowAddAddressesInput(!showAddAddressesInput)
  };
  
  const toggleRenameInputHandler = (index) => {
    if(showRenameInput === index)
      {setShowRenameInput(null)}
    else
  {setShowRenameInput(index)}
  }

  const togglePopPophandler = (index) => {
    if(togglePopPop === index)
      {settogglePopPop(null)}
    else
  {settogglePopPop(index)}
  }
  console.log(selectedGroupAddress);

  const backButton = () => {
    history.push("/");
  };

  return (
    <div>
      <div style={{ marginTop: "-250px" }}>
        <div>
          <img
            onClick={backButton}
            src="/images/Back-Arrow.svg"
            style={{ marginLeft: "300px", marginTop: "133px" }}
          />
          <Back>Back</Back>
        </div>

        <AddressContainer>
          <GroupContainer className="flex justify-between">
            <addrHead className="addressgrp">Address Group</addrHead>
            <Groupbtn>
              <img src={addgrouphandler.image} />
              <AddButton  onClick={addgrouphandler}>New Group</AddButton>
            </Groupbtn>
            <Addressbtn>
              <AddButton onClick={() =>{ setShowAddAddressesInput(!showAddAddressesInput)}}>
                Add Address
              </AddButton>
            </Addressbtn>
          </GroupContainer>

          <AddrContainer>
            <Addrgrp style={{ position: "relative" }}>
              {addressNamelist.map((item, index) => (
               <>
               {
                 showRenameInput === index ? <div>
                   <input type= 'text' className="groupInput" onChange={e => setRenameGroup(e.target.value)}/>
                   <RenameImg 
                         onClick= {() => {item['groupName']= renameGroup; toggleRenameInputHandler(null) }} 
                         src="/images/green_correct.png"
                         />
                     <RenameImgNull 
                         onClick={() => setShowRenameInput(null)}
                         src="/images/red_cancel.png"
                         />
                 </div> :  <AddressGroupTabs
                  onClick={() => setSeletedGroupAddresses(item.groupName)}  
                  activeColor = {selectedGroupAddress=== item.groupName}
                >
                  {item.groupName}
                  <img onClick = {() => togglePopPophandler(index)}  src="/images/Option_Vertical.png" />
                  {togglePopPop === index && (
                <div className="popOver">
                  <p onClick={() => toggleRenameInputHandler(index)} className="popoverItems">Rename</p>

                  <p className="popoverItems">Delete</p>
                </div>
              )}
                </AddressGroupTabs>
               }
               </>
              ))}
            </Addrgrp>

            <GrpContainer>
              <>
                {showAddAddressesInput && (
                  <div>
                     <input type="text" className="addressInput" onChange = {(e) => setaddAddressesInput(e.target.value)} />
                     <img 
                         onClick={addaddresshandler} 
                         src="/images/green_correct.png"
                         style={{ width: "30px", height: "30px" , marginLeft: "10px" }}  
                         />
                     <img
                         onClick={() => setShowAddAddressesInput(!showAddAddressesInput)}
                         src="/images/red_cancel.png"
                         style={{ width: "30px", height: "30px" , marginLeft: "15px" }}  
                         />
                  </div>
                )}
                {addAddress
                  .filter((item) => item.groupType === selectedGroupAddress)
                  .map((item) => (
                    <AddressItem
                    >
                      <IconImg src={item.image} />
                      <AddressDiv>{item.address}</AddressDiv> 
                    </AddressItem>
                  ))}
              </>
            </GrpContainer>
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
