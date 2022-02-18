import {httpService, httpServiceForFileUpload} from "../utility/httpService";
import {httpConstants} from "../constants";

export async function uploadFile(fileObj) {
    const url = process.env.REACT_APP_VOTING_SRV_DNS + "addDocs"
    // const url = "http://localhost:3001/" + "addDocs"
    return httpServiceForFileUpload(httpConstants.METHOD_TYPE.POST, {}, fileObj, url)
        .then((response) => {
            if (!response.success || !response.responseData)
                return Promise.reject();
            return Promise.resolve(response.responseData);
        })
}

export async function getSignedUrlService(key) {
    const url = process.env.REACT_APP_FILE_UPLOADER_SVC + "get-signed-url"
    return httpService(httpConstants.METHOD_TYPE.POST, {
        "Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON,
        "Access-Control-Allow-Origin":"*"
    }, {fileName: key}, url)
        .then((response) => {
            if (!response.success || !response.responseData)
                return Promise.reject();
            return Promise.resolve(response.responseData);
        })
}