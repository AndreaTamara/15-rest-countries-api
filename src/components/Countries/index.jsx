import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import { CardCountry } from '../CardCountry';
import { NavBar } from '../NavBar';
import './Countries.css'

export function Countries() {

  const [countries,SetCountries]= useState([])

  

  useEffect(()=>{

    fetch('https://restcountries.com/v2/all')
    .then(res=>res.json())
    .then(data=>{
      SetCountries(data);
      //console.log(countries)
    }
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
                  //key={country.name+'card'}
                  />
              </Link>
              )
              
            })
          }

          
        </main>
        </>
    )
}