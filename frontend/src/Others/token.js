// Imports
import jwt_decode from "jwt-decode";

// Code
export function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

export function getJWTUsername(token) {
    if (token) {
        const decoded = jwt_decode(token)
        return decoded.sub
    }
}

export function getUsername() {
    return localStorage.getItem('username')
}

export function removeUsername() {
    localStorage.removeItem('username')
}

export function isUsername() {
    console.log(getUsername())
    if (getUsername() !== null && getUsername() !== undefined && getUsername() !== 'undefined' && getUsername() !== 'null') {
        return getUsername()
    } else {
        return false
    }
}