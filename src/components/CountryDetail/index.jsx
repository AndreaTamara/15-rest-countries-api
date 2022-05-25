import './CountryDetail.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { Button } from 'antd';


export function CountryDetail() {
    const navigate = useNavigate();
    let { countryId } = useParams();
    const [country, setCountry] = useState(null)
    console.log(countryId)

    const urlBase = 'https://restcountries.com/v2/alpha/';

    const getData = (a) => {
        return (
            fetch(urlBase + a)
                .then(res => res.json())
                .then((res) => res)
        )

    }

    // const createButton =(el,nameCountry)=>{
    //     return(
    //         <button key={el} onClick={()=>{navigate('/country/'+el)}}
    //         >{nameCountry}</button>
    // )}

    useEffect(() => {

        getData(countryId)
            .then(
                (res) => {
                    setCountry(res)
                    console.log(res)
                })

    }, [countryId])

    if (!country) { return <p style={{ textAlign: 'center',lineHeight:'200px' }}>cargando...</p> }

    return (
        <section>
            <Button className='back-button' onClick={() => navigate('/')}>Back</Button>
            <main>
                <div className="country-flag">
                    <img src={country.flags.svg} alt={country.name + 'flag'} />
                </div>
                <div className="country-info">
                    <h4 className="country-name">{country.name}</h4>
                    <div className="country-detail-info">
                        <div className="country-details">
                            <div className="country-details-1">
                                <p className="country-data"><strong>Native Name:</strong>{country.nativeName}</p>
                                <p className="country-data"><strong>Population:</strong>{country.population}</p>
                                <p className="country-data"><strong>Region:</strong>{country.region}</p>
                                <p className="country-data"><strong>Sub Region:</strong>{country.subregion}</p>
                                <p className="country-data"><strong>Capital:</strong>{country.capital}</p>
                            </div>
                            <div className="country-details-2">
                                <p className="country-data"><strong>Top Level Domain:</strong>{country.topLevelDomain}</p>
                                <p className="country-data"><strong>Currencies:</strong>
                                    {country.currencies.map(el => el.name).join(',')}
                                </p>
                                <p className="country-data"><strong>Lenguages:</strong>
                                    {country.languages.map(el => el.name).join(', ')}
                                </p>
                            </div>
                        </div>
                        <div className="country-info-borders">
                            <p><strong>Border Countries:</strong></p>
                            {country.borders?.map(el => {

                                //const nameRender = getData(el).then(res=>console.log(res))
                                return (
                                    <Button key={el} onClick={() => { navigate('/country/' + el) }}
                                    >{el}</Button>
                                )
                                })
                            }


                        </div>
                    </div>

                </div>

            </main>

        </section>
    )
}