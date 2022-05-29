import { createContext } from "react";

//crear un contexto y exportar por defecto
const ThemeContext = createContext();

//crear provider que le pasará la info a todos sus hijos
const ThemeProvider=({children})=>{

    
    //objeto que contiene los datos que se van a pasar a los hijos
    const data={}

    return(
        <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
    )

}
export {ThemeProvider};
export default ThemeContext;