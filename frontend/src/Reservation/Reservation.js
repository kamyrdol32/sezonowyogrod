// CSS
import './Reservation.css';


// Imports
import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import MenuItem from "@mui/material/MenuItem";
import {InputLabel, Select} from "@mui/material";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {axios_post} from "../Others/requests";


// Code
export default function Reservation(){

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

    const navigate = useNavigate();

    const [date, setDate] = React.useState(new Date(new Date().getFullYear(), new Date().getMonth(), Day + 1).toISOString().slice(0, 10));
    const [hour, setHour] = React.useState(Hour);
    const [people, setPeople] = React.useState(2);

    // console.log(Hour)
    // console.log(Day)



    async function fetch_reservesion_data(Table_ID) {

        const data = {
            table_id: Table_ID,
            user_id: 1,
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



    return (
        <div>
            <input defaultValue={date} type="date" onChange={(event) => {setDate(event.target.value)}}/>
            <FormControl>

              <InputLabel id="input_hour">Hour</InputLabel>
              <Select defaultValue={hour} label="Hour" onChange={(event) => {setHour(event.target.value)}}>
                <MenuItem value={12}>12:00 - 14:00</MenuItem>
                <MenuItem value={14}>14:00 - 16:00</MenuItem>
                <MenuItem value={16}>16:00 - 18:00</MenuItem>
                <MenuItem value={18}>18:00 - 20:00</MenuItem>
                <MenuItem value={20}>20:00 - 22:00</MenuItem>
              </Select>

              <InputLabel id="input_hour">People</InputLabel>
              <Select defaultValue={people} label="People" onChange={(event) => {setPeople(event.target.value)}}>
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
            <div className="table" onClick={() => {fetch_reservesion_data(1)}}></div>
            <div className="chair"></div>
            <br/>
            <div className="chair"></div>
            <div className="table" onClick={() => {fetch_reservesion_data(2)}}></div>
            <div className="chair"></div>
        </div>
    );
  }