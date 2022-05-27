import { Routes, Route } from 'react-router-dom';
import {useState} from 'react';

//importando componentes
import { Header } from './components/Header';
import { HomePage} from './components/HomePage';
import { CountryDetail } from './components/CountryDetail';

//importando estilos
import './App.css';


function App() {

  const [darkMode,setDarkMode] = useState(false);

  const handleDarkMode= (e)=>{
    const active=darkMode
    setDarkMode(!active)
  }

  return (
    <div>
      <Header onSwitchDarkMode={(e)=>handleDarkMode(e)} mode={darkMode} />
      <Routes>
        <Route path='/' element={<HomePage mode={darkMode}/>} />
        <Route path='country/:countryId' element={<CountryDetail mode={darkMode}/>} />
        <Route path='*' element={<h1 style={{textAlign:'center', lineHeight:'200px'}}>not found</h1>}/>
      </Routes>
      
    </div>
  );
}

export default App;
