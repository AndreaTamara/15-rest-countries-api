import { createContext, useState } from "react";

//crear un contexto y exportar por defecto
const ThemeContext = createContext();

//crear provider que le pasará la info a todos sus hijos
const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    const handleDarkMode = (e) => {
        setDarkMode(!darkMode)
    }

    //objeto que contiene los datos que se van a compartir con los componentes hijos del provider
    const data = { darkMode, handleDarkMode }

    return (
        <ThemeContext.Provider value={data}>
            {children}
        </ThemeContext.Provider>
    )

}
export { ThemeProvider };
export default ThemeContext;