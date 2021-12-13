import React from "react";
import {Row, Column} from "simple-flexbox";
import BaseComponent from "../baseComponent";
import CreateNewProposal from "./createNewProposal";
import Web3 from "web3";
import Utils from "../../utility";
import AwsService from "../../services/awsService";
import {addNewProposal} from "../../services/proposalService";
import {uploadFile} from "../../services/fileUploaderService";
import { history } from "../../managers/history";

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
                        {header: "1"},
                        {header: "2"},
                        "bold",
                        "italic",
                        "strike",
                        "blockquote",
                    ],

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
            ],
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (value) => {
        this.setState({text: value});
    };

    addDocumentRow = () => {
        this.state.proposalDocuments.push("");
        this.setState({proposalDocuments: this.state.proposalDocuments});
    };

    deleteDocumentRow = (index) => {
        this.state.proposalDocuments.splice(index, 1);
        this.setState({proposalDocuments: this.state.proposalDocuments});
    };

    uploadFileToS3 = async (file, index) => {
        console.log("file ", file)
        let extName = extname(file.name);
        let mimeType = file.type;
        let fileName = Utils.generateCompanyLogoKey() + extName;

        try {
            const data = new FormData();
            data.append("name", fileName);
            data.append("images", file);
            let responseObj = await uploadFile(data).catch((err) => {
                console.log(err);
            });
            if (!responseObj || !responseObj.length || !responseObj[0].sourceFileName)
                Utils.apiFailureToast("Unable to upload document");
            this.state.proposalDocuments[index] = responseObj[0].sourceFileName;
            this.setState({proposalDocuments: this.state.proposalDocuments});
        } catch (err) {
            Utils.apiFailureToast("Unable to upload document");
        }
    };

    createProposal = async (reqObj) => {
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
                "0x85fe7c9734585a494b03c1a450ab0e9b79557cc4"
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
                .send({from: acc}, async (err, transactionHash) => {
                    if (err || !transactionHash) {
                        return;
                    }
                    const res = await this.getTransactionReceipt(transactionHash, reqObj);
                    if (res) {
                        const addresses = await this.getContractAddresses();
                        this.addProposalInDatabase(reqObj, addresses[addresses.length - 1]);
                        Utils.apiSuccessToast("Proposal Created Successfully");
                        history.push('/');
                    }
                })
            // .then(async (res) => {
            //   console.log(res);
            //   Utils.apiSuccessToast("Proposal Created Successfully");
            //   const addresses = await this.getContractAddresses();
            //   this.addProposalInDatabase(reqObj, addresses[addresses.length - 1]);
            // });
            Utils.apiSuccessToast("Proposal creation is in progress");
        });
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
            proposalTitle: reqObj.proposalTitle,
            startDate: new Date(reqObj.startDate).getTime(),
            endDate: new Date(reqObj.endDate).getTime(),
            addedOn: Date.now(),
            description: reqObj.description,
            proposalDocuments: this.state.proposalDocuments,
            pollingContract: _contractAddress,
            status: false,
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
            "0x85fe7c9734585a494b03c1a450ab0e9b79557cc4"
        );
        const createProposalResponse = await contract.methods
            .created_Proposal_list()
            .call()
            .catch((err) => {
                console.log(err, "====");
            });
        return createProposalResponse;
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
                />
            </div>
        );
    }
}
