// CSS
import './Profile.css';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {useContext, useState} from "react";
import {usernameContext} from "../App";
import {axios_post} from "../Others/requests";
import {useNavigate} from "react-router-dom";
import Loader from "../Others/Loader";
import * as React from "react";
import {toast} from "react-toastify";

// Imports


// Code
export default function Profile() {

    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const {username} = useContext(usernameContext)

    const [reservations, setReservations] = useState([]);

    const {isLoading} = useQuery(['Reservations'], () => {
        fetchReservation()
    })

    function fetchReservation() {
        return axios_post('/api/reservation/user/get', {username: username}, true)
            .then((response) => {
                setReservations(response.data)
                return response.data
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    navigate('/auth')
                }
            })

    }

    function cancelReservation(ID) {
        return axios_post('/api/reservation/user/cancel', {username: username, ID: ID}, true)
            .then((response) => {
                if (response.status === 200) {
                    fetchReservation()
                    toast.success(response.data.msg)
                }
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    navigate('/auth')
                }
            })

    }

    if (isLoading) {
        return <Loader />
    }

    return (
        <>
            <div id="profile">
                <h1>Profile</h1>
            </div>
            <div id="profile_reservation">
                <h1>Rezerwacje</h1>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Numer stolika</TableCell>
                                <TableCell>Data</TableCell>
                                <TableCell>Godzina początkowa</TableCell>
                                <TableCell>Godzina Końcowa</TableCell>
                                <TableCell>Ilośc miejsc</TableCell>
                                <TableCell>Anuluj rezerwacje</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {reservations.map((dataReservation) => (
                                <TableRow>
                                    <TableCell>{dataReservation.ID_Table}</TableCell>
                                    <TableCell>{dataReservation.Data}</TableCell>
                                    <TableCell>{dataReservation.Start_Hour}</TableCell>
                                    <TableCell>{dataReservation.End_Hour}</TableCell>
                                    <TableCell>{dataReservation.Chairs}</TableCell>
                                    <TableCell><button onClick={() => cancelReservation(dataReservation.ID_Reservation)}>Anuluj</button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    );
}