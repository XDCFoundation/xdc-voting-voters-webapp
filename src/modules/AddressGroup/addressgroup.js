import React, { Component } from 'react'
import BaseComponent from "../baseComponent";
import HeaderMain from "../header/header";
import FooterComponent from "../footer/footerComponent";


 class addressgroup extends Component {
  render() {
    return (
      <div>
          <div className="header-div-all">
          <HeaderMain />
          </div>

          <div>

         </div>

         <div>
         <FooterComponent />
         </div>
 
      </div>
      
    )
  }
}

export default addressgroup