// Imports
import axios from "axios";
import {getCookie, getJWTUsername, removeUsername} from "./token.jsx";
import {toast} from "react-toastify";
import {useContext} from "react";
import {usernameContext} from "../App.jsx";

// Code
export function axios_get(url) {

    let headers = {
        'Content-Type': 'application/json',
    }

    return axios.get(url, {
        headers: headers,
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

    const postData = axios.post(url, data, {
        headers: headers,
    })

    postData
        .then(response => {
            // console.log(response)
            if (response.status === 200 && response.data.token) {
                localStorage.setItem('username', getJWTUsername(response.data.token))
            }
        })
        .catch(error => {
            console.log(error)
            if (error.response.status === 401) {
                removeUsername()
                toast.error('You are not logged in')
            }
        })


    return postData
}