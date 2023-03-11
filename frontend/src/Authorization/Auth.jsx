// CSS
import './Auth.css';

// Imports
import * as React from 'react';
import Box from '@mui/material/Box';
import {usernameContext} from "../App.jsx";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {axios_post} from "../Others/requests.jsx";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {useContext} from "react";
import {getJWTUsername} from "../Others/token.jsx";


// Code
export default function Auth() {

    const navigate = useNavigate();
    const {setUsername} = useContext(usernameContext)

    const [mode, setmode] = React.useState("login");
    const [login_username, setLogin_username] = React.useState(0);
    const [login_password, setLogin_password] = React.useState(0);
    const [register_username, setRegister_username] = React.useState(0);
    const [register_email, setRegister_email] = React.useState(0);
    const [register_password, setRegister_password] = React.useState(0);
    const [register_reapet_password, setRegister_reapet_password] = React.useState(0);

    async function fetchLoginPanel() {

        const data = {
            username: login_username,
            password: login_password,
        }

		await axios_post('/auth/login', data, false)
            .then((response) => {
                if (response.status === 200) {
                    navigate('/')
                    toast.success('Logged in successfully')
                    setUsername(getJWTUsername(response.data.token))
                }
            })
	}

    async function fetchRegisterPanel() {

        const data = {
            username: register_username,
            email: register_email,
            password: register_password,
            reapet_password: register_reapet_password
        }

		axios_post('/auth/register', data, false);
	}

    function boxPanel() {
        if (mode === "login") {
            return (
                <Box id="Box_login">
                    <h2>Login</h2>
                    <TextField
                        id="register_login"
                        className='log'
                        label="Username"
                        variant="outlined"
                        onChange={event => setLogin_username(event.target.value)}
                    />
                    <TextField
                        id="register_password"
                        className='log'
                        label="Password"
                        variant="outlined"
                        onChange={event => setLogin_password(event.target.value)}
                    />
                    <br/>
                   <Button id="button_log" variant="outlined" onClick={fetchLoginPanel}>Zaloguj</Button>
                </Box>
            );
        } else {
            return (
                <Box id="Box_register">
                    <h2>Register</h2>
                    <TextField sx={{mt: '10%'}}
                               className='reg'
                               id="register_login"
                               label="Username"
                               variant="outlined"
                               onChange={event => setRegister_username(event.target.value)}
                    />
                    <TextField
                        className='reg'
                        id="register_password"
                        label="E-Mail"
                        variant="outlined"
                        onChange={event => setRegister_email(event.target.value)}
                    />
                    <TextField
                        className='reg'
                        id="register_password"
                        label="Password"
                        variant="outlined"
                        onChange={event => setRegister_password(event.target.value)}
                    />
                    <TextField
                        className='reg'
                        id="register_password"
                        label="Repeat password"
                        variant="outlined"
                        onChange={event => setRegister_reapet_password(event.target.value)}
                    />
                    <br/>
                    <Button id="button_rej" variant="outlined" onClick={fetchRegisterPanel}>Zarejestruj</Button>
                </Box>
            );
        }
    }

    return (
        <div id="Auth">
            <Button id="button_login" variant="outlined" onClick={() => setmode("login")}>Zaloguj</Button>
            <Button id="button_register" variant="outlined" onClick={() => setmode("register")}>Zarejestruj</Button>
            {boxPanel()}
        </div>
    );
}
