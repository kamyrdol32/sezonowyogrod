// CSS
import './Reservation.css';


// Imports
import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import MenuItem from "@mui/material/MenuItem";
import {useNavigate} from "react-router-dom";
import {axios_get, axios_post} from "../Others/requests";
import TextField from "@mui/material/TextField";
import {Select} from "@mui/material";


// Code
export default function Reservation(){


    const navigate = useNavigate();

    // Variables & States
    let Day = new Date().getDate();
    let Hour = new Date().getHours()
    let Minute = new Date().getMinutes()
    if (Minute !== 0) {
        Hour += 1
    }
    if (Hour%2 === 1) {
        Hour = Hour + 1
    }
    if (Hour < 12) {
        Hour = 12
    }
    if (Hour > 20) {
        Hour = 12
        Day = new Date().getDate() + 1

    }

    const [date, setDate] = React.useState(new Date(new Date().getFullYear(), new Date().getMonth(), Day + 1).toISOString().slice(0, 10));
    const [hour, setHour] = React.useState(Hour);
    const [people, setPeople] = React.useState(2);


    // API
    async function make_reservation(Table_ID) {

        const data = {
            table_id: Table_ID,
            date: date,
            hour: hour,
            peoples: people,
        }

        axios_post('/api/reservation/add', data, true)
            .then((response) => {
                console.log(response.data.msg)
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    navigate('/auth')
                }
                console.log(error)
            })
	}

    async function fetchTables(date, hour, people) {

        const data = {
            date: date,
            hour: hour,
            peoples: people,
        }

        console.log("fetching tables")
        axios_post("/api/reservation/get", data, true)
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    // Render
    return (
        <div>
            <FormControl>
                <TextField type="date" value={date} onChange={(event) => {setDate(event.target.value); fetchTables(event.target.value, hour, people)}}/>

                <Select defaultValue={hour} label="Hour" onChange={(event) => {setHour(event.target.value); fetchTables(date, event.target.value, people)}}>
                    <MenuItem value={12}>12:00 - 14:00</MenuItem>
                    <MenuItem value={14}>14:00 - 16:00</MenuItem>
                    <MenuItem value={16}>16:00 - 18:00</MenuItem>
                    <MenuItem value={18}>18:00 - 20:00</MenuItem>
                    <MenuItem value={20}>20:00 - 22:00</MenuItem>
                </Select>

                <Select defaultValue={people} label="People" onChange={(event) => {setPeople(event.target.value); fetchTables(date, hour, event.target.value)}}>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                </Select>
            </FormControl>


            <h1>Rezerwacja</h1>
            <div className="chair"></div>
            <div className="table" onClick={() => {make_reservation(1)}}></div>
            <div className="chair"></div>
            <br/>
            <div className="chair"></div>
            <div className="table" onClick={() => {make_reservation(2)}}></div>
            <div className="chair"></div>
        </div>
    );
  }
