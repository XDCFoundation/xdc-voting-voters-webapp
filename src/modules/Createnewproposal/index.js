import React from "react";
import BaseComponent from "../baseComponent";
import CreateNewProposal from "./createNewProposal";
import Web3 from "web3";
import Utils from "../../utility";
import { addNewProposal } from "../../services/proposalService";
import { uploadFile } from "../../services/fileUploaderService";
import { history } from "../../managers/history";


const { extname } = require("path");

let masterContractAbi = require("../../common/abis/masterContractAbi.json").abi;

export default class Createproposal extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      proposalDocuments: [""],
      proposalDocumentsName: [],
      description: "",
      open: false,

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
          ["edit"],
          // ["link", "code", "image", "video", "clean", "edit"],
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

  handleChange = (value) => {
    this.setState({ text: value });
  };

  reloadPage = () => {
    window.location.reload();
  };

  addDocumentRow = () => {
    this.state.proposalDocuments.push("");
    this.setState({ proposalDocuments: this.state.proposalDocuments });
  };

  // proposal load
  deleteDocumentRow = (index, name) => {
    console.log(index, 'hello index', name)
    this.state.proposalDocuments.splice(index, 1);
    this.state.proposalDocumentsName.splice(index ,1)
    // console.log(this.state.proposalDocuments, 'jiii haa')
    this.setState({ proposalDocuments: this.state.proposalDocuments , proposalDocumentsName: this.state.proposalDocumentsName});
  };

  uploadFileToS3 = async (file, index, setUploadBars, uploadBars) => {
    let extName = extname(file.name);
    let fileName = Utils.generateCompanyLogoKey() + extName;
    try {
      const data = new FormData();
      data.append("fileName", file.name);
      data.append("files", file);
      let responseObj = await uploadFile(data).catch((err) => {
        console.log(err);
      });
      console.log("responseObj+++ ", responseObj);
      // if (!responseObj || !responseObj.length || !responseObj[0].sourceFileName)
      if (!responseObj){
        this.state.proposalDocumentsName[index] = undefined;
        Utils.apiFailureToast("Unable to upload document");
      } else{
        this.state.proposalDocuments[index] = responseObj;
        this.state.proposalDocumentsName[index] = file.name;
        this.setState({ proposalDocuments: this.state.proposalDocuments });

        setUploadBars([...uploadBars, file.name])
      }
      
    } catch (err) {
      this.state.proposalDocumentsName[index] = undefined;
      Utils.apiFailureToast("Unable to upload document");
    }
  };

  // *

  createProposal = async (reqObj) => {
    this.setState({ open: true });
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
        Utils.apiFailureToast("Please login to XDCPay extension");
        return;
      }
      const acc = accounts[0];
      const contract = new web3.eth.Contract(
        masterContractAbi,
        process.env.REACT_APP_MASTER_CONTRACT_ADDRESS //"0xc96b57A8F1A98278007B559Dc8A8B343e3559F6a"
      );
      contract.methods
        .create_New_Proposal(
          reqObj.proposalTitle,
          new Date(reqObj.startDate).getTime(),
          new Date(reqObj.endDate).getTime(),
          Date.now(),
          reqObj.description,
          JSON.stringify(this.state.proposalDocuments),
          false,
          acc
        )
        .send({ from: acc }, async (err, transactionHash) => {
          if (err || !transactionHash) {
            this.setState({ open: false });
            return;
          }
          const res = await this.getTransactionReceipt(transactionHash, reqObj);
          if (res) {
            this.setState({ open: true });
            const addresses = await this.getContractAddresses();

            this.addProposalInDatabase(reqObj, addresses[addresses.length - 1]);

            // Utils.apiSuccessToast("Proposal Created Successfully");

            // this.setState({open:true})

            history.push("/");
          }

          this.setState({ open: true });
        });

      // .then(async (res) => {
      //   console.log(res);
      //   Utils.apiSuccessToast("Proposal Created Successfully");
      //   const addresses = await this.getContractAddresses();
      //   this.addProposalInDatabase(reqObj, addresses[addresses.length - 1]);
      // });
      // Utils.apiSuccessToast("Proposal creation is in progress");
      // this.setState({open:true})
    });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  delay = (ms) => new Promise((res) => setTimeout(res, ms));

  getTransactionReceipt = async (hash) => {
    let web3;
    web3 = new Web3(window.web3.currentProvider);
    let count = 0;
    while (true) {
      count++;
      const receipt = await web3.eth.getTransactionReceipt(hash);
      if (receipt !== null || count > 10) {
        return true;
      }
      await this.delay(3000);
    }
  };

  addProposalInDatabase = async (reqObj, _contractAddress) => {
    const obj = {
      // proposalTitle: reqObj.proposalTitle,
      startDate: new Date(reqObj.startDate).getTime(),
      endDate: new Date(reqObj.endDate).getTime(),
      addedOn: Date.now(),
      // description: reqObj.description,
      // proposalDocuments: this.state.proposalDocuments,
      pollingContract: _contractAddress,
      // status: false,
    };
    const response = await addNewProposal(obj).catch((err) => {
      console.log(err);
    });
  };

  getContractAddresses = async () => {
    let web3;
    web3 = new Web3(window.web3.currentProvider);
    console.log(window.web3.currentProvider);
    window.ethereum.enable();
    const contract = new web3.eth.Contract(
      masterContractAbi,
      process.env.REACT_APP_MASTER_CONTRACT_ADDRESS //"0xc96b57A8F1A98278007B559Dc8A8B343e3559F6a"
    );
    const accounts = await web3.eth.getAccounts();
    if (!accounts || !accounts.length) {
      // Utils.apiFailureToast("Please login to XDCPay extension");
      return;
    }
    const tx = { from: accounts[0] };
    const createProposalResponse = await contract.methods
      .created_Proposal_list()
      .call(tx)
      .catch((err) => {
        console.log(err, "====");
      });
    console.log("createProposalResponse ", createProposalResponse);
    return await createProposalResponse;
  };

  render() {
    return (
      <div>
        <CreateNewProposal
          state={this.state}
          handleChange={this.handleChange}
          createProposal={this.createProposal}
          uploadFileToS3={this.uploadFileToS3}
          addDocumentRow={this.addDocumentRow}
          deleteDocumentRow={this.deleteDocumentRow}
          handleClose={this.handleClose}
        />
      </div>
    );
  }
}
