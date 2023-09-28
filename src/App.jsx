import { useState } from 'react'
import './App.css'
import { Rout } from './routers/Rout'

let flights = [
    {
        "id": 1,
        "airline": "aerolinea1",
        "origin": "colombia",
        "destination": "estados unidos",
        "departureDate": "26/9/2023",
        "departureHour": "22:45",
        "arrivalDate": "27/9/2023",
        "arrivalHour": "03:45",
        "price": 125
    },
    {
        "id": 2,
        "airline": "aerolinea1",
        "origin": "colombia",
        "destination": "españa",
        "departureDate": "23/9/2023",
        "departureHour": "2:35",
        "arrivalDate": "24/9/2023",
        "arrivalHour": "05:45",
        "price": 250
    },
    {
        "id": 3,
        "airline": "aerolinea1",
        "origin": "colombia",
        "destination": "japon",
        "departureDate": "20/9/2023",
        "departureHour": "13:30",
        "arrivalDate": "23/9/2023",
        "arrivalHour": "03:30",
        "price": 400
    },
    {
        "id": 4,
        "airline": "aerolinea2",
        "origin": "peru",
        "destination": "estados unidos",
        "departureDate": "20/9/2023",
        "departureHour": "2:45",
        "arrivalDate": "20/9/2023",
        "arrivalHour": "23:10",
        "price": 125
    },
    {
        "id": 5,
        "airline": "aerolinea2",
        "origin": "argentina",
        "destination": "estados unidos",
        "departureDate": "22/9/2023",
        "departureHour": "1:25",
        "arrivalDate": "22/9/2023",
        "arrivalHour": "23:45",
        "price": 175
    },
    {
        "id": 6,
        "airline": "aerolinea2",
        "origin": "chile",
        "destination": "estados unidos",
        "departureDate": "28/9/2023",
        "departureHour": "13:10",
        "arrivalDate": "28/9/2023",
        "arrivalHour": "23:25",
        "price": 150
    },
    {
        "id": 7,
        "airline": "aerolinea2",
        "origin": "brasil",
        "destination": "estados unidos",
        "departureDate": "15/9/2023",
        "departureHour": "18:45",
        "arrivalDate": "16/9/2023",
        "arrivalHour": "02:10",
        "price": 200
    },
    {
        "id": 8,
        "airline": "aerolinea2",
        "origin": "bolivia",
        "destination": "estados unidos",
        "departureDate": "26/9/2023",
        "departureHour": "12:45",
        "arrivalDate": "26/9/2023",
        "arrivalHour": "23:45",
        "price": 200
    },
    {
        "id": 9,
        "airline": "aerolinea3",
        "origin": "españa",
        "destination": "rusia",
        "departureDate": "6/9/2023",
        "departureHour": "12:45",
        "arrivalDate": "7/9/2023",
        "arrivalHour": "03:45",
        "price": 300
    },
    {
        "id": 10,
        "airline": "aerolinea3",
        "origin": "españa",
        "destination": "australia",
        "departureDate": "24/9/2023",
        "departureHour": "22:45",
        "arrivalDate": "26/9/2023",
        "arrivalHour": "03:45",
        "price": 400
    },
    {
        "id": 11,
        "airline": "aerolinea3",
        "origin": "españa",
        "destination": "inglaterra",
        "departureDate": "28/9/2023",
        "departureHour": "2:45",
        "arrivalDate": "28/9/2023",
        "arrivalHour": "13:45",
        "price": 125
    },
    {
        "id": 12,
        "airline": "aerolinea3",
        "origin": "españa",
        "destination": "colombia",
        "departureDate": "19/9/2023",
        "departureHour": "22:45",
        "arrivalDate": "21/9/2023",
        "arrivalHour": "01:45",
        "price": 350
    },
    {
        "id": 13,
        "airline": "aerolinea4",
        "origin": "estados unidos",
        "destination": "colombia",
        "departureDate": "16/9/2023",
        "departureHour": "2:45",
        "arrivalDate": "16/9/2023",
        "arrivalHour": "13:45",
        "price": 150
    },
    {
        "id": 14,
        "airline": "aerolinea4",
        "origin": "argentina",
        "destination": "colombia",
        "departureDate": "6/9/2023",
        "departureHour": "19:30",
        "arrivalDate": "7/9/2023",
        "arrivalHour": "13:45",
        "price": 230
    },
    {
        "id": 15,
        "airline": "aerolinea4",
        "origin": "francia",
        "destination": "colombia",
        "departureDate": "14/9/2023",
        "departureHour": "5:45",
        "arrivalDate": "15/9/2023",
        "arrivalHour": "03:45",
        "price": 300
    },
    {
        "id": 16,
        "airline": "aerolinea4",
        "origin": "australia",
        "destination": "colombia",
        "departureDate": "26/9/2023",
        "departureHour": "22:45",
        "arrivalDate": "28/9/2023",
        "arrivalHour": "03:45",
        "price": 450
    },
    {
        "id": 17,
        "airline": "aerolinea5",
        "origin": "bolivia",
        "destination": "estados unidos",
        "departureDate": "30/9/2023",
        "departureHour": "02:15",
        "arrivalDate": "30/9/2023",
        "arrivalHour": "23:45",
        "price": 250
    },
    {
        "id": 18,
        "airline": "aerolinea5",
        "origin": "españa",
        "destination": "estados unidos",
        "departureDate": "17/9/2023",
        "departureHour": "4:45",
        "arrivalDate": "17/9/2023",
        "arrivalHour": "23:45",
        "price": 280
    },
    {
        "id": 19,
        "airline": "aerolinea5",
        "origin": "españa",
        "destination": "argentina",
        "departureDate": "23/9/2023",
        "departureHour": "22:45",
        "arrivalDate": "25/9/2023",
        "arrivalHour": "03:45",
        "price": 300
    },
    {
        "id": 20,
        "airline": "aerolinea5",
        "origin": "inglaterra",
        "destination": "estados unidos",
        "departureDate": "18/9/2023",
        "departureHour": "05:45",
        "arrivalDate": "19/9/2023",
        "arrivalHour": "05:45",
        "price": 275
    }
]

function App() {
    const [filters, setfilters] = useState({
        origin: 'all',
        minPrice: 0,
    })

    const filterFlight = (flights) =>{
        return flights.filter(flight =>{
            return (
                flight.price >= filters.minPrice &&
                (
                    filters.origin == 'all' ||
                    flight.origin == filters.origin                    
                ) 
            )
        })
    }
    const filteredFlight = filterFlight(flights) 
    return (
        <>
            <Rout flights={filteredFlight} changeFilters={setfilters} />
        </>
    )
}

export default App
