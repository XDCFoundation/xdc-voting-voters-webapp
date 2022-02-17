import React from "react";
import styled from "styled-components";
import {Row, Column} from "simple-flexbox";
import BaseComponent from "../baseComponent";
import ProposalList from "./proposalList";
import Utils from "../../utility";
import { proposalList} from "../../services/proposalService";
import {history} from "../../managers/history";
import moment from 'moment'
import Web3 from "web3";
import {abi as masterContractAbi} from "../../common/abis/masterContractAbi.json";

export default class Listui extends BaseComponent {


    constructor(props) {
        super(props);
        this.state = {
            proposalsList: [],
            activePage: 1,
            totalProposalsCount: 0,
            limit: 6
        };
    }

    componentDidMount = () => {
        this.getProposalList();
    }

    getProposalList = async (skip = 0) => {
        const reqObj = {"skip": skip, "limit": this.state.limit}
        let [error, proposals] = await Utils.parseResponse(proposalList(reqObj));
        console.log("=== ", proposals)
        const updatedList = await this.parseProposalList(proposals?.proposalList)
        this.setState({proposalsList: updatedList, totalProposalsCount: proposals.countData})
    }

    parseProposalList = async (proposals)=>{
        for(let index=0; index< proposals.length; index++){
            proposals[index].title = await this.getProposalTitle(proposals[index].pollingContract)
        }
        return proposals;
    }

    getProposalTitle = async (proposalAddress)=>{
        let web3;
        web3 = new Web3(window.web3.currentProvider);
        window.ethereum.enable();
        const contract = new web3.eth.Contract(
            masterContractAbi,
            "0xc96b57A8F1A98278007B559Dc8A8B343e3559F6a"
        );
        const accounts = await web3.eth.getAccounts();
        if(!accounts || !accounts.length)
            return false;
        const tx = {from: accounts[0]}
        const createProposalResponse = await contract.methods.get_proposal_details_by_proposal_address(proposalAddress).call(tx).catch((err) => {
            console.log(err, "====");
        });
        console.log("createProposalResponse[0] ",createProposalResponse)
        return createProposalResponse[0];
    }

    searchingProposal = async (e) => {
        const reqObj = {"skip": 0, "limit": this.state.limit, proposalTitle: e.target.value}
        let [error, proposals] = await Utils.parseResponse(proposalList(reqObj));
        console.log("=== ", proposals)
        this.setState({proposalsList: proposals.proposalList})
    };

    onStatusChange = async (e) => {
        console.log("+++", e)
        const reqObj = {"skip": 0, "limit": this.state.limit, status: e.target.value}
        let [error, proposals] = await Utils.parseResponse(proposalList(reqObj));
        console.log("=== ", proposals)
        this.setState({proposalsList: proposals.proposalList})
    };

    handlePageChange = (e) => {
        this.getProposalList((e - 1) * this.state.limit)
    }

    proposalRedirect = (address) => {
        history.push({
            pathname: `/proposal-details/${address}`,
        });
        window.scrollTo(0,0);
    };

    onDateChange = async (e) => {
        if (e.length < 2)
            return
        const startTime = moment(e[0].unix * 1000).startOf('day').unix();
        const endTime = moment(e[1].unix * 1000).startOf('day').unix();
        const reqObj = {"skip": 0, "limit": this.state.limit, startTime:startTime*1000, endTime:endTime*1000}
        let [error, proposals] = await Utils.parseResponse(proposalList(reqObj));
        this.setState({proposalsList: proposals.proposalList})
    }

    render() {
        return (
            <div>
                <ProposalList
                    state={this.state}
                    searchingProposal={this.searchingProposal}
                    handlePageChange={this.handlePageChange}
                    proposalRedirect={this.proposalRedirect}
                    onStatusChange={this.onStatusChange}
                    onDateChange={this.onDateChange}
                />
            </div>
        );
    }
}
