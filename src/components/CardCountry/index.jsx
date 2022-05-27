import './CardCountry.css'
export function CardCountry({flagUrl,name,population,region,capital,mode}) {
    return (
        <div className={`card-country ${mode?'card-country-dark-mode':''}`}>
            <div className="card-country-flag">
                <img src={flagUrl} alt={name+'flag'} />
            </div>
            <div className="card-country-info">
                <h4 className={`card-country-name ${mode?'card-country-name-dark-mode':''}`}>{name}</h4>
                <p className={`card-country-data ${mode?'card-country-data-dark-mode':''}`}><strong>Population: </strong>{population}</p>
                <p className={`card-country-data ${mode?'card-country-data-dark-mode':''}`}><strong>Region: </strong>{region}</p>
                <p className={`card-country-data ${mode?'card-country-data-dark-mode':''}`}><strong>Capital: </strong>{capital}</p>

            </div>
        </div>

    )
}