import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import './App.css';
// import { NavBar } from './components/NavBar';
// import { CardCountry } from './components/CardCountry';
import { CountryDetail } from './components/CountryDetail';
import { Countries } from './components/Countries';
import {useState} from 'react';


function App() {

  const [darkMode,setDarkMode] = useState(false);

  const handleDarkMode= (e)=>{
    const active=darkMode
    setDarkMode(!active)
    console.log('dark mode App:'+darkMode)
  }


  return (
    <div>
      <Header onSwitchDarkMode={(e)=>handleDarkMode(e)} mode={darkMode} />
      <Routes>
        <Route path='/' element={<Countries mode={darkMode}/>} />
        <Route path='country/:countryId' element={<CountryDetail mode={darkMode}/>} />
        <Route path='*' element={<h1 style={{textAlign:'center', lineHeight:'200px'}}>not found</h1>}/>
      </Routes>
      
    </div>
  );
}

export default App;
