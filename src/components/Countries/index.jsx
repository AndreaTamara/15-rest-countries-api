import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getData } from '../../apiAxios';
import { CardCountry } from '../CardCountry';
import { Spin, notification } from 'antd';
import { useContext } from 'react'
import ThemeContext from '../../context/ThemeContext'
import './Countries.css'
import { Loading } from '../Loading';


export function Countries() {
  
  const {darkMode}=useContext(ThemeContext)

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
    if (error){
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

  if (isLoading) return <Loading/>
  
  return (
    <>
      <main className='countries-grid' style={{ backgroundColor: darkMode ? 'hsl(207, 26%, 17%)' : '' }}>
        {
          countries?.map((country) => {
            return (
              <Link to={'country/' + country.cca3} key={country.name.common} className='card-container'>
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