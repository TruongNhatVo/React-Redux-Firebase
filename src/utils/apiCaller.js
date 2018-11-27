import axios from 'axios';

export default function apiCall(endpoint,method = 'GET',body) {
    return axios({
        method : method,
        url : `https://5b54a62e611af00014b90d74.mockapi.io/${endpoint}`,
        data : body
    })
    .catch((err) => {
        console.log(err);
    }) 
}