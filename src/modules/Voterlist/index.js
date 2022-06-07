import React from "react";
import {Row, Column} from "simple-flexbox";

import BaseComponent from "../baseComponent";
import Voterslist from "./voterList";
import Utils from "../../utility";
import {ProposalService} from "../../services";

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

    getProposalDetails = async () => {
        const address = this.props.location.pathname.replace("/voterslist/", "");
        let [error, proposalDetail] = await Utils.parseResponse(ProposalService.getProposalDetail(address, {})).catch(err => {
            Utils.apiFailureToast("Unable to fetch proposal details");
        });
        let votes = []
        if (proposalDetail && proposalDetail.yesVotes)
            votes = proposalDetail.yesVotes
        if (proposalDetail && proposalDetail.noVotes)
            votes = [...proposalDetail.yesVotes, ...proposalDetail.noVotes]
        this.setState({proposalAddress: address, proposalDetails: proposalDetail,totalVotes:votes, votes, totalVotersCount: votes.length})
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
