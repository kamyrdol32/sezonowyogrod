// CSS
import './Reservation.css';


// Imports
import * as React from 'react';
import MenuItem from "@mui/material/MenuItem";
import {axios_post} from "../Others/requests";
import TextField from "@mui/material/TextField";
import {FormGroup, Select} from "@mui/material";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import Loader from "../Others/Loader";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import Grid from "@mui/material/Grid";


// Code
export default function Reservation(){

    const queryClient = useQueryClient()
    const navigate = useNavigate()

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
    const [selected, setSelected] = React.useState(0);
    const [tables, setTables] = React.useState([]);

    const {isLoading} = useQuery(['Tables'], () => {
        fetchTables(date, hour, people)
    })


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
                const element = document.getElementById(Table_ID)
                element.classList.add('reserved')
                element.classList.remove('selected')
                fetchTables(date, hour, people)
                setSelected(0)
            })
	}


    function fetchTables(date, hour, people) {

        const dataTable = {
            date: date,
            hour: hour,
            peoples: people,
        }

        return axios_post("/api/reservation/get", dataTable, true)
            .then((response) => {
                setTables(response.data)
                return response.data
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    navigate('/auth')
                }
            })
    }
    
    // Functions
    function setSelect(ID) {
        const element_new = document.getElementById(ID);


        if (!element_new.classList.contains('reservated')) {
            if (selected !== 0) {
                const element_old = document.getElementById(selected);
                element_old.classList.remove("selected");
            }

            setSelected(ID);
            element_new.classList.add("selected");
        }
    }
    
    // Render
    if (isLoading) {
        return <Loader />
    }


    return (
        <div>
            <FormGroup>
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
            </FormGroup>


            <h1>Rezerwacja</h1>

            {tables.map((table) => (
                <Grid container>
                        <div id={table.ID} key={table.ID} className={"table " + table.CSS_Class} onClick={() => setSelect(table.ID)}></div>
                        <h3>{table.Chairs}</h3>
                </Grid>
            ))}
            <Button variant="contained" onClick={() => {make_reservation(selected)}}>Rezerwuj</Button>
        </div>
    );
  }
