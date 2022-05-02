import React from "react";
import BaseComponent from "../baseComponent";
import HeaderMain from "../header/header";
import FooterComponent from "../footer/footerComponent";
import AddressGroupMain from "./addressgroup";

 class AddressGroup extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
       <AddressGroupMain/>
      </div>
    )
  }
}

export default AddressGroup