import React from "react";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";
import BaseComponent from "../baseComponent";
import ProposalList from "./proposalList";

export default class Listui extends BaseComponent {
  render() {
    return (
      <div>
        <ProposalList />
      </div>
    );
  }
}
