import './CardCountry.css'
export function CardCountry({flagUrl,name,population,region,capital}) {
    return (
        <div className="card-country">
            <div className="card-country-flag">
                <img src={flagUrl} alt={name+'flag'} />
            </div>
            <div className="card-country-info">
                <h4 className="card-country-name">{name}</h4>
                <p className="card-country-data"><strong>Population: </strong>{population}</p>
                <p className="card-country-data"><strong>Region: </strong>{region}</p>
                <p className="card-country-data"><strong>Capital: </strong>{capital}</p>

            </div>
        </div>

    )
}