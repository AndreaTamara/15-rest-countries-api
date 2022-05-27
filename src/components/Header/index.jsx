import './Header.css'

export function Header ({onSwitchDarkMode, mode}){
    console.log('desde header:'+mode)
    return(
        <header className={mode?'header-dark-mode':''}>
            <h1 
            style={{color:mode?'hsl(0, 0%, 100%)':''}}>
                Where in the world?
            </h1>
            <div 
                style={{color:mode?'hsl(0, 0%, 100%)':''}}
                onClick={onSwitchDarkMode}
                className='switch-mode'>
                    <ion-icon name="moon-outline"></ion-icon>
                    Dark Mode
            </div>

        </header>
    )
}