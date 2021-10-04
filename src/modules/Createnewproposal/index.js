import React from "react";
import { Row, Column } from "simple-flexbox";
import BaseComponent from "../baseComponent";
import Createnewproposal from "./createNewProposal";

export default class Createproposal extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      description: "",

      modules: {
        toolbar: [
          [
            { header: "1" },
            { header: "2" },
            "bold",
            "italic",
            "strike",
            "blockquote",
          ],

          [{ list: "bullet" }, { list: "ordered" }],
          ["link", "code", "image", "video", "clean", "edit"],
        ],
      },

      formats: [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
      ],
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(value) {
    this.setState({ text: value });
  }

  render() {
    return (
      <div>
        <Createnewproposal
          state={this.state}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}
