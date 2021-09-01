import React from "react";
import { Row, Column } from "simple-flexbox";

import BaseComponent from "../baseComponent";
import Voterslist from "./voterList";

export default class Voter extends BaseComponent {
  render() {
    return (
      <div>
        <Voterslist />
      </div>
    );
  }
}
