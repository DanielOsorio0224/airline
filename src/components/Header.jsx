import avion from '../assets/avion.jpg' 

export default function Header() {
    return (
        <>
            <div className="header">
                <h1>Aerolineas DOQ</h1> 
                <img src={avion} alt="aerolinea-icon" width='100px' />
            </div>            
        </>
    )
}
