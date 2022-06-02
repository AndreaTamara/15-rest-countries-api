import { Result, Button } from 'antd';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext';
import  './NotFound.css';


export function NotFound() {

    const { darkMode } = useContext(ThemeContext);
    const navigate = useNavigate();

    return (
        <div className='not-found' style={{backgroundColor: darkMode ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)'}}>
            <Result
                className={darkMode ? 'msn-dark-mode' : ''}
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button
                    type="primary"
                    className={`back-button ${darkMode ? 'button-dark-mode' : ''}`}
                    onClick={() => navigate('/')}
                >Back Home</Button>}
            />
        </div>

    )
}