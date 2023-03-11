// Imports
import {useContext, useEffect} from "react";
import {axios_get, axios_post} from "../Others/requests.jsx";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {removeUsername} from "../Others/token.jsx";
import {usernameContext} from "../App.jsx";


// Code
export default function Logout() {

    const navigate = useNavigate()
    const {setUsername} = useContext(usernameContext)

    useEffect(() => {
        axios_get('/auth/logout', true)
            .then((response) => {
                console.log(response)
                if (response.status === 200) {
                    setUsername('')
                    removeUsername()
                    navigate('/')
                    toast.success('Logged out successfully')
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <div>
            <h1>Wylogowywanie...</h1>
        </div>
    );
}