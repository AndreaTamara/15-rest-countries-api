import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import { getData } from '../../apiFetch';
import { CardCountry } from '../CardCountry';
import { NavBar } from '../NavBar';
import './Countries.css'

export function Countries() {

  const [countries,SetCountries]= useState([])

  

  useEffect(()=>{

    getData('all')
    .then(data=>
      SetCountries(data)
      )
   
  },[])


    return (
        <>
        <NavBar />
        <main className='countries-grid'>
          {
            countries?.map((country)=>{
              return(
                <Link to={'country/'+country.alpha3Code} key={country.name} className='card-container'>
                  <CardCountry 
                  flagUrl={country.flags.svg}
                  name ={country.name}
                  population={country.population}
                  region ={country.region}
                  capital ={country.capital}
                  />
              </Link>
              )
              
            })
          }

          
        </main>
        </>
    )
}