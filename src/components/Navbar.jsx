import { NavLink } from "react-router-dom"
import PropTypes from 'prop-types'
import { useState } from "react"

export default function Navbar({ changeFilters }) {
  const [minPrice, setMinPrice] = useState(0);

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value)
    changeFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
}

  const handleChangeOrigin = (event) =>{
    changeFilters(prevState => ({
      ...prevState,
      origin: event.target.value
    }))
  }


  return (
    <div className="navbar">
      <NavLink to="/registro" >Registrar vuelo</NavLink>
      <div>
        <p>Busqueda rápida de vuelos:</p>
        <label htmlFor="price">Precio: </label>
        <input type="range"
               id="price"
               min='0'
               max='400'
               onChange={handleChangeMinPrice} 
        />
        <span>{minPrice}$</span>
      </div>
      <div>
        <label htmlFor="origin">Origen</label>
        <input type="text" onChange={handleChangeOrigin} />
      </div>
      
    </div>
  )
}

Navbar.propTypes = {
  changeFilters: PropTypes
}