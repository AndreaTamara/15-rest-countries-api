import './Header.css'

export function Header (){
    return(
        <header>
            <h1>Where in the world?</h1>
            <div className='switch-mode'><ion-icon name="moon-outline"></ion-icon>Dark Mode</div>

        </header>
    )
}