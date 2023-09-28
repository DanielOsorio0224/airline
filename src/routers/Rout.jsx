import { Routes, Route, BrowserRouter } from 'react-router-dom';
import RegisterFlight from '../components/RegisterFlight';
import Home from '../components/Home';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PropTypes from 'prop-types'

export const Rout = ({flights, changeFilters}) => {
  return (
    <BrowserRouter>
    <Header/>
        <Routes>
            <Route path='/' element={<Home flights={flights} changeFilters={changeFilters}/>} />
            <Route path='/registro' element={<RegisterFlight flights={flights} />} />            
        </Routes>
    <Footer/>    
    </BrowserRouter>
  )
}

Rout.propTypes = {
  flights:PropTypes,
  changeFilters: PropTypes
}