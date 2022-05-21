import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import './App.css';
// import { NavBar } from './components/NavBar';
// import { CardCountry } from './components/CardCountry';
import { CountryDetail } from './components/CountryDetail';
import { Countries } from './components/Countries';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Countries/>} />
        <Route path='country/:countryId' element={<CountryDetail />} />
        <Route path='*' element={<h1>not found</h1>}/>
      </Routes>
      
    </div>
  );
}

export default App;
