import React from "react";
import styled from "styled-components";
import {Row, Column} from "simple-flexbox";
import BaseComponent from "../baseComponent";
import ProposalList from "./proposalList";
import Utils from "../../utility";
import {searchProposal, proposalList} from "../../services/proposalService";
import {history} from "../../managers/history";

export default class Listui extends BaseComponent {


    constructor(props) {
        super(props);
        this.state = {
            proposalsList: [],
            activePage:1,
            totalProposalsCount:0,
            limit:6
        };
    }

    componentDidMount = () => {
        this.getProposalList();
    }

    getProposalList = async (skip=0) => {
        const reqObj = {"skip": skip, "limit": this.state.limit}
        let [error, proposals] = await Utils.parseResponse(proposalList(reqObj));
        console.log("=== ",proposals)
        this.setState({proposalsList:proposals.proposalList, totalProposalsCount:proposals.countData})
    }

    searchingProposal = async (e) => {
        const reqObj = {"skip": 0, "limit": this.state.limit, proposalTitle: e.target.value}
        let [error, proposals] = await Utils.parseResponse(proposalList(reqObj));
        console.log("=== ",proposals)
        this.setState({proposalsList:proposals.proposalList})
    };

    handlePageChange=(e)=>{
        this.getProposalList((e-1)*this.state.limit)
    }

    proposalRedirect = (address) => {
        history.push({
            pathname: `/proposal-details/${address}`,
        });
    };

    render() {
        return (
            <div>
                <ProposalList
                    state={this.state}
                    searchingProposal={this.searchingProposal}
                    handlePageChange={this.handlePageChange}
                    proposalRedirect={this.proposalRedirect}
                />
            </div>
        );
    }
}
