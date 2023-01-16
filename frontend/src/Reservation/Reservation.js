// CSS
import './Reservation.css';


// Imports
import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import MenuItem from "@mui/material/MenuItem";
import {useNavigate} from "react-router-dom";
import {axios_post} from "../Others/requests";
import TextField from "@mui/material/TextField";
import {Select} from "@mui/material";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import Loader from "../Others/Loader";
import Button from "@mui/material/Button";


// Code
export default function Reservation(){

    const navigate = useNavigate();
    const queryClient = useQueryClient()

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

    const {data, isLoading} = useQuery(['Tables'], () => {
        fetchTables(date, hour, people).then((response) => {
            return response.json();
        })
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
                queryClient.invalidateQueries('Comments');
                setSelected(0)
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    navigate('/auth')
                }
                console.log(error)
            })
	}


    function fetchTables(date, hour, people) {

        console.log(date, hour, people)

        const dataTable = {
            date: date,
            hour: hour,
            peoples: people,
        }

        const data = axios_post("/api/reservation/get", dataTable, true)
            .then((response) => {
                setTables(response.data)
                return response.data
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    navigate('/auth')
                }
                console.log(error)
            })
        return data
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

    console.log(tables)


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

            {tables.map((table) => (
                <div id={table.ID} className={"table " + table.CSS_Class} onClick={() => setSelect(table.ID)}></div>
            ))}
            <Button variant="contained" onClick={() => {make_reservation(selected)}}>Rezerwuj</Button>
        </div>
    );
  }