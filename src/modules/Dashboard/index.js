import React from "react";
import BaseComponent from "../baseComponent";
import RecentProposal from "./recentProposal";
import Web3 from "web3";
import moment from "moment";
import Loader from "../../assets/styles/images/NewLoader.gif";
import Utils from "../../utility";
import {proposalList} from "../../services/proposalService";
import {getTotalVotingAddress} from "../../services/proposalService";

let proposalContractAbi =
    require("../../common/abis/proposalContractAbi.json").abi;
let masterContractAbi = require("../../common/abis/masterContractAbi.json").abi;

export default class Dashboard extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            proposalDocuments: [],
            proposals: [],
            proposalsList: [],
            proposalResponse: [],
            isLoader: false,
            limit: 4,
            wallet: "",

        };
    }

    async componentDidMount() {
        const proposalsAddresses = await this.getContractAddresses();
        // await this.getProposalsData(proposalsAddresses);
        this.setState({isLoader: true});
        this.getProposalList();
       

    }


    getProposalList = async (skip = 0) => {
        const reqObj = {"skip": skip, "limit": this.state.limit}
        let [error, proposals] = await Utils.parseResponse(proposalList(reqObj));
        const updatedList = await this.parseProposalList(proposals?.proposalList)
        this.setState({proposalsList: updatedList})
        // this.setState({ isLoader: false });
    }

    getContractAddresses = async () => {
        if (window.ethereum) {//the error line
            window.web3 = new Web3(window.ethereum);
            try {
                window.ethereum.enable();
                let web3;
                web3 = new Web3(window.web3.currentProvider);
                window.ethereum.enable();
                const contract = new web3.eth.Contract(
                    masterContractAbi,
                    "0xd768065793ab75d9056398c7788b6f7b14121931"
                );
                const createProposalResponse = await contract.methods
                    .created_Proposal_list()
                    .call()
                    .catch((err) => {
                        console.log(err, "====");
                    });
                return  createProposalResponse;
            } catch (err) {
                alert("Something went wrong.");
            }
        } else {
            // Utils.apiFailureToast("Please install XDCPay extension");
        }
    };


    delay = (ms) => new Promise((res) => setTimeout(res, ms));

    getProposalsData = async (addresses) => {
        if (!addresses) return;
        let proposals = [];
        for (let index = addresses.length - 1; index >= 0; index--) {
            const proposalDetails = await this.getProposalInfoByAddress(
                addresses[index]
            );
            proposalDetails["passedVoteCount"] = await this.getPassedVote(
                addresses[index]
            );
            proposalDetails["failVoteCount"] = await this.getFailedVote(
                addresses[index]
            );
            proposalDetails["address"] = addresses[index];
            proposals.push(proposalDetails);
        }
        proposals.length = 4;
        proposals = this.parseProposalList(proposals);
        console.log(proposals, "proposals===");
        this.setState({proposals});
    };



    parseProposalList = async (proposals) => {
        // proposals = proposals.map((proposal) => {
        //     proposal.title = proposal["0"];
        //     proposal.startDate = proposal["1"];
        //     proposal.endDate = proposal["2"];
        //     proposal.postedOn = moment(Number(proposal["3"])).format("DD MMM YYYY");
        //     proposal.description = proposal["4"];
        //     proposal.documentURLs = proposal["5"];
        //     proposal.status = this.getStatus(
        //         Number(proposal["2"]),
        //         proposal.passedVoteCount,
        //         proposal.failVoteCount
        //     );
        //     proposal.timeRemaining = this.timeRemaining(
        //         Number(proposal["2"]),
        //         proposal.status
        //     );
        //     return proposal;
        // });
        if(!window.web3 || !window.web3.currentProvider)
            return proposals;
        let web3;
        web3 = new Web3(window.web3.currentProvider);
        window.ethereum.enable();
        const accounts = await web3.eth.getAccounts();
        if(!accounts || !accounts.length)
            return proposals;
        const addresses = await getTotalVotingAddress();
        let isWhiteListed = false;
        for(let index=0; index< addresses.dataList.length; index++){
            if(addresses.dataList[index].address.toLowerCase() === accounts[0].toLowerCase())
                isWhiteListed = true;
        }
        if(!isWhiteListed)
            return proposals;
        for(let index=0; index< proposals.length; index++){
            proposals[index].title = await this.getProposalTitle(proposals[index].pollingContract)
        }

        return proposals;
    };

    getPassedVote = async (address, status) => {
        let web3;
        web3 = new Web3(window.web3.currentProvider);
        window.ethereum.enable();
        const contract = new web3.eth.Contract(proposalContractAbi, address);
        const count = await contract.methods.get_yes_voter_list().call();
        if (count <= 0) return 0;
        return count.length;
    };

    getFailedVote = async (address, status) => {
        let web3;
        web3 = new Web3(window.web3.currentProvider);
        window.ethereum.enable();
        const contract = new web3.eth.Contract(proposalContractAbi, address);
        const count = await contract.methods.get_no_voter_list().call();
        if (count <= 0) return 0;
        return count.length;
    };

    timeRemaining = (date, status) => {
        if (status === "Open") {
            const endTime = moment(date).unix();
            // return
            return endTime
        }
    };

    getStatus = (endDate, passVotesCount, failVotesCount) => {
        endDate = moment(endDate).add(1, "days").unix();
        if (Date.now() < endDate * 1000) return "Open";
        if (passVotesCount < failVotesCount) return "Failed";
        else return "Passed";
    };

    getProposalInfoByAddress = async (address) => {
        let web3;
        web3 = new Web3(window.web3.currentProvider);
        window.ethereum.enable();
        const contract = new web3.eth.Contract(proposalContractAbi, address);
        const proposalResponse = await contract.methods.proposalInfo().call();
        return proposalResponse;
    };

    getProposalTitle = async(proposalAddress) => {
        let web3;
        web3 = new Web3(window.web3.currentProvider);
        window.ethereum.enable();
        const contract = new web3.eth.Contract(
            masterContractAbi,
            process.env.REACT_APP_MASTER_CONTRACT_ADDRESS//"0xc96b57A8F1A98278007B559Dc8A8B343e3559F6a"
        );
        const accounts = await web3.eth.getAccounts();
        if(!accounts || !accounts.length)
            return false;
        const tx = {from: accounts[0]}
        const createProposalResponse = await contract.methods.get_proposal_details_by_proposal_address(proposalAddress).call(tx).catch((err) => {
            console.log(err, "====");
        });

        if(!createProposalResponse)
            return "";
        console.log("createProposalResponse[0] ",createProposalResponse)
        return createProposalResponse[0];
    }

    render() {
        return (
            <>
                {this.state.isLoader == false ? (
                    <div className="display-flex justify-content-center p-t-50"><img className="load" src={Loader}/></div>

                ) : (
                    <div>
                        <RecentProposal
                            state={this.state}
                            proposals={this.state.proposals}
                            getContractAddresses={this.state.getContractAddresses}
                            getProposalTitle={this.getProposalTitle}
                        />
                    </div>
                )}
            </>
        );
    }
}
