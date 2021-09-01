import React from "react";
import { Row, Column } from "simple-flexbox";
import { makeStyles } from "@material-ui/core/styles";
import BaseComponent from "../baseComponent";
import Createnewproposal from "./createNewProposal";

export default class Createproposal extends BaseComponent {
  // constructor(props) {
  //   super(props);
  //   this.state = { editorHtml: "", theme: "snow" };
  //   this.handleChange = this.handleChange.bind(this);
  // }

  // handleChange(html) {
  //   this.setState({ editorHtml: html });
  // }

  // handleThemeChange(newTheme) {
  //   if (newTheme === "core") newTheme = null;
  //   this.setState({ theme: newTheme });
  // }
  render() {
    return (
      <div>
        <Createnewproposal />
      </div>
    );
  }
}
