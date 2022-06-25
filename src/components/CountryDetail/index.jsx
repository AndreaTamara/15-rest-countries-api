//Estilos
import './CountryDetail.css';

//librerías
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button, notification } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useContext } from 'react';

//API
import { getData } from '../../apiAxios';

//Contexto
import ThemeContext from '../../context/ThemeContext';

//Componentes
import { Loading } from '../Loading';


export function CountryDetail() {

    const navigate = useNavigate();
    const { countryId } = useParams();
    const [country, setCountry] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { darkMode } = useContext(ThemeContext)
    const [error, setError] = useState(null)
    const [borderNames,setBorderNames]=useState(null)


    useEffect(() => {
        setIsLoading(true)
        getData('alpha/' + countryId)
            .then((res) => {
                setCountry(res[0])
                setIsLoading(false)
                console.log(res[0].borders)
            }).catch(err => {
                setIsLoading(false)
                setError(err.message)
            })

    }, [countryId])

    useEffect(() => {
        if (error) {
            notification['error']({
                message: 'Error',
                description:
                    error
            });
        }
    }, [error])

     useEffect(()=>{
        let newBorderNames = []
        const setName=(el)=>{
           const newArray=[...newBorderNames]
           newArray.push(el)
           newBorderNames=newArray
           console.log ('estoy en setName')
           console.log(newBorderNames)
           setBorderNames(newBorderNames)
        }
        console.log(country.borders)
         country.borders?.map(el=>
            getData('alpha/' + el)
            .then(res=>res[0].name.common)
            .then(res=>setName(res))
            )       
     },[country])


    if (isLoading) return <Loading />

    if (country) {
        return (
            <section style={{ backgroundColor: darkMode ? 'hsl(207, 26%, 17%)' : '' }}>
                <Button
                    className={`back-button ${darkMode ? 'button-dark-mode' : ''}`}
                    onClick={() => navigate('/')}>
                    <ArrowLeftOutlined />Back
                </Button>
                <main>
                    <div className="country-flag">
                        <img src={country.flags.svg} alt={country.name.official + 'flag'} />
                    </div>
                    <div className="country-info">
                        <h4 className={`country-name ${darkMode ? 'country-name-dark-mode' : ''}`}>
                            {country.name.common}
                        </h4>
                        <div className="country-detail-info">
                            <div className="country-details">
                                <div className="country-details-1">
                                    <p className={`country-data ${darkMode ? 'country-data-dark-mode' : ''}`}>
                                        <strong>Native Name: </strong>
                                        {country.name.nativeName[Object.keys(country.name.nativeName)[0]].official}
                                    </p>
                                    <p className={`country-data ${darkMode ? 'country-data-dark-mode' : ''}`}>
                                        <strong>Population: </strong>
                                        {country.population}
                                    </p>
                                    <p className={`country-data ${darkMode ? 'country-data-dark-mode' : ''}`}>
                                        <strong>Region: </strong>
                                        {country.region}
                                    </p>
                                    <p className={`country-data ${darkMode ? 'country-data-dark-mode' : ''}`}>
                                        <strong>Sub Region: </strong>
                                        {country.subregion}
                                    </p>
                                    <p className={`country-data ${darkMode ? 'country-data-dark-mode' : ''}`}>
                                        <strong>Capital: </strong>
                                        {country.capital ? country.capital[0] : ""}
                                    </p>
                                </div>
                                <div className="country-details-2">
                                    <p className={`country-data ${darkMode ? 'country-data-dark-mode' : ''}`}>
                                        <strong>Top Level Domain: </strong>
                                        {country.tld[0]}
                                    </p>
                                    <p className={`country-data ${darkMode ? 'country-data-dark-mode' : ''}`}>
                                        <strong>Currencies: </strong>
                                        {country.currencies ? [Object.values(country.currencies)][0]
                                            .map(el => el.name).join(', ') : ''}
                                    </p>
                                    <p className={`country-data ${darkMode ? 'country-data-dark-mode' : ''}`}>
                                        <strong>Languages: </strong>
                                        {[Object.values(country.languages)]
                                            .map(el => el).join(', ')}
                                    </p>
                                </div>
                            </div>
                            <div className="country-info-borders">
                                <p className={`country-data ${darkMode ? 'country-data-dark-mode' : ''}`}>
                                    <strong>Border Countries: </strong></p>
                                {borderNames?.map((el, i) => {
                                    return (
                                        <Button className={darkMode ? 'button-dark-mode' : ''}
                                            key={el}
                                            onClick={() => { navigate('/country/' + country.borders[i]) }}
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
    else {
        return (
            <section style={{ backgroundColor: darkMode ? 'hsl(207, 26%, 17%)' : '' }}>
                <Button
                    className={`back-button ${darkMode ? 'button-dark-mode' : ''}`}
                    onClick={() => navigate('/')}>
                    <ArrowLeftOutlined />Back
                </Button>
            </section>
        )
    }
}