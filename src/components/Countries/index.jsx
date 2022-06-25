//Librerías
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { notification } from 'antd';
import { useContext } from 'react';

//API
import { getData } from '../../apiAxios';

//Cntexto
import ThemeContext from '../../context/ThemeContext';

//Estilos
import './Countries.css';

//Componentes
import { Loading } from '../Loading';
import { CardCountry } from '../CardCountry';


export function Countries() {

  const { darkMode } = useContext(ThemeContext)

  const [countries, SetCountries] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [searchParams] = useSearchParams(useLocation().search);
  const [filterParams] = useSearchParams(useLocation().filter);
  const searchedCountry = searchParams.get('search')
  const searchedRegion = filterParams.get('filter')



  useEffect(() => {
    setIsLoading(true)
    setError(null)
    getData(searchedCountry ? 'name/' + searchedCountry : 'all')
      .then(data => {
        SetCountries(data);
        setIsLoading(false)
      }
      )
      .catch(err => {
        setIsLoading(false)
        setError(err.message)
        }
      )
  }, [searchedCountry])

  useEffect(() => {
    if (error) {
      notification['error']({
        message: 'Error',
        description:
          error
      });
    }
  }, [error])

  useEffect(() => {
    setIsLoading(true)
    setError(null)
    getData(searchedRegion ? 'region/' + searchedRegion : 'all')
      .then(data => {
        SetCountries(data);
        setIsLoading(false)
      }).catch(err => {
        setIsLoading(false)
        setError(err.message)
        }
      )
  }, [searchedRegion])

  if (isLoading) return <Loading />

  return (
    <>
      <main className='countries-grid' style={{ backgroundColor: darkMode ? 'hsl(207, 26%, 17%)' : '' }}>
        {
          countries?.map((country) => {
            return (
              <Link to={'country/' + country.name.common} key={country.name.common} className='card-container'>
                <CardCountry
                  flagUrl={country.flags.svg}
                  name={country.name.common}
                  population={country.population}
                  region={country.region}
                  capital={country.capital ? country.capital[0] : ""}
                />
              </Link>
            )

          })
        }
      </main>
    </>
  )
}