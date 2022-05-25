import { Input, Select } from 'antd';
import './NavBar.css'

const { Option } = Select;


export function NavBar() {


    return (
        <nav className='filters'>
            <Input placeholder="Search for a country..." />
            <Select
                showSearch
                placeholder="Filter by Region"
                optionFilterProp="children"
                //onChange={onChange}
                //onSearch={onSearch}
                filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
            >
                <Option value="africa">Africa</Option>
                <Option value="america">America</Option>
                <Option value="asia">Asia</Option>
                <Option value="europa">Europa</Option>
                <Option value="oceania">Oceania</Option>
            </Select>

        </nav>
    )
}