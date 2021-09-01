import React from "react";
import styled from "styled-components";

import CommunityPage from "./communityPage";
import BaseComponent from "../baseComponent";

export default class Community extends BaseComponent {
  render() {
    return (
      <div>
        <CommunityPage />
      </div>
    );
  }
}
