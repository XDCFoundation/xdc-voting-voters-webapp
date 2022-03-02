import React from "react";
import {Row, Column} from "simple-flexbox";

import BaseComponent from "../baseComponent";
import Voterslist from "./voterList";
import Utils from "../../utility";
import {ProposalService} from "../../services";
import {abi as masterContractAbi} from "../../common/abis/masterContractAbi.json";
import Web3 from "web3";
import {abi as proposalContractAbi} from "../../common/abis/proposalContractAbi.json";

export default class Voter extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            proposalAddress: "",
            proposalDetails: {},
            votes: [],
            totalVotes:[],
            activePage:1,
            totalVotersCount:0,
            itemsPerPage:10
        };
    }

    async componentDidMount() {
        this.getProposalDetails();
    }

    // getProposalDetails = async () => {
    //     const address = this.props.location.pathname.replace("/voterslist/", "");
    //     let [error, proposalDetail] = await Utils.parseResponse(ProposalService.getProposalDetail(address, {})).catch(err => {
    //         Utils.apiFailureToast("Unable to fetch proposal details");
    //     });
    //     let votes = []
    //     if (proposalDetail && proposalDetail.yesVotes)
    //         votes = proposalDetail.yesVotes
    //     if (proposalDetail && proposalDetail.noVotes)
    //         votes = [...proposalDetail.yesVotes, ...proposalDetail.noVotes]
    //     this.setState({proposalAddress: address, proposalDetails: proposalDetail,totalVotes:votes, votes, totalVotersCount: votes.length})
    // }
    fetchProposalDetailsFromDB = async (address) => {
        let [error, proposalDetailFromDB] = await Utils.parseResponse(ProposalService.getProposalDetail(address, {})).catch(err => {
            Utils.apiFailureToast("Unable to fetch proposal details");
            throw err
        });
        return proposalDetailFromDB;
    }

    isAlreadyVoted = async (proposalAddress) => {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            try {
                window.ethereum.enable();
                let web3;
                web3 = new Web3(window.web3.currentProvider);
                const accounts = await web3.eth.getAccounts()
                if (!accounts || !accounts.length) {
                    return;
                }
                const contract = new web3.eth.Contract(
                    proposalContractAbi,
                    proposalAddress
                );
                const tx = {from: accounts[0]}
                const yesVotersList = await contract.methods.get_yes_voter_list().call(tx).catch((err) => {
                    console.log(err, "====");
                });
                const noVotersList = await contract.methods.get_no_voter_list().call(tx).catch((err) => {
                    console.log(err, "====");
                });
                if ((!yesVotersList || !yesVotersList.length) && (!noVotersList || !noVotersList.length))
                    return false;

                this.setState({yesVotersList, noVotersList})
                let isVoted = false;
                yesVotersList.map(address => {
                    if (accounts[0] === address)
                        isVoted = true
                })

                noVotersList.map(address => {
                    if (accounts[0] === address)
                        isVoted = true
                })
                return isVoted;

            } catch (err) {
                alert("Something went wrong.");
            }
        } else {
            Utils.apiFailureToast("Please install XDCPay Extension");
        }
    }

    getProposalDetails = async () => {
        const address = this.props.location.pathname.replace("/voterslist/", "");
        // let [error, proposalDetailFromDB] = await Utils.parseResponse(ProposalService.getProposalDetail(address, {})).catch(err => {
        //     Utils.apiFailureToast("Unable to fetch proposal details");
        // });
        const proposalDetailFromDB = await this.fetchProposalDetailsFromDB(address).catch(err => {throw err})

        let web3;
        web3 = new Web3(window.web3.currentProvider);
        window.ethereum.enable();
        const contract = new web3.eth.Contract(
            masterContractAbi,
            "0xc96b57A8F1A98278007B559Dc8A8B343e3559F6a"
        );
        const accounts = await web3.eth.getAccounts();
        const tx = {from: accounts[0]}
        const createProposalResponse = await contract.methods.get_proposal_details_by_proposal_address(address).call(tx).catch((err) => {
            console.log(err, "====");
        });
        const proposalDetail = {...proposalDetailFromDB};
        if (!createProposalResponse)
            return;

        proposalDetail.proposalTitle = createProposalResponse[0];
        document.title = proposalDetail.proposalTitle + " | XDC Governance";
        proposalDetail.startDate = Number(createProposalResponse[1]);
        proposalDetail.endDate = Number(createProposalResponse[2]);
        proposalDetail.description = createProposalResponse[4];
        proposalDetail.proposalDocuments = JSON.parse(createProposalResponse[5]);
        proposalDetail.pollingContract = proposalDetailFromDB.pollingContract;
        proposalDetail.status = createProposalResponse[6];
        proposalDetail.createdOn = proposalDetailFromDB.createdOn;
        proposalDetail.updatedOn = proposalDetailFromDB.updatedOn;
        if (!proposalDetail.proposalDocuments[0])
            proposalDetail.proposalDocuments = []

        if (proposalDetail.endDate > Date.now()) {
            proposalDetail.status = "Open"
            const isVoted = await this.isAlreadyVoted(address)
            if (isVoted)
                this.setState({isButtonClicked: true})
        } else {
            this.setState({isButtonClicked: true})
        }
        // const proposalDocumentsUrl = await this.getSignedUrls(proposalDetail.proposalDocuments)
        this.setState({
            proposalAddress: address,
            proposalDetails: proposalDetail,
            proposalDocumentsUrl: proposalDetail.proposalDocuments
           
        })
    }

    handlePageChange = (page)=>{
        console.log(page,"+++")
    }

    render() {
        return (
            <div>
                <Voterslist
                    state={this.state}
                    handlePageChange={this.handlePageChange}
                />
            </div>
        );
    }
}
