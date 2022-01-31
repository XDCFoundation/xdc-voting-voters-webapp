import React from "react";
import styled from "styled-components";
import {Row, Column} from "simple-flexbox";
import BaseComponent from "../baseComponent";
import ProposalList from "./proposalList";
import Utils from "../../utility";
import { proposalList} from "../../services/proposalService";
import {history} from "../../managers/history";
import moment from 'moment'

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
        this.setState({proposalsList: proposals.proposalList, totalProposalsCount: proposals.countData})
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
