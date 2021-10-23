import React from 'react'
import styled from 'styled-components'
import BaseComponent from "../baseComponent";
import Xvdgovernance from './xvdGovernance';

export default class Governance extends BaseComponent {
  componentDidMount() {
    
  }
  render() {
    return (
      <div onClick={() => window.scrollTo({top: 0,behavior:"smooth",})}>
        <Xvdgovernance/>
      </div>
    );
  }
}