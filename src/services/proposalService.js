import { httpService } from "../utility/httpService";
import { httpConstants } from "../constants";
export default { getProposalDetail };

export async function addNewProposal(reqObj) {
  const url =
    process.env.REACT_APP_PROPOSAL_SVC +
    httpConstants.API_END_POINT.ADD_NEW_PROPOSAL;
  return httpService(
    httpConstants.METHOD_TYPE.POST,
    { "Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON },
    reqObj,
    url
  )
    .then((response) => {
      if (
        !response.success ||
        response.responseCode !== 200 ||
        !response.responseData ||
        response.responseData.length === 0
      )
        return Promise.reject();
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}

// async function getProposalDetail() {
//   const url = process.env.REACT_APP_GET_VOTERS_LIST_BY_PROPOSAL;
//   return httpService(
//     httpConstants.METHOD_TYPE.POST,
//     { "Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON },
//     { proposalTitle: "Testing" },
//     url
//   )
//     .then((response) => {
//       if (
//         !response.success ||
//         response.responseCode !== 200 ||
//         !response.responseData ||
//         response.responseData.length === 0
//       )
//         return Promise.reject();
//       return Promise.resolve(response.responseData);
//     })
//     .catch(function (err) {
//       return Promise.reject(err);
//     });
// }

async function getProposalDetail(path, data) {
  let url = process.env.REACT_APP_GET_PROPOSAL_DETAIL + path;

  return httpService(
    httpConstants.METHOD_TYPE.GET,
    { "Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON },
    data,
    url
  )
    .then((response) => {
      if (
        !response.success ||
        response.responseCode !== 200 ||
        !response.responseData ||
        response.responseData.length === 0
      )
        return Promise.reject();

      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}
