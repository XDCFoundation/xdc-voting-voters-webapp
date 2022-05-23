import React from "react";
import BaseComponent from "../baseComponent";
import AddressGroupMain from "./addressGroup";
import AddressGroupTabs from "./addressGroupTabs";
import useWindowDimensions from "../../common/WindowDimension";

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