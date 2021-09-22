import React from "react";
import { Row, Column } from "simple-flexbox";
import BaseComponent from "../baseComponent";
import Createnewproposal from "./createNewProposal";
import Web3 from 'web3';
let masterContractAbi = require('../../common/abis/masterContractAbi.json').abi;

export default class Createproposal extends BaseComponent {
  constructor(props) {
    super(props);
  }

  createProposal = async (reqObj)=>{
    let web3;
    web3 = new Web3(window.web3.currentProvider);
    window.ethereum.enable();
    web3.eth.getAccounts().then(async (accounts) => {
      const acc = accounts[0];
      console.log(accounts,"errAcc");
      const contract = new web3.eth.Contract(masterContractAbi, "0x2de1e22971ae076ad311ceac235abd82066862f3");
      const createProposalResponse = await contract.methods.create_New_Proposal(
          "testTitle",
          "12/12/21",
          "12/10/21",
          "Test desc",
          "doc url",
          false,
          acc
      ).send({from:acc});
      console.log("createProposalResponse ",createProposalResponse)
    })
  }

  render() {
    return (
      <div>
        <Createnewproposal
            createProposal={this.createProposal}/>
      </div>
    );
  }
}
