import { Input, Button} from 'antd';
import './NavBar.css'


export function NavBar() {

    
    return (
        <nav className='filters'>
            <Input placeholder="Search for a country..." />
            <Button type='primary'>Filter by Region</Button>
            
        </nav>
    )
}