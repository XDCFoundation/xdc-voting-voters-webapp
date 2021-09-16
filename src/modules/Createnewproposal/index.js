import React from "react";
import { Row, Column } from "simple-flexbox";
import BaseComponent from "../baseComponent";
import Createnewproposal from "./createNewProposal";

export default class Createproposal extends BaseComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Createnewproposal />
      </div>
    );
  }
}
