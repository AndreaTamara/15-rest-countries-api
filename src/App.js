import { Routes, Route } from 'react-router-dom';


//importando componentes
import { Header } from './components/Header';
import { HomePage} from './components/HomePage';
import { CountryDetail } from './components/CountryDetail';
import { ThemeProvider } from './context/ThemeContext';
//importando estilos
import './App.css';



function App() {

  return (
    <div>
      <ThemeProvider>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='country/:countryId' element={<CountryDetail />} />
        <Route path='*' element={<h1 style={{textAlign:'center', lineHeight:'200px'}}>not found</h1>}/>
      </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
