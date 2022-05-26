import { useEffect,useState} from 'react';
import { Link,useLocation,useSearchParams } from 'react-router-dom';
import { getData } from '../../apiFetch';
import { CardCountry } from '../CardCountry';
import { NavBar } from '../NavBar';
import { Spin } from 'antd';
import './Countries.css'


export function Countries() {

  const [countries,SetCountries]= useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchParams, setSearchParams] = useSearchParams(useLocation().search);
  const [filterParams, setfilterParams] = useSearchParams(useLocation().filter);
  const searchedCountry = searchParams.get('search')
  const searchedRegion = filterParams.get('filter')
  console.log(searchedRegion)
  
  

  useEffect(()=>{
    
    getData(searchedCountry?'name/'+searchedCountry:'all')
    .then(data=>{
      console.log(data)
      SetCountries(data);
      
      setIsLoading(false)
    } )
   
  },[searchedCountry])

  useEffect(()=>{
    
    getData(searchedRegion?'continent/'+searchedRegion:'all')
    .then(data=>{
      SetCountries(data);
      setIsLoading(false)
    } )
   
  },[searchedRegion])

  if (isLoading)  return <div className='spinner'> <Spin size="large" /></div> 
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