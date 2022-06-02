import { createContext, useState, useEffect } from "react";

import { ConfigProvider } from 'antd';

//crear un contexto y exportar por defecto
const ThemeContext = createContext();

//crear provider que le pasará la info a todos sus hijos
const ThemeProvider=({children})=>{
    const [darkMode,setDarkMode] = useState(false);

    const handleDarkMode= (e)=>{
        const active=darkMode
        setDarkMode(!active)
      }
      useEffect(()=>{
          ConfigProvider.config({theme:{primaryColor:'black'}})
      },[darkMode])
    
    //objeto que contiene los datos que se van a compartir con los componentes hijos del provider
    const data={darkMode,handleDarkMode}

    return(
        <ConfigProvider>
        <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
        </ConfigProvider>
    )

}
export {ThemeProvider};
export default ThemeContext;