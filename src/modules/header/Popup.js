import React from "react";
import Buttons from "react-multi-date-picker/components/button";

function Popup(props) {
  console.log({props})
  return (props.trigger) ? (
    <div className="popup">
      <div className="popup-profile">

      <img className="img-cross"  src="/images/Cross_X.svg" onClick={()=> props.setTrigger(false)}/>
        {/* {props.groupName? <button className="delete-btn" onClick={() => props.deleteGroupHandler(props.groupName)}>
          Delete
        </button> :   <button className="delete-bttn" onClick={() => props.deleteAddrHandler(props.address)}>
          Delete
          </button>} */}

        { props.children }
      </div>
    </div>
  ) : (
    ""
  );
}
export default Popup;
