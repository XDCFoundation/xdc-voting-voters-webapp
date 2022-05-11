import React from "react";
import BaseComponent from "../baseComponent";
import FaqComponent from "./xvdFaq";

class FAQ extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <FaqComponent />
      </div>
    );
  }
}

export default FAQ;
