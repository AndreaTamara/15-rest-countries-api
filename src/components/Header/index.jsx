import { useContext } from 'react'
import ThemeContext from '../../context/ThemeContext'
import './Header.css'

export function Header (){

    const {darkMode,handleDarkMode}=useContext(ThemeContext)
    
    return(
        <header className={darkMode?'header-dark-mode':''}>
            <h1 
            style={{color:darkMode?'hsl(0, 0%, 100%)':''}}>
                Where in the world?
            </h1>
            <div 
                style={{color:darkMode?'hsl(0, 0%, 100%)':''}}
                onClick={handleDarkMode}
                className='switch-mode'>
                    <ion-icon name="moon-outline"></ion-icon>
                    Dark Mode
            </div>

        </header>
    )
}