import React from "react";
import BaseComponent from "../baseComponent";
import FooterComponent from "../footer/footerComponent";
import AddressGroupMain from "./addressgroup";
import HeaderComponent from "./headerComponent";

 class AddressGroup extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
       <HeaderComponent />
       <AddressGroupMain/>
      </div>
    )
  }
}

export default AddressGroup