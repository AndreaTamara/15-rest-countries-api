import './CardCountry.css'
import { useContext } from 'react'
import ThemeContext from '../../context/ThemeContext'

export function CardCountry({flagUrl,name,population,region,capital}) {
    const {darkMode}=useContext(ThemeContext)
    return (
        <div className={`card-country ${darkMode?'card-country-dark-mode':''}`}>
            <div className="card-country-flag">
                <img src={flagUrl} alt={name+'flag'} />
            </div>
            <div className="card-country-info">
                <h4 className={`card-country-name ${darkMode?'card-country-name-dark-mode':''}`}>{name}</h4>
                <p className={`card-country-data ${darkMode?'card-country-data-dark-mode':''}`}><strong>Population: </strong>{population}</p>
                <p className={`card-country-data ${darkMode?'card-country-data-dark-mode':''}`}><strong>Region: </strong>{region}</p>
                <p className={`card-country-data ${darkMode?'card-country-data-dark-mode':''}`}><strong>Capital: </strong>{capital}</p>

            </div>
        </div>

    )
}