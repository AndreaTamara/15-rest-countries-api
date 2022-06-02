//Librerías
import { Routes, Route } from 'react-router-dom';

//Componentes
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { CountryDetail } from './components/CountryDetail';
import { NotFound } from './components/NotFound';


function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='country/:countryId' element={<CountryDetail />} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
