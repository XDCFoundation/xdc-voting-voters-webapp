import React from "react";
import BaseComponent from "../baseComponent";
import Loader from "../../assets/styles/images/NewLoader.gif";
import {useParams} from "react-router-dom";
import Utils from "../../utility";
import {ProposalService} from "../../services";
import {history} from "../../managers/history";
import ProposalComponent from "./proposalDetailsComponent"
import Web3 from "web3";
import {abi as proposalContractAbi} from "../../common/abis/proposalContractAbi.json";
import {castVotingProposal, getTotalVotingAddress} from "../../services/proposalService";
import {getSignedUrlService} from "../../services/fileUploaderService";

export default class ProposalDetails extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            proposalAddress: "",
            proposalDetails: {},
            isButtonClicked: false,
            open: false,
            isAllowedToVoting: false
        };
    }

    async componentDidMount() {
        this.getProposalDetails();
        this.isUserAllowedForVoting()
    }

    isUserAllowedForVoting = ()=>{
        let web3;
        web3 = new Web3(window.web3.currentProvider);
        console.log(window.web3.currentProvider);
        window.ethereum.enable();
        web3.eth.getAccounts().then(async accounts => {
            if (!accounts || !accounts.length) {
                Utils.apiFailureToast("Wallet is not connected")
                return;
            }
            const addresses = await getTotalVotingAddress();
            let isAllowedToVoting = false
            addresses.dataList.map(address => {
                if (address.address === accounts[0]) {
                    if (address.permission.allowVoting === true) {
                        this.setState({isAllowedToVoting: true})
                    }
                }
            })
        });
    }

    getProposalDetails = async () => {
        const address = this.props.location.pathname.replace("/proposal-details/", "");
        let [error, proposalDetail] = await Utils.parseResponse(ProposalService.getProposalDetail(address, {})).catch(err => {
            Utils.apiFailureToast("Unable to fetch proposal details");
        });
        if (proposalDetail.endDate > Date.now()) {
            proposalDetail.status = "Open"
            const isVoted = await this.isAlreadyVoted(proposalDetail)
            console.log("sdfasdv", isVoted)
            if (isVoted)
                this.setState({isButtonClicked: true})
        } else {
            this.setState({isButtonClicked: true})
        }
        proposalDetail.proposalDocumentsUrl = await this.getSignedUrls(proposalDetail.proposalDocuments)
        console.log("proposalDetail ",proposalDetail)
        this.setState({proposalAddress: address, proposalDetails: proposalDetail})
    }

    getSignedUrls = async (documents)=>{
        const responseObj = {}
        documents.map(async key => {
            const url = await getSignedUrlService(key).catch(err => console.log(err))
            console.log(url)
            responseObj[key] = url;
        })
        return responseObj
    }

    isAlreadyVoted = async (proposalDetail) => {
        let web3;
        web3 = new Web3(window.web3.currentProvider);
        window.ethereum.enable();
        const accounts = await web3.eth.getAccounts()
        if (!accounts || !accounts.length) {
            Utils.apiFailureToast("Please login to Xin pay extension");
            return;
        }
        let isVoted = false;
        proposalDetail.yesVotes.map(vote => {
            if (accounts[0] === vote.voterAddress)
                isVoted = true
        })

        proposalDetail.noVotes.map(vote => {
            if (accounts[0] === vote.voterAddress)
                isVoted = true
        })
        return isVoted;
    }

    handleClickVoter = () => {
        history.push("/voterslist/"+this.state.proposalAddress);
    };

    backButton = () => {
        history.push("/");
    };

    castProposalVote = async (isSupport) => {
        if(!this.state.isAllowedToVoting) {
            Utils.apiFailureToast("You are not allowed to vote")
            return;
        }
        let web3;
        web3 = new Web3(window.web3.currentProvider);
        console.log(window.web3.currentProvider);
        window.ethereum.enable();
        web3.eth.getAccounts().then(async (accounts) => {
            if (!accounts || !accounts.length) {
                Utils.apiFailureToast("Please login to Xin pay extension");
                return;
            }
            const contract = new web3.eth.Contract(proposalContractAbi, this.state.proposalAddress);
            const acc = accounts[0];
            const castProposalResponse = await contract.methods.cast_vote_for_proposal(true, Date.now()).send({from: acc}).catch((err) => {
                console.log(err, "Error in Vote cast");
            });
            const reqData = {
                pollingContract: this.state.proposalAddress,
                voterAddress: acc,
                support: isSupport
            };
            this.addProposalToDatabase(reqData)
            return castProposalResponse;
        });
    };

    addProposalToDatabase = async (reqData) => {
        const response = await castVotingProposal(reqData).catch(err => console.log(err));
        this.getProposalDetails()
    }

    handleClose = () => {
        this.setState({open: false})
    }

    render() {
        return <ProposalComponent
            state={this.state}
            handleClickVoter={this.handleClickVoter}
            backButton={this.backButton}
            castProposalVote={this.castProposalVote}
        />
    }
}
