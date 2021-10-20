import React from "react";
import BaseComponent from "../baseComponent";
import Loader from "../../assets/styles/images/NewLoader.gif";
import { useParams } from "react-router-dom";
import Utils from "../../utility";
import {ProposalService} from "../../services";
import {history} from "../../managers/history";
import ProposalComponent from "./proposalDetailsComponent"

export default class ProposalDetails extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            proposalAddress:"",
            proposalDetails:{}
        };
    }

    async componentDidMount() {
        this.getProposalDetails();
    }

    getProposalDetails = async ()=>{
        const address = this.props.location.pathname.replace("/proposal-details/","");
        let [error, proposalDetail] = await Utils.parseResponse(ProposalService.getProposalDetail(address, {})).catch(err => {
            Utils.apiFailureToast("Unable to fetch proposal details");
        });
        this.setState({proposalAddress:address, proposalDetails:proposalDetail})
    }

    handleClickVoter = () => {
        history.push("/voterslist");
    };

    backButton = () => {
        history.push("/");
    };

    render() {
        return <ProposalComponent
          state={this.state}
          handleClickVoter={this.handleClickVoter}
          backButton={this.backButton}
         />
    }
}
