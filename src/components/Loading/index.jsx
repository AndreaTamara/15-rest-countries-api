import { Spin } from "antd";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import './Loading.css';

export function Loading() {
    const { darkMode } = useContext(ThemeContext);

    return (
        <div className='spinner' style={{ backgroundColor: darkMode ? 'hsl(207, 26%, 17%)' : '' }}> 
        <Spin size="large" />
        </div>
    )


}