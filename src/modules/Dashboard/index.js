import React from "react";
import BaseComponent from "../baseComponent";
import RecentProposal from "./recentProposal";
import Web3 from 'web3';
import moment from "moment";

const {extname} = require('path');

let proposalContractAbi = require('../../common/abis/proposalContractAbi.json').abi;
let masterContractAbi = require('../../common/abis/masterContractAbi.json').abi;

export default class Dashboard extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            proposalDocuments: [],
            proposals: []
        }
    }

    async componentDidMount() {
        const proposalsAddresses = await this.getContractAddresses();
        this.getProposalsData(proposalsAddresses);
    }


    getContractAddresses = async () => {
        let web3;
        web3 = new Web3(window.web3.currentProvider);
        window.ethereum.enable();
        const contract = new web3.eth.Contract(masterContractAbi, "0x2de1e22971ae076ad311ceac235abd82066862f3");
        const createProposalResponse = await contract.methods.created_Proposal_list().call()
        return createProposalResponse;
    }

    getProposalsData = async (addresses) => {
        if (!addresses)
            return;
        let proposals = []
        for (let index = addresses.length - 1; index >= 0; index--) {
            const proposalDetails = await this.getProposalInfoByAddress(addresses[index]);
            proposalDetails["passedVoteCount"] = await this.getPassedVote(addresses[index])
            proposalDetails["failVoteCount"] = await this.getFailedVote(addresses[index])
            proposals.push(proposalDetails)
        }
        proposals.length = 4;
        proposals =  this.parseProposalList(proposals);
        this.setState({proposals})
    }

    parseProposalList =  (proposals) => {
        proposals = proposals.map( proposal => {
            proposal.title = proposal["0"]
            proposal.startDate = proposal["2"]
            proposal.endDate = proposal["1"]
            proposal.postedOn = moment(proposal["2"], "YYYY-M-D").format("DD MMM YYYY")
            proposal.description = proposal["3"]
            proposal.documentURL = proposal["4"]
            proposal.status = this.getStatus(proposal["1"])
            proposal.timeRemaining = this.timeRemaining(proposal["1"], proposal.status)
            proposal.passedVoteCount = proposal.status !== "Open" ? 0 : 0
            proposal.failVoteCount = proposal.status !== "Open" ? 0 : 0
            return proposal;
        })
        return proposals;
    }

    getPassedVote = async (address, status) => {
        let web3;
        web3 = new Web3(window.web3.currentProvider);
        window.ethereum.enable();
        const contract = new web3.eth.Contract(proposalContractAbi, address);
        return await contract.methods.get_yes_voter_list().call();
    }

    getFailedVote = async (address, status) => {
        let web3;
        web3 = new Web3(window.web3.currentProvider);
        window.ethereum.enable();
        const contract = new web3.eth.Contract(proposalContractAbi, address);
        return await contract.methods.get_no_voter_list().call();
    }

    timeRemaining = (date, status) => {
        if (status === "Open") {
            const endTime = moment(date, "YYYY-MM-DD").add(1, 'days');
            return moment.duration(endTime.diff(moment())).humanize()
        }
    }

    getStatus = (endDate) => {
        endDate = moment(endDate, "YYYY-MM-DD").add(1, 'days').unix();
        if (Date.now() < endDate * 1000)
            return "Open"
        return "Passed";
    }

    getProposalInfoByAddress = async (address) => {
        let web3;
        web3 = new Web3(window.web3.currentProvider);
        window.ethereum.enable();
        const contract = new web3.eth.Contract(proposalContractAbi, address);
        const proposalResponse = await contract.methods.proposalInfo().call()
        return proposalResponse;
    }

    render() {
        return (
            <div>
                <RecentProposal
                    proposals={this.state.proposals}
                />
            </div>
        );
    }
}
