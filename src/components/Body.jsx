import PropTypes from 'prop-types'
import iconflight from '../assets/iconflight.png'

export default function Body({flights}) {
  return (
    <main className='flights'>
      <ul>
        {flights.map(flight => (
          <li key={flight.id} >
            <img src={iconflight} alt="icon" width='60px' />
            <div className='flight'>              
              <p>Nombre de la aerolinea: {flight.airline}</p>
              <p>Origen del vuelo: {flight.origin}</p>
              <p>Destino: {flight.destination}</p>
              <p>Fecha salida: {flight.departureDate}</p>
              <p>Fecha llegada: {flight.arrivalDate}</p>
              <p>Precio: {flight.price} $</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}

Body.propTypes = {
  flights:PropTypes
}