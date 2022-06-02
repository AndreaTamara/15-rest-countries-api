//Librerías
import React from 'react';
import ReactDOM from 'react-dom/client';

//Componentes
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

//Estilos
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <ThemeProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ThemeProvider>

);

