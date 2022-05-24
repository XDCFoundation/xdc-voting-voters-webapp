import React from "react";
import BaseComponent from "../baseComponent";
import AddressGroupMain from "./addressGroup";
import AddressGroupTabs from "./addressGroupTabs";
import useWindowDimensions from "../../common/WindowDimension";

function AddressGroup() {
const { height, width } = useWindowDimensions();
return (
  <div>
{width > 1024 && (
   <AddressGroupMain/>
)}
{width < 1024 && (
<AddressGroupTabs />
)}
  </div>
)
}
export default AddressGroup;
