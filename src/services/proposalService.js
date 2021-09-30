import {httpService} from "../utility/httpService";
import {httpConstants} from "../constants";


export async function addNewProposal(reqObj) {
    const url = process.env.REACT_APP_PROPOSAL_SVC + httpConstants.API_END_POINT.ADD_NEW_PROPOSAL;
    return httpService(
        httpConstants.METHOD_TYPE.POST, {"Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON}, reqObj, url)
        .then((response) => {
            if (!response.success || response.responseCode !== 200 || !response.responseData || response.responseData.length === 0)
                return Promise.reject();
            return Promise.resolve(response.responseData);
        })
        .catch(function (err) {
            return Promise.reject(err);
        });
}
