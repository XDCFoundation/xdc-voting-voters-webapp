import React from "react";
import BaseComponent from "../baseComponent";
import AddressGroupMain from "./addressGroup";

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