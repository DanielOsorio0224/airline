import Body from './Body'
import Navbar from './Navbar'
import PropTypes from 'prop-types'

export default function Home({flights, changeFilters}) {
    return (
        <>
            <Navbar changeFilters={changeFilters} />
            <Body flights={flights} />
        </>
    )
}

Home.propTypes = {
    flights:PropTypes,
    changeFilters:PropTypes
}