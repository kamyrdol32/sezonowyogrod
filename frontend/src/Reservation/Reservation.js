// CSS
import './Reservation.css';


// Imports
import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import MenuItem from "@mui/material/MenuItem";
import {InputLabel, Select} from "@mui/material";


// Code
export default function Reservation(){

    let Day = new Date().getDate();
    let Hour = new Date().getHours()
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

    // 2023-01-12
    const [date, setDate] = React.useState(new Date(new Date().getFullYear(), new Date().getMonth(), Day + 1).toISOString().slice(0, 10));
    const [hour, setHour] = React.useState(Hour);
    const [people, setPeople] = React.useState(2);

    console.log(Hour)
    console.log(Day)

    async function fetch_reservesion_data(Table_ID) {
		const response = await fetch('/api/reservation/add', {
			method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                table_id: Table_ID,
                user_id: 1,
                date: date,
                hour: hour,
                peoples: people,
            })
		})
        const data = await response.json();
        if (response.status === 200) {
            console.log(data.access_token);
        }
	}

    function make_reservation(ID){
        fetch_reservesion_data(ID)
        console.log("reservation: " + ID);
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
            <div className="table" onClick={() => {make_reservation(1)}}></div>
            <div className="chair"></div>
            <br/>
            <div className="chair"></div>
            <div className="table" onClick={() => {make_reservation(2)}}></div>
            <div className="chair"></div>
        </div>
    );
  }