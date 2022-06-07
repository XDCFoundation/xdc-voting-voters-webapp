import {httpService} from "../utility/httpService";
import {httpConstants} from "../constants";

export async function uploadFile(fileObj) {
    const url = process.env.REACT_APP_FILE_UPLOADER_SVC + "upload-file"
    return httpService(httpConstants.METHOD_TYPE.POST, {"Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON}, {}, url)
        .then((response) => {
            if (!response.success || response.responseCode !== 200 || !response.responseData || response.responseData.length === 0)
                return Promise.reject();
            return Promise.resolve(response.responseData);
        })
}