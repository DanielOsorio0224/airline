import { useState } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types'

export default function RegisterFlight({flights}) {
  
  const[ values, setValues] = useState({
    origin:'',
    destination:'',
    departureDate:'',
    arrivalDate:'',
    airline:'',
    price:0
  });

  const handleInputChange = (e) =>{
    const {name, value} = e.target;
    setValues({
        ...values,
        [name]: value
    });
  };

  const handleForm = (e) =>{
    e.preventDefault()
    flights.push(values)
    alert('Vuelo creado exitosamente')
  }
  
    return (
        <>        
        <h2>Indica los datos del vuelo que deseas registrar</h2>
        <form onSubmit={handleForm}>
            <p>Origen</p>
            <input type="text" name="origin" onChange={handleInputChange} value={values.origin} />
            <p>Destino</p>
            <input type="text" name="destination" onChange={handleInputChange} value={values.destination} />
            <p>Fecha de salida</p>
            <input type="text" name="departureDate" onChange={handleInputChange} value={values.departureDate} />
            <p>Fecha de llegada</p>
            <input type="text" name="arrivalDate" onChange={handleInputChange} value={values.arrivalDate} />
            <p>Aerolinea</p>
            <input type="text" name="airline" onChange={handleInputChange} value={values.airline} />
            <p>Price</p>
            <input type="number" name="price" onChange={handleInputChange} value={values.price} />
            <br/><br/>
            <button type="submit">Crear vuelo</button>
            <NavLink to='/' >Regresar al inicio</NavLink>
        </form>
        </>
  )
}

RegisterFlight.propTypes = {
  flights:PropTypes
}