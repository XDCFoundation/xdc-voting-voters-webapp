import React from "react";
import Buttons from "react-multi-date-picker/components/button";

function Popup(props) {
  console.log({props})
  return (props.trigger) ? (
    <div className="popup">
      <div className="popup-inner">
      <button className="cancel-btn" onClick={()=> props.setTrigger(false)}>
          Cancel
        </button>
        {props.groupName? <button className="delete-btn" onClick={() => props.deleteGroupHandler(props.groupName)}>
          Delete
        </button> :   <button className="delete-bttn" onClick={() => props.deleteAddrHandler(props.address)}>
          Delete
          </button>}
     
   
        { props.children }
      </div>
    </div>
  ) : (
    ""
  );
}
export default Popup;
