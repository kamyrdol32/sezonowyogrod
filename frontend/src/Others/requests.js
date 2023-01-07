// Imports
import axios from "axios";
import {getCookie} from "./token";

// Code
export function axios_get(url, data) {

    let headers = {
        'Content-Type': 'application/json',
    }

    return axios.get(url, {
        headers: headers,
        params: data,
    })
}

export function axios_post(url, data, tokenRequired) {

    let headers = {
        'Content-Type': 'application/json',
    }

    if (tokenRequired) {
        headers = {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': getCookie('csrf_access_token'),
        }
    }

    return axios.post(url, data, {
        headers: headers,
    })
}