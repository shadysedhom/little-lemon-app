import { red } from "@mui/material/colors";
import { useEffect, useReducer, useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Bookingform(props) {

    function handleSubmit(e) {
        e.preventDefault();
    }


    const Form = () => {

        let navigate = useNavigate();

        /* console.log(fetchAPI(date)); */

        const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00",])

        const [date, setDate] = useState('');
        const [time, setTime] = useState('');
        const [guestNumber, setGuestNumber] = useState(1);
        const [occasion, setOccassion] = useState('');

        function handleDateChange(e) {
            setDate(e.target.value);

            if (date === '2023-09-03') {
                setAvailableTimes(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
            }
            else {
                setAvailableTimes(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"])
            }

        }

        function handleSubmit(e) {
            e.preventDefault();

            navigate("/confirmed");
        }



        /* =================================================================\\\\
           Check how to set the value for multiple controlled inputs in form?>>>>
           =================================================================////
        */

        return(
            <form onSubmit={handleSubmit} className="bookingForm">
                <label htmlFor="res-date">Choose Date</label>
                <input type="date" id="res-date" name="date" value={date} onChange={ handleDateChange } 
                required 
                onInvalid={() => document.getElementById('res-date').setCustomValidity('Please select a date')}
                onInput = {() => document.getElementById('res-date').setCustomValidity('')}
                />
                <label htmlFor="res-time">Choose Time</label>
                <select id="res-time" name="time" value={time} onChange={(e) => { setTime(e.target.value) }} 
                    required
                    onInvalid={() => document.getElementById('res-time').setCustomValidity('Please select a time')}
                    onInput = {() => document.getElementById('res-time').setCustomValidity('')}
                    >
                    {
                        availableTimes.map((time) => {
                            return <option key={time}>{time}</option>
                        })
                    }
                </select>
                <label htmlFor="guests">Number of Guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" name="guestNumber" value={guestNumber} onChange={(e) => {setGuestNumber(e.target.value)}} 
                    required 
                    onInvalid={() => document.getElementById('guests').setCustomValidity('For how many people would you like to book a reservation?')}
                    onInput = {() => document.getElementById('guests').setCustomValidity('')}
                    />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" name="occassion" value={occasion} onChange={(e) => {setOccassion(e.target.value)}}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" id="submit" value="Make Your Reservation" className="btn btn-warning" />
            </form>
        );

    }


    return(
        <main>
            <div className="bg">
                <div className="container">

                    <div className="row">
                        <div className="col">
                            <h1 className="title">Make Your Reservation</h1>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <h2 className="subtitle">Please fill in the form.</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">

                            <Form />

                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}

