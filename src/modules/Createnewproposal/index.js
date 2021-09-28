import React from "react";
import { Row, Column } from "simple-flexbox";
import BaseComponent from "../baseComponent";
import Createnewproposal from "./createNewProposal";
import Web3 from "web3";
import Utils from "../../utility";
import AwsService from "../../services/awsService";

const { extname } = require("path");

let masterContractAbi = require("../../common/abis/masterContractAbi.json").abi;

export default class Createproposal extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      proposalDocuments: [],
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
  uploadFileToS3 = async (file) => {
    let extName = extname(file.name);
    let fileName =
      "proposal-documents/" + Utils.generateCompanyLogoKey() + extName;
    let mimeType = file.type;
    try {
      let responseObj = await AwsService.uploadFileToS3(
        file,
        fileName,
        mimeType,
        false
      ).catch((err) => {
        console.log(err);
      });
      this.state.proposalDocuments.push(responseObj.key);
    } catch (err) {
      Utils.apiFailureToast("Unable to upload document");
    }
  };

  createProposal = async (reqObj) => {
    console.log("reqObj ", reqObj);
    if (
      !reqObj.proposalTitle ||
      !reqObj.startDate ||
      !reqObj.endDate ||
      !reqObj.description
    )
      Utils.apiFailureToast("Please provide all the inputs");
    let web3;
    web3 = new Web3(window.web3.currentProvider);
    window.ethereum.enable();
    web3.eth.getAccounts().then(async (accounts) => {
      if (!accounts || !accounts.length) {
        Utils.apiFailureToast("Please login to metamask");
      }
      const acc = accounts[0];
      const contract = new web3.eth.Contract(
        masterContractAbi,
        "0x2de1e22971ae076ad311ceac235abd82066862f3"
      );
      const createProposalResponse = await contract.methods
        .create_New_Proposal(
          reqObj.proposalTitle,
          reqObj.endDate,
          reqObj.startDate,
          reqObj.description,
          this.state.proposalDocuments.length
            ? this.state.proposalDocuments[0]
            : "",
          false,
          acc
        )
        .send({ from: acc });
      console.log(createProposalResponse);
      Utils.apiSuccessToast("Proposal Created Successfully");
    });
  };

  render() {
    return (
      <div>
        <Createnewproposal
          state={this.state}
          handleChange={this.handleChange}
          createProposal={this.createProposal}
          uploadFileToS3={this.uploadFileToS3}
        />
      </div>
    );
  }
}
