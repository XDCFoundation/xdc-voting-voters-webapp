import React from "react";
import BaseComponent from "../baseComponent";
import AddressGroup from "./addressGroup";
import AddressGroupTabs from "./addressGroupTabs";
import useWindowDimensions from "../../common/WindowDimension";

function AddressGroupMain() {
const { height, width } = useWindowDimensions();
return (
  <>
  <div>
{width >= 1024 && (
   <AddressGroup/>
)}
{width < 1024 && (
<AddressGroupTabs />
)}
  </div></>
)
}
export default AddressGroupMain;
