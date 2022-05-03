import React, { Component } from 'react'
import BaseComponent from "../baseComponent";
import HeaderMain from "../header/header";
import FooterComponent from "../footer/footerComponent";
import styled from "styled-components";
import { Styles } from '@material-ui/styles';

const AddressGroupTabs = styled.div
`
width: 100%;
height: 62px;
padding: 0px 0px 0px 23px;
display: flex;
align-items: center;
border: 1px solid #E3E7EB;
font-size: 20px;
font-weight: bold;
letter-spacing: 0px;
color: black;
`
const Groupbtn = styled.div
`
margin-left: auto;
margin-top: 13px;
width: 123px;
height: 32px;
border: 1px solid #2049B9;
border-radius: 4px;
opacity: 1;
display: flex;
 justify-content: space-between;
`

const Addressbtn = styled.div
`
margin-top: 13px;
width: 123px;
height: 32px;
border: 1px solid #2049B9;
border-radius: 4px;
opacity: 1;
margin-right: 40px;
// display: flex;
 justify-content: space-between;
`
const Management = styled.div
`

`
const Employees = styled.div
`

`

const AddrContainer = styled.div
`
display: flex;

`
const GrpContainer = styled.div
`
width: 100%;
height: 61px;
background: #FFFFFF 0% 0% no-repeat padding-box;
opacity: 1;
border: 1px solid #E3E7EB;
`
const Addrgrp = styled.div
`
width: 322px;

`

const AddressContainer = styled.div
 `
width: 1280px;
height: 728px;
border: 1px solid #E3E7EB;
border-radius: 6px;
opacity: 1;
margin-left: 320px;
 `
 const GrouContainer = styled.div
 `
 height: 69px;
 border: 1px solid #E3E7EB;
 display: flex;
 justify-content: space-between;

 `
 
 const AddressGroup = () => {

    
    //  backButton = () => {
    //     history.push("/");
    //   }


    return (
      <div>
         <div className="header-div-all">
         <HeaderMain />
         
         <div>
              <img
                // onClick={backButton}
                src="/images/Back-Arrow.svg" 
                style={{ marginRight: "8px", cursor: "pointer" }}
              />
              {/* <Back>Back</Back> */}

        </div>

         </div>
         
         <AddressContainer>
           <GrouContainer className='flex justify-between'>
               <addrHead className= 'addressgrp'>Address Group</addrHead>
               <Groupbtn>
                   <button>New Group</button>
                </Groupbtn>
                <Addressbtn>
                <button>Add Address</button>    
                </Addressbtn>
           </GrouContainer>

           <AddrContainer>
             <Addrgrp>
             <AddressGroupTabs onClick={() => {this.accounts()}}>Top Decision Makers</AddressGroupTabs>
             <AddressGroupTabs>Management</AddressGroupTabs>
             <AddressGroupTabs>Employees</AddressGroupTabs>
             </Addrgrp>
             <GrpContainer>
             <h2>xdc517f51dea1ab6468ca2192433a58cbeff0482a0b</h2>
             <h2>xdc517f51dea1ab6468ca5411815111cbeff0482a0b</h2>
             <h2>xdc517f51dea1ab6468ca4531313324cbeff0482a0b</h2>
             <h2>xdc517f51dea1ab6468ca845411c6033beff0482a0b</h2>
             </GrpContainer>
         </AddrContainer>

           <div>

           </div>
         </AddressContainer>

         

         <div>
         <FooterComponent />
         </div>
 
      </div>
      
    )
  }



export default AddressGroup