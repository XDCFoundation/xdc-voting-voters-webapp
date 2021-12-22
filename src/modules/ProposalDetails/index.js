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
import moment from "moment";

export default class ProposalDetails extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            proposalAddress: "",
            proposalDetails: {},
            isButtonClicked: false,
            open: false,
            isAllowedToVoting: false,
            proposalDocumentsUrl:[],
            copied: "",
        };
    }

    async componentDidMount() {
        this.getProposalDetails();
        this.isUserAllowedForVoting()
    }

    isUserAllowedForVoting = ()=>{

        if (window.ethereum) {//the error line
            window.web3 = new Web3(window.ethereum);
        
            try {
              window.ethereum.enable();

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
                if (address.address.toLowerCase() === accounts[0].toLowerCase()) {
                    if (address.permission.allowVoting === true) {
                        this.setState({isAllowedToVoting: true})
                    }
                }
            })
        });

    } catch (err) {
        alert("Something went wrong.");
      }
      }
        
       else {
        Utils.apiFailureToast("Please install XDCPay extension");
      }
    }

    getProposalDetails = async () => {
        const address = this.props.location.pathname.replace("/proposal-details/", "");
        let [error, proposalDetail] = await Utils.parseResponse(ProposalService.getProposalDetail(address, {})).catch(err => {
            Utils.apiFailureToast("Unable to fetch proposal details");
        });
        if (proposalDetail.endDate > Date.now()) {
            proposalDetail.status = "Open"
            const isVoted = await this.isAlreadyVoted(proposalDetail)
            if (isVoted)
                this.setState({isButtonClicked: true})
        } else {
            this.setState({isButtonClicked: true})
        }
        const proposalDocumentsUrl = await this.getSignedUrls(proposalDetail.proposalDocuments)
        this.setState({proposalAddress: address, proposalDetails: proposalDetail, proposalDocumentsUrl})
    }

    getSignedUrls = async (documents)=>{
        const responseObj = [];
        for(let index=0; index< documents.length; index++){
            const url = await getSignedUrlService(documents[index]).catch(err => console.log(err))
            responseObj.push(url);
        }
        return responseObj
    }

    isAlreadyVoted = async (proposalDetail) => {
        if (window.ethereum) {//the error line
            window.web3 = new Web3(window.ethereum);
        
            try {
              window.ethereum.enable();

        let web3;
        web3 = new Web3(window.web3.currentProvider);
        window.ethereum.enable();
        const accounts = await web3.eth.getAccounts()
        if (!accounts || !accounts.length) {
            // Utils.apiFailureToast("Please login to XDCPay extension");
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

    } catch (err) {
        alert("Something went wrong.");
      }
      }
        
       else {
        Utils.apiFailureToast("Please install XDCPay Extension");
      }
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
        // else if(Date.now()>moment(proposalDetails.startDate).format("DD MMMM YYYY"))
        // {
        //     Utils.apiFailureToast("You are not allowed to vote",ProposalDetails.startDate)
        // }
        let web3;
        web3 = new Web3(window.web3.currentProvider);
        console.log(window.web3.currentProvider);
        window.ethereum.enable();
        web3.eth.getAccounts().then(async (accounts) => {
            if (!accounts || !accounts.length) {
                Utils.apiFailureToast("Please login to XDCPay extension");
                return;
            }
            const contract = new web3.eth.Contract(proposalContractAbi, this.state.proposalAddress);
            const acc = accounts[0];
            return new Promise(async (resolve, reject)=>{
                const castProposalResponse = await contract.methods.
                cast_vote_for_proposal(isSupport, Date.now()).
                send({from: acc}, async (err, transactionHash) => {
                    if (err || !transactionHash)
                        return;
                    const res = await this.getTransactionReceipt(transactionHash);
                    if (res) {
                        const reqData = {
                            pollingContract: this.state.proposalAddress,
                            voterAddress: acc,
                            support: isSupport
                        };
                        this.addProposalToDatabase(reqData)
                        this.setState({isButtonClicked:true})
                        resolve(true)
                        this.setState({open:true})
                      
                    }
                }).catch((err) => {reject(err)});
                
            })
            
        });
        
    };
     handleClose = () => {
        this.setState({open: false})
    }

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

    addProposalToDatabase = async (reqData) => {
        const response = await castVotingProposal(reqData).catch(err => console.log(err));
        this.getProposalDetails()
    }

    

    render() {
        return <ProposalComponent
            state={this.state}
            handleClickVoter={this.handleClickVoter}
            backButton={this.backButton}
            castProposalVote={this.castProposalVote}
            handleClose={this.handleClose}
        />
    }
}
