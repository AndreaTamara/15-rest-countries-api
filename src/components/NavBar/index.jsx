import { Input, Select } from 'antd';
import { useSearchParams } from 'react-router-dom';
import './NavBar.css'

const { Option } = Select;


export function NavBar() {
    const [searchParams, setSearchParams] = useSearchParams();

    const searchCountry = searchParams.get('search'||'')
    const searchRegion = searchParams.get('filter'||'')

    const handleInputChange = (e)=>{
        const searched=e.target.value.toLowerCase()
        if(searched){setSearchParams({search:searched})}
        else{setSearchParams({search:''})}
    }

    const handleFilter = (value) => {
        const filtered=value
        if(filtered){setSearchParams({filter:filtered})}
        else{setSearchParams({filter:''})}
      };
    
      //console.log(searchCountry)
      //console.log(searchRegion)

    return (
        <nav className='filters'>
            <Input 
            placeholder="Search for a country..." 
            value={searchCountry}
            onChange={handleInputChange}/>
            <Select
                //showSearch
                allowClear={true}
                style={{width:'200px'}}
                placeholder="Filter by Region"
                optionFilterProp="children"
                onChange={handleFilter}
                //onSearch={onSearch}
                //filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
            >
                <Option value="africa">Africa</Option>
                <Option value="america">America</Option>
                <Option value="asia">Asia</Option>
                <Option value="europe">Europe</Option>
                <Option value="oceania">Oceania</Option>
            </Select>

        </nav>
    )
}