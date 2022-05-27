import { useEffect,useState} from 'react';
import { Link,useLocation,useSearchParams } from 'react-router-dom';
import { getData } from '../../apiFetch';
import { CardCountry } from '../CardCountry';
import { NavBar } from '../NavBar';
import { Spin } from 'antd';
import './Countries.css'


export function Countries({mode}) {

  const [countries,SetCountries]= useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchParams] = useSearchParams(useLocation().search);
  const [filterParams] = useSearchParams(useLocation().filter);
  const searchedCountry = searchParams.get('search')
  const searchedRegion = filterParams.get('filter')
  console.log(searchedRegion)
  
  

  useEffect(()=>{
    
    getData(searchedCountry?'name/'+searchedCountry:'all')
    .then(data=>{
      SetCountries(data); 
      setIsLoading(false)
    } )
   
  },[searchedCountry])

  useEffect(()=>{
    
    getData(searchedRegion?'region/'+searchedRegion:'all')
    .then(data=>{
      SetCountries(data);
      setIsLoading(false)
    } )
   
  },[searchedRegion])

  if (isLoading)  return <div className='spinner'style={{backgroundColor:mode?'hsl(207, 26%, 17%)':''}}> <Spin size="large" /></div> 
    return (
        <>
        <NavBar mode={mode}/>
        <main className='countries-grid' style={{backgroundColor:mode?'hsl(207, 26%, 17%)':''}}>
          {
            countries?.map((country)=>{
              return(
                <Link to={'country/'+country.cca3} key={country.name.common} className='card-container'>
                  <CardCountry
                  mode={mode} 
                  flagUrl={country.flags.svg}
                  name ={country.name.common}
                  population={country.population}
                  region ={country.region}
                  capital ={country.capital?country.capital[0]:""}
                  />
              </Link>
              )
              
            })
          }

          
        </main>
        </>
    )
}