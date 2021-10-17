import React from "react";
import {Row, Column} from "simple-flexbox";
import BaseComponent from "../baseComponent";
import Createnewproposal from "./createNewProposal";
import Web3 from "web3";
import Utils from "../../utility";
import AwsService from "../../services/awsService";

const {extname} = require("path");

let masterContractAbi = require("../../common/abis/masterContractAbi.json").abi;

export default class Createproposal extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            proposalDocuments: [""],
            description: "",
            modules: {
                toolbar: [
                    [
                     "strike",
                        "blockquote",
                    ],

                         {header: "1"},
                        {header: "2"},
                        "bold",
                        "italic",
                      [{list: "bullet"}, {list: "ordered"}],
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
            ]
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange=(value)=> {
        this.setState({text: value});
    }

    addDocumentRow=()=> {
        this.state.proposalDocuments.push("")
        this.setState({proposalDocuments: this.state.proposalDocuments});
    }

    deleteDocumentRow=(index)=> {
        this.state.proposalDocuments.splice(index,1);
        this.setState({proposalDocuments: this.state.proposalDocuments});
    }

    uploadFileToS3 = async (file,index) => {
        console.log("inputFile ",index)
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
            this.state.proposalDocuments[index]=responseObj.key;
            this.setState({proposalDocuments: this.state.proposalDocuments})
        } catch (err) {
            Utils.apiFailureToast("Unable to upload document");
        }
    };

    createProposal = async (reqObj) => {
        if (!reqObj.proposalTitle || !reqObj.startDate || !reqObj.endDate || !reqObj.description)
            Utils.apiFailureToast("Please provide all the inputs");
        let web3;
        web3 = new Web3(window.web3.currentProvider);
        window.ethereum.enable();
        web3.eth.getAccounts().then(async (accounts) => {
            if (!accounts || !accounts.length) {
                Utils.apiFailureToast("Please login to Xinpay extension");
                return;
            }
            const acc = accounts[0];
            const contract = new web3.eth.Contract(masterContractAbi, "0x89CfE6bb2a708A336dEBcD8A6DE028146Ab1f841");
            const createProposalResponse = await contract.methods.create_New_Proposal(
                reqObj.proposalTitle,
                new Date(reqObj.startDate).getTime(),
                new Date(reqObj.endDate).getTime(),
                Date.now(),
                reqObj.description,
                JSON.stringify(this.state.proposalDocuments),
                false,
                acc
            ).send({from: acc});
            console.log(createProposalResponse)
            Utils.apiSuccessToast("Proposal Created Successfully");
        })
    };

    render() {
        return (
            <div>
                <Createnewproposal
                    state={this.state}
                    handleChange={this.handleChange}
                    createProposal={this.createProposal}
                    uploadFileToS3={this.uploadFileToS3}
                    addDocumentRow={this.addDocumentRow}
                    deleteDocumentRow={this.deleteDocumentRow}
                />
            </div>
        );
    }
}
